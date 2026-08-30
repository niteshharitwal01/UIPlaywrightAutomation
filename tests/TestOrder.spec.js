// @ts-check
import { test, expect } from '@playwright/test';
import { count } from 'node:console';
import { waitForDebugger } from 'node:inspector';

test('has title', async ({ page }) => {
page.setDefaultTimeout(50000);
await page.goto("https://rahulshettyacademy.com/client");
//locator is used to enter locator
await page.locator('#userEmail').fill('niteshharitwal1@gmail.com');        
// fill is used to enter text
await page.locator('#userPassword').fill('Password@1');   
// click a locator
await page.locator('#login').click();                  
//textcontext used to grab text from locator
console.log(await page.locator('.card-body h5').first().textContent());
//console.log(await page.getByText('ADIDAS ORIGINAL'));
await page.locator('.fa-shopping-cart').nth(1).click();
await page.locator('[routerlink="/dashboard/cart"]').click();
await page.locator('li .btn-primary').last().click();
//Static DropDown Selection
await page.locator(".input.ddl").first().selectOption("02");
await page.locator(".input.ddl").last().selectOption("02");
//Dynamic Drop Down - we may have to do chaining to search that locator
await page.locator('input[placeholder="Select Country"]').pressSequentially('ind');
await page.locator('.ta-results').waitFor();
const tcount = await page.locator('.ta-results button').count();
console.log(tcount);
const text=await page.locator('.ta-results button').allTextContents();
console.log(text);
for(let i =0; i<tcount; i++ ){
    const country=await page.locator('.ta-results button').nth(i).textContent();

    if(country === ' India'){
        console.log(country);
        await page.locator('.ta-results button').nth(i).click();
        break;}
}
console.log("*************");
//await page.pause();
await page.locator('a.action__submit').click();

console.log(await page.locator('.hero-primary').textContent());

// Pause execution to manually review browser state with Playwright Inspector 
//await page.pause();


});


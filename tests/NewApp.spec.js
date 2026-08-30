import {test,expect} from '@playwright/test';

//page is playwright fixture
test('Create Order', async ({page}) => {          
await page.goto("https://rahulshettyacademy.com/client");
//locator is used to enter locator
await page.locator('#userEmail').fill('Nitesh');        
// fill is used to enter text
await page.locator('#userPassword').fill('Password');   
// click a locator
await page.locator('#login').click();                  
// Pause execution to manually review browser state
await page.pause();
});

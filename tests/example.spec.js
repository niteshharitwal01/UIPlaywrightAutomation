// @ts-check
import { test, expect } from '@playwright/test';
import { waitForDebugger } from 'node:inspector';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Google Login with incorrect credentials', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client');
  await page.locator('#userEmail').fill('Nitesh');
  await page.locator('#userPassword').fill('Password');
  await page.locator('#login').click();
    
});

test('Google Login with correct credential', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client');
  await page.locator('#userEmail').fill('rahulshettyacademy');
  await page.locator('#userPassword').fill('learning');
  await page.locator('#login').click();
  
});


test.only('Create Account with Mismatch Password', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client');
  await page.locator('.login-wrapper-footer-text').click();
  await page.locator('#firstName').fill('Nitesh');
  await page.locator('#lastName').fill('Haritwal');
  await page.locator('#userEmail').fill('niteshharitwal@gmail.com');
  await page.locator('[formcontrolname="userMobile"]').fill('1111111111');
  //await page.locator('[value="Male"]').click();
  await page.locator('select[formcontrolname="occupation"]').selectOption('3: Engineer');
  await page.locator('input[formcontrolname="gender"]').first().click();
  await expect(page.locator('input[formcontrolname="gender"]').first()).toBeChecked();  // Assertion for button checked
 // await page.pause();
  //await page.locator('input[formcontrolname="gender"]').nth(1).click();
  //await page.locator('input[formcontrolname="gender"]').last().click();
 // await page.locator('[value="Male"]').click();
  // await page.locator('[value="ale"]').click();
  //selectOption("3: Engineer");
  //await page.locator('[value="Male"]').click();
  await page.locator('#userPassword').fill('Password@');
  await page.locator('#confirmPassword').fill('Password@1');
  await page.locator('[name="login"]').click();
  await page.locator('input[type="checkbox"]').click();
  await expect(page.locator('input[type="checkbox"]')).toBeChecked();                   // assertion for checkbox
  //console.log(await page.locator('div[class="ng-star-inserted"]').textContent());
  //console.log(await page.locator('div[class="ng-star-inserted"]').allTextContents());
  //console.log(await page.locator('div[class="ng-star-inserted"]').innerText());
  const error = page.getByText('Password and Confirm Password');
  //console.log(await error.innerText());

  await page.pause();
});

test.only('Create Account with Existing user', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client');
  await page.locator('.login-wrapper-footer-text').click();
  await page.locator('#firstName').fill('Nitesh');
  await page.locator('#lastName').fill('Haritwal');
  await page.locator('#userEmail').fill('niteshharitwal@gmail.com');
  await page.locator('[formcontrolname="userMobile"]').fill('1111111111');
  //await page.locator('[value="Male"]').click();
  await page.locator('select[formcontrolname="occupation"]').selectOption('3: Engineer');
  await page.locator('input[formcontrolname="gender"]').first().click();
 // await page.pause();
  //await page.locator('input[formcontrolname="gender"]').nth(1).click();
  //await page.locator('input[formcontrolname="gender"]').last().click();
 // await page.locator('[value="Male"]').click();
  // await page.locator('[value="ale"]').click();
  //selectOption("3: Engineer");
  //await page.locator('[value="Male"]').click();
  await page.locator('#userPassword').fill('Password@1');
  await page.locator('#confirmPassword').fill('Password@1');
  await page.locator('[name="login"]').click();
  await page.locator('input[type="checkbox"]').click();
  //console.log(await page.locator('div[class="ng-star-inserted"]').textContent());
  //console.log(await page.locator('div[class="ng-star-inserted"]').allTextContents());
  //console.log(await page.locator('div[class="ng-star-inserted"]').innerText());
  console.log(await page.locator('div[class="ng-star-inserted"]').inputValue());
  const error = page.getByText('User already exisits with this Email Id!');
  console.log(error);
  //console.log(await error.innerText());
  //await page.pause();
  //await page.locator('.btn.btn-primary').click();
  //await page.pause();
});

test('Create Account for New user', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client');
  await page.locator('.login-wrapper-footer-text').click();
  await page.locator('#firstName').fill('Nitesh');
  await page.locator('#lastName').fill('Haritwal');
  await page.locator('#userEmail').fill('niteshharitwal1@gmail.com');
  await page.locator('[formcontrolname="userMobile"]').fill('1111111111');
  //await page.locator('[value="Male"]').click();
  await page.locator('select[formcontrolname="occupation"]').selectOption('3: Engineer');
  await page.locator('input[formcontrolname="gender"]').first().click();
 // await page.pause();
  //await page.locator('input[formcontrolname="gender"]').nth(1).click();
  //await page.locator('input[formcontrolname="gender"]').last().click();
 // await page.locator('[value="Male"]').click();
  // await page.locator('[value="ale"]').click();
  //selectOption("3: Engineer");
  //await page.locator('[value="Male"]').click();
  await page.locator('#userPassword').fill('Password@1');
  await page.locator('#confirmPassword').fill('Password@1');
  await page.locator('[name="login"]').click();
  await page.locator('input[type="checkbox"]').click();
  //console.log(await page.locator('div[class="ng-star-inserted"]').textContent());
  //console.log(await page.locator('div[class="ng-star-inserted"]').allTextContents());
  //console.log(await page.locator('div[class="ng-star-inserted"]').innerText());
  //const error = page.getByText('User already exisits with this Email Id!');
  //console.log(error);
  //console.log(await error.innerText());
  await page.pause();
  await page.locator('.btn.btn-primary').click();
  await page.pause();
});

test('Login with existing user', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client');
  await page.locator('#userEmail').fill('niteshharitwal1@gmail.com');
  await page.locator('#userPassword').fill('Password@1');
  await page.locator('[name="login"]').click();
  await page.locator('input[type="submit"]').click();
  await page.pause();
  console.log(await page.locator('.text-muted').nth(1).textContent());
  await page.pause();
});
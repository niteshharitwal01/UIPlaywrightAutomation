# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TestOrder.spec.js >> has title
- Location: TestOrder.spec.js:6:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://rahulshettyacademy.com/client", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - generic: Ecom
      - generic [ref=e9]:
        - link " dummywebsite@rahulshettyacademy.com" [ref=e11] [cursor=pointer]:
          - /url: emailto:dummywebsite@rahulshettyacademy.com
          - generic [ref=e12]: 
          - text: dummywebsite@rahulshettyacademy.com
        - generic [ref=e13]:
          - link "" [ref=e14] [cursor=pointer]:
            - /url: "#"
          - link "" [ref=e16] [cursor=pointer]:
            - /url: "#"
          - link "" [ref=e18] [cursor=pointer]:
            - /url: "#"
          - link "" [ref=e20] [cursor=pointer]:
            - /url: "#"
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "We Make Your Shopping Simple" [level=3]
      - heading [level=1] [ref=e24]:
        - text: Practice Website for
        - emphasis [ref=e25]: Rahul Shetty Academy
        - text: Students
      - link "Register" [ref=e26] [cursor=pointer]:
        - /url: "#/auth/register"
    - generic [ref=e28]:
      - paragraph [ref=e29]:
        - generic [ref=e30]: Register to sign in with your personal account
      - generic [ref=e31]:
        - heading "Log in" [level=1] [ref=e32]
        - generic [ref=e33]:
          - generic [ref=e34]:
            - generic [ref=e35]: Email
            - textbox "email@example.com" [ref=e36]
          - generic [ref=e37]:
            - generic [ref=e38]: Password
            - textbox "enter your passsword" [ref=e39]
          - button "Login" [ref=e40] [cursor=pointer]
        - link "Forgot password?" [ref=e41] [cursor=pointer]:
          - /url: "#/auth/password-new"
        - paragraph [ref=e42] [cursor=pointer]: Don't have an account? Register here
  - generic [ref=e43]:
    - heading "Why People Choose Us?" [level=1] [ref=e46]
    - generic [ref=e47]:
      - generic [ref=e48]:
        - generic [ref=e49]: 
        - generic [ref=e51]:
          - heading "3546540" [level=1]
          - paragraph [ref=e52]: Successfull Orders
      - generic [ref=e53]:
        - generic [ref=e54]: 
        - generic [ref=e56]:
          - heading "37653" [level=1]
          - paragraph [ref=e57]: Customers
      - generic [ref=e58]:
        - generic [ref=e59]: 
        - generic [ref=e61]:
          - heading "3243" [level=1]
          - paragraph [ref=e62]: Sellers
    - generic [ref=e63]:
      - generic [ref=e64]:
        - generic [ref=e65]: 
        - generic [ref=e67]:
          - heading "4500+" [level=1]
          - paragraph [ref=e68]: Daily Orders
      - generic [ref=e69]:
        - generic [ref=e70]: 
        - generic [ref=e72]:
          - heading "500+" [level=1]
          - paragraph [ref=e73]: Daily New Customer Joining
```

# Test source

```ts
  1  | // @ts-check
  2  | import { test, expect } from '@playwright/test';
  3  | import { count } from 'node:console';
  4  | import { waitForDebugger } from 'node:inspector';
  5  | 
  6  | test('has title', async ({ page }) => {
  7  | page.setDefaultTimeout(50000);
> 8  | await page.goto("https://rahulshettyacademy.com/client");
     |            ^ Error: page.goto: Test timeout of 30000ms exceeded.
  9  | //locator is used to enter locator
  10 | await page.locator('#userEmail').fill('niteshharitwal1@gmail.com');        
  11 | // fill is used to enter text
  12 | await page.locator('#userPassword').fill('Password@1');   
  13 | // click a locator
  14 | await page.locator('#login').click();                  
  15 | //textcontext used to grab text from locator
  16 | console.log(await page.locator('.card-body h5').first().textContent());
  17 | //console.log(await page.getByText('ADIDAS ORIGINAL'));
  18 | await page.locator('.fa-shopping-cart').nth(1).click();
  19 | await page.locator('[routerlink="/dashboard/cart"]').click();
  20 | await page.locator('li .btn-primary').last().click();
  21 | //Static DropDown Selection
  22 | await page.locator(".input.ddl").first().selectOption("02");
  23 | await page.locator(".input.ddl").last().selectOption("02");
  24 | //Dynamic Drop Down - we may have to do chaining to search that locator
  25 | await page.locator('input[placeholder="Select Country"]').pressSequentially('ind');
  26 | await page.locator('.ta-results').waitFor();
  27 | const tcount = await page.locator('.ta-results button').count();
  28 | console.log(tcount);
  29 | const text=await page.locator('.ta-results button').allTextContents();
  30 | console.log(text);
  31 | for(let i =0; i<tcount; i++ ){
  32 |     const country=await page.locator('.ta-results button').nth(i).textContent();
  33 | 
  34 |     if(country === ' India'){
  35 |         console.log(country);
  36 |         await page.locator('.ta-results button').nth(i).click();
  37 |         break;}
  38 | }
  39 | console.log("*************");
  40 | //await page.pause();
  41 | await page.locator('a.action__submit').click();
  42 | 
  43 | console.log(await page.locator('.hero-primary').textContent());
  44 | 
  45 | // Pause execution to manually review browser state with Playwright Inspector 
  46 | //await page.pause();
  47 | 
  48 | 
  49 | });
  50 | 
  51 | 
```
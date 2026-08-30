const {test} = require('@playwright/test');
const { constrainedMemory } = require('node:process');
const { LoginPage } = require('../Pages/LoginPage');
//Convert JSON into String and then create a JSON object
const dataSet =JSON.parse(JSON.stringify(require('../Utils/LoginPage_TestData.json')));

for (const data of dataSet.users){
test(`Login with ${data.username} to CGI TimeSheet`, async ({page})=> {
    const loginPage = new LoginPage(page);
  //  const username = "nitesh.haritwal@cgi.com";
  //  const password = "Madhuri@03281988";
    await loginPage.gotoLoginPage();
    
    //await loginPage.login(dataSet.username, dataSet.password); // fir single data in json file
    //await page.pause();
    //Opening a NewWindiw and Switching to that wondow
    await loginPage.login(data.username, data.password);
    const [timesheetpage]= await Promise.all([
    page.context().waitForEvent('page'),
    page.getByRole('link', { name: 'Timesheet: PSA Finance ' }).click()
    ]);
    
    //Work on New Page
    await timesheetpage.waitForLoadState('networkidle');
    await timesheetpage.getByRole('textbox', { name: 'User ID' }).fill('nitesh.haritwal');

    });
}
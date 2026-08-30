class LoginPage{
        
    constructor(page){
        this.page = page;
        this.email= page.locator("input[type='email']");
        this.emailclickbuttom= page.locator("#idSIButton9");
        this.password=page.getByPlaceholder('Password');
        this.passwordclickbutton=page.locator('#idSIButton9');
    }

    async gotoLoginPage()
    {
        await this.page.goto("https://intranet.ent.cgi.com/");
    }
    
    async login(username, password) {
        await this.email.fill(username);
        await this.emailclickbuttom.click();
        await this.password.fill(password);
        await this.passwordclickbutton.click();

} 
}
module.exports = { LoginPage };

 
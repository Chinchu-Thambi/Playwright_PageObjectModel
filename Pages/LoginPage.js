exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.username_txtbox = page.getByLabel('Username');
        this.password_txtbox = page.getByLabel('Password');
        this.login_button = page.getByRole('button', { name: 'Login' });
    }

    // method to load URL
    async launchApplication(){
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    //method to enter login credentials
    async login(username, password){
        await this.username_txtbox.fill(username);
        await this.password_txtbox.fill(password);
        await this.login_button.click();
    }    
}
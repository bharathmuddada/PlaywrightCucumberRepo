
import { expect, Locator,  Page } from '@playwright/test';
export default class BasePage{
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    private Elements = {
       usernameField :"#user-name",
       passwordField :"#password",
       logginbutton:"#login-button"
    }

    async navigateToUrl(){
        await this.page.goto("https://www.saucedemo.com/",{ waitUntil: "domcontentloaded"})
    }

    async doLogin(username:string){
        if(username ==="valid" ){
        await this.page.locator(this.Elements.usernameField).fill("standard_user")
        }
        await this.page.locator(this.Elements.passwordField).fill("secret_sauce")
        await this.page.locator(this.Elements.logginbutton).click()
    }

    async loginValidation(){
        await this.page.getByTitle("Swag Labs")

    }

    async checkPresenceOfText(textMessage:string){
        await expect(this.page.getByText(textMessage)).toBeVisible({ timeout: 10000 })
    }
}

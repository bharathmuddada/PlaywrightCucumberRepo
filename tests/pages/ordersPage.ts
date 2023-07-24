
import { expect, Locator,  Page } from '@playwright/test';
export default class OrdersPage{
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    private Elements = {
       usernameField :"#user-name",
       passwordField :"#password",
       logginbutton:"#login-button"
    }

    async addItemToCart(itemName:string){
        const itemElement=`(//div[contains(text(),'${itemName}')]//ancestor::div[@class='inventory_item_description']//following::div[contains(@class,'pricebar')]//button[contains(text(),'Add to cart')])[1]`
        this.page.locator(itemElement).click()
    }
}


import { expect, Locator,  Page } from '@playwright/test';
export default class CartPage{
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    private Elements = {
       continueShoppingButton :"#continue-shopping",
       checkoutButton :"#checkout",
       shoppingCartLink:".shopping_cart_link",
       firstNameField:"#first-name",
       lastNameField:"#last-name",
       zipCodeField:"#postal-code",
       continueButton:"#continue",
       finishButton:"#finish"
       
    }

    async doCheckOut(){
        await this.page.locator(this.Elements.checkoutButton).click()
    }

    async navigateToCart(){
        await this.page.locator(this.Elements.shoppingCartLink).click()
    }

    async enterOrderDetails(){
        await this.page.locator(this.Elements.firstNameField).fill("TestFirstName");
        await this.page.locator(this.Elements.lastNameField).fill("TestLastName");
        await this.page.locator(this.Elements.zipCodeField).fill("123456");
        await this.page.locator(this.Elements.continueButton).click();
    }

    async placeOrder() {
        await this.page.locator(this.Elements.finishButton).click()
    }

   
}
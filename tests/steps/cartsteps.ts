import { Given,When,Then } from "@cucumber/cucumber";

import { pageFixture } from "../hooks/pageFixture";
import CartPage from "../pages/cartPage";


let cartPage: CartPage

When('I navigate to cart page', async function () {
  cartPage = new CartPage(pageFixture.page)
  cartPage.navigateToCart()
})


When('I perform checkout in cart page', async function () {
   
    cartPage.doCheckOut()
  })

When('I enter order details', async function () {

cartPage.enterOrderDetails()
})  

When('I place the order',async function () {
cartPage.placeOrder()
})
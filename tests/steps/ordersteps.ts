import { Given,When,Then } from "@cucumber/cucumber";
import BasePage from "../pages/basePage";
import OrdersPage from "../pages/ordersPage";
import { pageFixture } from "../hooks/pageFixture";


let basePage: BasePage
let ordersPage: OrdersPage

When('I add {string} to cart', async function (itemName) {
  ordersPage = new OrdersPage(pageFixture.page)
  ordersPage.addItemToCart(itemName)
   
});

When('Product is added to cart', async function () {
    
     
});


When('I place an order for the items in cart', async function () {
  
   
});


Then('Confirmation should show the message {string}', async function (string) {
    
   
});
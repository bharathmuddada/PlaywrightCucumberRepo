import { Given,When,Then } from "@cucumber/cucumber";
import BasePage from "../pages/basePage";
import { pageFixture } from "../hooks/pageFixture";


let basePage: BasePage


Given('I navigate to the saucedeom url', async function () {
  basePage = new BasePage(pageFixture.page)
  await basePage.navigateToUrl()

});

When('I login with {string} credentials', async function (username) {
  if(username === "valid"){
  await basePage.doLogin("valid")}
  else{
  await basePage.doLogin(username)}
});

Then('No username and password alert should be displayed', async function () {
  
  await basePage.loginValidation()
});

Then('{string} message should be displayed',async function (textToBeValidated:string) {
    await basePage.checkPresenceOfText(textToBeValidated)
});
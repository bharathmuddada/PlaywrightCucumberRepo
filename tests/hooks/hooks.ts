import { After, AfterAll, Before, BeforeAll, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium } from "@playwright/test";
import { pageFixture } from "./pageFixture";


let browser:Browser
let context:BrowserContext

BeforeAll(async function(){

    browser = await chromium.launch({headless:false});

})

Before(async function(){

   context = await browser.newContext()
   const page = await context.newPage()
   pageFixture.page = page
})

After(async function ({pickle,result}) {
    if(result?.status == Status.FAILED){
    const screenshotImg = await pageFixture.page.screenshot({path:`./test-results/screenshots/${pickle.name}`,type:"png"})
    await this.attach(screenshotImg,"image/png")
    }
    await pageFixture.page.close()
    await context.close();
})

AfterAll(async function () {
    await browser.close()
})
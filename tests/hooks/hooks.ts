import { After, AfterAll, Before, BeforeAll, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium } from "@playwright/test";
import { pageFixture } from "./pageFixture";
const fs = require("fs-extra");

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: true });
});

Before(async function () {
  context = await browser.newContext({
    recordVideo: { dir: "test-results/video" },
  });
  const page = await context.newPage();
  pageFixture.page = page;
});

After(async function ({ pickle, result }) {
  let videoPath: string | undefined;
  let screenshotImg: Buffer | any;
  if (result?.status == Status.FAILED) {
    screenshotImg = await pageFixture.page.screenshot({
      path: `./test-results/screenshots/${pickle.name}`,
      type: "png",
    });
    videoPath = await pageFixture.page.video()!.path();
  }
  await pageFixture.page.close();
  await context.close();
  if (result?.status == Status.FAILED) {
    this.attach(screenshotImg, "image/png");
    this.attach(fs.readFileSync(videoPath), "video/webm");
  }
});

AfterAll(async function () {
  await browser.close();
});

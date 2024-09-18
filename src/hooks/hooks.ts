// import { Before, After, Status } from '@cucumber/cucumber';
// import { Browser, chromium, Page } from '@playwright/test';
// import { pageFixture } from './pageFixture';

// let browser: Browser;
// let page: Page;


// Before(async () => {
//     console.log('Launch Browser, performed before each individual test scenario');
//     try {
//         browser = await chromium.launch({ headless: false, args: ['--incognito'] });
//         page = await browser.newPage();
//         pageFixture.page = page;
//         pageFixture.page.goto(' https://uat-survey.taxcreditco.com/automation-challenge');
//     } catch (error) {
//         console.error("Error occurred during initialization:", error);
//     }
// });

// After(async ({ pickle, result }) => {
//     console.log('Browser closed after each scenario, and result?.status');
//     // screenshot
//     // if (result?.status == Status.FAILED) {
//     //     await pageFixture.page.screenshot({
//     //         path: `./test-results/screenshots/${pickle.name}.png`,
//     //         type: 'png',
//     //     });
//     // }

//     try {
//         if (page)
//             await page.close();
//         if (browser)
//             await browser.close();
//     } catch (error) {
//         console.error("Error during cleanup:, error")
//     }
// });







import { chromium, Browser, Page } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { Before, After } from "@cucumber/cucumber";
// const { Before, After } = createBdd();

let browser: Browser;
let page: Page;

Before(async () => {
    try {
        browser = await chromium.launch({ headless: false, args: ['--incognito'] });
        //const context = await browser.newContext();
        page = await browser.newPage();
        //await page.goto(process.env.URL);
        pageFixture.page = page;
    } catch (error) {
        console.error("Error occurred during initialization:", error);
    }
});

After(async () => {
    try {
        if (page)
            await page.close();
        if (browser) 
            await browser.close();
    } catch (error) {
        console.error("Error during cleanup:, error")
    }
});
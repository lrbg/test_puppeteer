
"use strict"
const puppeteer = require("puppeteer");
require("dotenv").config();
 
const url_actived = process.env.URL_WEB;
const user = process.env.USER;
const pass = process.env.PASS;
 
(async() =>{
    try {
 
        const browser = await puppeteer.launch({
            headless: false, // show
            devtools: false,
        });
 
        const page = await browser.newPage();
        await page.goto(url_actived);
        await page.click('.login');   
        await page.waitForSelector('input[id="email"]', { visible: true, });
        await page.type('input[id="email"]', "usertest2@mail.com", { delay:10 });
        await page.waitForSelector('input[id="passwd"]', { visible: true, });
        await page.type('input[id="passwd"]', "12121212Qw.", { delay:10 });
        await page.waitForSelector('button[id="SubmitLogin"]', { visible: true, });
        await page.click('button[id="SubmitLogin"]');

    } catch (error) {
        console.log(error);
    }
})();

const { chromium } = require('playwright');
const { test, describe, expect } = require('playwright');
//const {ClassicRunner, Eyes, Target, RectangleSize} = require('@applitools/eyes-playwright')

describe('UI tests for bookstore using playwright', async() => {

    let browser;
    let page;
    let context;
    let firstRowCells;
    //const eyes = new Eyes(new ClassicRunner());

    beforeAll(async()=>{
        
        browser = await chromium.launch({headless:false});
        context = await browser.newContext();
        page = await context.newPage();

        await page.goto('https://demoqa.com/books');
    
    });

    afterAll(async()=>{
        
        await browser.close();

    });

    test.only('Should load the page', async()=>{
        expect(page).not.toBeNull();
        expect(await page.title()).not.toBeNull();
    });


    test('Should be able to search for eloquent javascript', async()=>{
        await page.fill('#searchBox', 'eloquent');
    });

    test('Should check if book image is okay', async()=>{
        firstRowCells = await page.$$('.ReactTable .rt-tr-group:nth-child(1) .rt-td')
        let imgUrl = await firstRowCells[0].$('img');
        expect(await imgUrl.getAttribute('src')).not.toBeNull();
    });

    test('Should check if title is okay', async()=>{
        expect(await firstRowCells[1].innerText()).toBe('Eloquent JavaScript, Second Edition');
    });

    test('Should check if author is okay', async()=>{
        expect(await firstRowCells[2].innerText()).toBe('Marijn Haverbeke');
    });

    test('Should check if publisher is okay', async()=>{
        expect(await firstRowCells[2].innerText()).toBe('No Starch Press');
    });

    test('Should look okay', async()=>{ //Visual testing using Applitools, npm i -D @applitools/eyes-playwright
        await page.waitForSelector('h3', {state:'attached'});
        //await eyes.open(page, 'The internet', 'Dynamic content', new RectangleSze(800,600)) //await eyes.open(driver, appName, testName, viewPortSize)
        //await eyes.check(Target.window().fully());
        //await eyes.close();
    });
})
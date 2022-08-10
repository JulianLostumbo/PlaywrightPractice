const { chromium } = require('playwright');

( async() => {
    const browser = await chromium.launch({headless:false, slowMo:50});
    
    const page = await browser.newPage();
    await page.goto('https://applitools.com/');
    await page.screenshot({path:'fullpage.png', fullPage:true});
    await page.screenshot({path:'screenshot.png'});
    const logo = await page.$('logo');
    await logo.screenshot({path:'screenshot-logo.png'});

    await browser.close();
})();
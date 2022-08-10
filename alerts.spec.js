const { chromium } = require('playwright');

( async() => {
    const browser = await chromium.launch({headless:false, slowMo:300});
    
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/alerts');
    
    page.once('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept(); //pw dismisses an alert by default
    });
    await page.click('#confirmButton');

    page.once('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept('my text is this'); //pw dismisses an alert by default
    });
    await page.click('#promtButton');

    await browser.close();
    
})();
const { chromium } = require('playwright');

( async() => {
    const browser = await chromium.launch({headless:false, slowMo:300});
    
    const page = await browser.newPage();
    await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');
    
    const checks = await page.$$('#main div :nth-child(1) input[type="checkbox"]');
    await checks[1].check(); //the second checkbox
    await checks[0].check(); //uncheck the first one

    const radios = await page.$$('#main div :nth-child(1) input[type="radio"]');
    await radios[1].check(); //the second radio button




    await browser.close();
})();
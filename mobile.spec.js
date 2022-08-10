const { chromium, devices } = require('playwright'); //devices returns a dictionary of devices
const Iphone = devices['iPhone 11'];

( async() => {
    const browser = await chromium.launch({headless:false, slowMo:100});
    
    const context = await browser.newContext({
        ...Iphone,
        permissions:['geolocation'],
        geolocation:{latitude:19.432608, longitude: -99.133209},
        locale:'fr-FR'
    });
    const page = await context.newPage();
    await page.goto('https://maps.google.com');
    await page.waitForTimeout(5000);

    await browser.close();
})();
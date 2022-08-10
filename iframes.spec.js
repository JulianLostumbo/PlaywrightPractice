const { chromium } = require('playwright');

( async() => {
    const browser = await chromium.launch({headless:false, slowMo:300});
    
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/frames');
    
    const iframe = await page.frame({url:/\/sample/});
    const iframeH1 = await iframe.$('h1');
    console.log(await iframeH1.innerText());
    

    await browser.close();
})();
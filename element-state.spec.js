const { chromium } = require('playwright');

( async() => {
    const browser = await chromium.launch({headless:false, slowMo:300});
    
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/automation-practice-form');
    
    const firstNmae = await page.$('#firstName');
    const sportsCheck = await page.$('#hobbies-checkbox-1');
    const submitBtn = await page.$('#submit');

    console.log(await firstNmae.isDisabled());
    console.log(await firstNmae.isEnabled());
    console.log(await firstNmae.isEditable());
    console.log(await sportsCheck.isChecked());
    console.log(await sportsCheck.isVisible());
    console.log(await submitBtn.isVisible());
    console.log(await submitBtn.isHidden());

    await browser.close();
})();
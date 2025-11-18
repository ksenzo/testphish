
const { Builder, By, until } = require('selenium-webdriver');

(async () => {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://web.telegram.org/k/');

    // 1. нажимаем "Log in by phone Number"
    const loginBtnSelector = 'button.btn-primary.btn-secondary.btn-primary-transparent.primary.rp';

    let loginBtn = await driver.wait(
        until.elementLocated(By.css(loginBtnSelector)),
        10000
    );

    await driver.executeScript("arguments[0].click();", loginBtn);

    //console.log("▶ Кнопка 'Log in by phone Number' нажата");

    // 2. Ждём появления поля выбора страны
    let countryInput = await driver.wait(
        until.elementLocated(By.css('.input-field-input')),
        10000
    );

    await countryInput.sendKeys("Russia");  // или играйся: "Kazakhstan" / "Ukraine" и т.д.

    await driver.sleep(800); // выпадает список

    // выбираем первую строку из списка
    let firstCountryOption = await driver.findElement(By.css('li span.i18n[data-default-name="Russian Federation"]'));
    await firstCountryOption.click();

    //console.log("▶ Страна выбрана");

    // 3. Заполняем поле номера телефона

    //console.log(until.elementLocated(By.css('.input-field-input')));
    
   const secondElement = (await driver.findElements(By.css('.input-field-input')))[1];


    await secondElement.sendKeys("9605665969");  // ← твой номер БЕЗ +7
    //console.log("▶ Номер был введён");

    // 4. Нажимаем кнопку "Next"
    let nextBtn = await driver.wait(
        until.elementLocated(By.xpath("//button//span[text()='Next']")),
        5000
    );
    await driver.executeScript("arguments[0].click();", nextBtn);

    //console.log("▶ Нажата кнопка NEXT");

    // Далее Telegram попросит SMS code или code из Telegram app
    // Сюда можно добавить ввод кода, если хочешь автоматизировать дальше
})();

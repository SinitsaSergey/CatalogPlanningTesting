import {browser, ElementFinder, ExpectedConditions} from "protractor";

export class PrototypePage {

    replaceValue (elem: ElementFinder, value: string) {
        return elem.clear()
            .then (() => elem.sendKeys(value));
    }

    selectOption (elem: ElementFinder, option: ElementFinder) {
        return elem.click()
            .then(() => option.click());
    }

    clickAfterClick (elem: ElementFinder, expectedElem: ElementFinder) {
        return elem.click()
            .then(() => browser.wait(ExpectedConditions.visibilityOf(expectedElem)))
            .then(() => expectedElem.click())
    }

}
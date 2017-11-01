import {browser, ElementFinder, ExpectedConditions} from "protractor";

export class PrototypePage {

    /**
     *
     * @param {ElementFinder} elem - элемент, значение которого заменяется
     * @param {string} value - новое значение
     * @returns promise.Promise<void>
     */
    replaceValue (elem: ElementFinder, value: string) {
        return elem.clear()
            .then (() => elem.sendKeys(value));
    }

    /**
     *
     * @param {ElementFinder} elem - элемент, значение которого выбирается
     * @param {ElementFinder} option - выбранное значение
     * @returns promise.Promise<void>
     */
    selectOption (elem: ElementFinder, option: ElementFinder) {
        return elem.click()
            .then(() => option.click());
    }

    /**
     *
     * @param {ElementFinder} elem первый элемент для клика
     * @param {ElementFinder} elemToWait ожидаемый элемент для второго клика
     * @returns promise.Promise<void>
     */
    clickAfterClick (elem: ElementFinder, elemToWait: ElementFinder) {
        return elem.click()
            .then(() => browser.wait(ExpectedConditions.visibilityOf(elemToWait)))
            .then(() => elemToWait.click())
    }

}
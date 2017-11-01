import {browser, ElementFinder, protractor} from "protractor";

export class Actions {

    /**
     *
     * @param {ElementFinder} elem первый элемент для двойного клика
     * @param {ElementFinder} elemToWait - элемент появление которого ожидается после двойного клика
     * @returns promise.Promise<void>
     */
    static doubleClickAndWait(elem: ElementFinder, elemToWait: ElementFinder) {
        return browser.actions().doubleClick(elem).perform()
            .then(() => browser.wait(protractor.ExpectedConditions.visibilityOf(elemToWait)));
    }

    static pressEnterKey () {
        return browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }

    static pressRightKey () {
        return browser.actions().sendKeys(protractor.Key.ARROW_RIGHT).perform();
    }

}
import {browser, ElementFinder, protractor} from "protractor";

export class Actions {

    /**
     *
     * @param {ElementFinder} elem
     * @param {ElementFinder} expectedElem
     */
    static doubleClickAndWait(elem: ElementFinder, expectedElem: ElementFinder) {
        return browser.actions().doubleClick(elem).perform()
            .then(() => browser.wait(protractor.ExpectedConditions.visibilityOf(expectedElem)));
    }

    /**
     *
     * @param {ElementFinder} elem
     * @param {ElementFinder} expectedElem
     */
    static clickAndWait(elem: ElementFinder, expectedElem: ElementFinder) {
       return elem.click()
           .then(() => browser.wait(protractor.ExpectedConditions.visibilityOf(expectedElem)));
    }

}
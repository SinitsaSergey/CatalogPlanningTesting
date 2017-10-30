import {browser, ElementFinder} from "protractor";

export class Actions {

    /**
     *
     * @param {ElementFinder} element
     */
    static doobleClick (element: ElementFinder): void {
        browser.actions().doubleClick(element).perform();
    }

    static replaceValue (element: ElementFinder, value: string): void {
        element.clear();
        element.sendKeys(value);
    }

    static selectOption (element: ElementFinder, option: ElementFinder): void {
        element.click();
        option.click();
    }

}
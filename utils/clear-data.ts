import {browser} from "protractor";

export class ClearData {

    static deleteCookies() {
        browser.manage().deleteCookie('selectedPublicationId');
        browser.manage().deleteCookie('selectedPublicationTypeId');
        browser.manage().deleteCookie('selectedSeasonId');
    }

}
import {browser} from "protractor";

    export function deleteCookies() {
        browser.manage().deleteCookie('selectedPublicationId');
        browser.manage().deleteCookie('selectedPublicationTypeId');
        browser.manage().deleteCookie('selectedSeasonId');
    }
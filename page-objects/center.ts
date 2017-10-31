import {$, browser, by, protractor} from "protractor";
import {PrototypePage} from "./prototype-page";
import {Actions} from "../utils/actions";
import {ModalContent} from "./modal-content";

const ROOT = $('#center');

export class Center extends PrototypePage {

    getTreeElement(containingText: string) {
        return ROOT.element(by.cssContainingText('.aciTreeText', containingText));
    }

    getListElement(containingText: string) {
        return ROOT.element(by.cssContainingText('li', containingText))
    }

    selectElementInTree(text1: string, text2: string, text3: string) {
        return Actions.doubleClickAndWait(this.getTreeElement(text1), this.getTreeElement(text2))
            .then(() => Actions.doubleClickAndWait(this.getTreeElement(text2), this.getTreeElement(text3)))
            .then(() => this.getTreeElement(text3).click())
    }

    createVorteileButton = ROOT.$('.glyphicon-plus');
    deleteVorteileButton = ROOT.$('.glyphicon-minus');
    createPublicationButton = ROOT.$("button[title='Neue Publikation']");
    createdPublication = ROOT
        .element(by.cssContainingText('.aciTreeText', ModalContent.NEW_NUMMER + ' Schwarzpreis ET: 05.05.2017'));
    removePublicationButton = ROOT.$('.glyphicon-trash');

    isCreatedPublicationPresent() {
        return browser.wait(protractor.ExpectedConditions.visibilityOf(this.createdPublication))
            .then(() => this.createdPublication.isPresent())
    }

    deleteCreatedPublication() {
        return this.clickAfterClick(this.createdPublication, this.removePublicationButton);
    }

    generateReportButton = ROOT.$('.glyphicon-file');

}
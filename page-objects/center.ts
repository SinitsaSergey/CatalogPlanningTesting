import {$, by, browser, protractor} from "protractor";
import {PrototypePage} from "./prototype-page";
import {Actions} from "../utils/actions";
import {ModalContent} from "./modal-content";

const ROOT = $('#center');

export class Center extends PrototypePage {

    treeElementLevel1 = ROOT.element(by.cssContainingText('.aciTreeText', '40, Herbst/Winter 2015/2016'));
    treeElementLevel2 = ROOT.element(by.cssContainingText('.aciTreeText', 'Prospekt'));
    treeElementLevel3 = ROOT.element(by.cssContainingText('.aciTreeText', '6556 Schwarzpreis'));

    saison34ListElement = ROOT.element(by.cssContainingText('li', '34'));

    getListElement(text: string) {
        return ROOT.element(by.cssContainingText('li', text))
    }

    selectElementInTree() {
        return Actions.doubleClickAndWait(this.treeElementLevel1, this.treeElementLevel2)
            .then(() => Actions.doubleClickAndWait(this.treeElementLevel2, this.treeElementLevel3))
            .then(() => this.treeElementLevel3.click())
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

    deleteCreatedPublication () {
        return this.clickAfterClick(this.createdPublication, this.removePublicationButton);
    }

}
import {$, browser, by, ElementFinder, protractor} from "protractor";
import {PrototypePage} from "./prototype-page";
import {Actions} from "../utils/actions";
import {ModalContent} from "./modal-content";

const ROOT = $('#center');

export class Center extends PrototypePage {

    getTreeElement(parentElem: ElementFinder, containingText: string) {
        return parentElem.element(by.cssContainingText('.aciTreeText', containingText));
    }

    getListElement(containingText: string) {
        return ROOT.element(by.cssContainingText('li', containingText))
    }

    selectElementInTree(text1: string, text2: string, text3: string) {
        let treeElement1 = ROOT.element(by.cssContainingText('.aciTreeLi.aciTreeInode.aciTreeLevel0', text1));
        let treeElement2 = this.getTreeElement(treeElement1, text2);
        let treeElement3 = this.getTreeElement(treeElement1, text3);
        return Actions.doubleClickAndWait(treeElement1, treeElement2)
            .then(() => Actions.doubleClickAndWait(treeElement2, treeElement3))
            .then(() => treeElement3.click())
    }

    createButton = ROOT.$('.glyphicon-plus');
    deleteButton = ROOT.$('.glyphicon-minus');
    createPublicationButton = ROOT.$("button[title='Neue Publikation']");
    createdPublication = ROOT
        .element(by.cssContainingText('.aciTreeText', ModalContent.NEW_NUMMER + ' Schwarzpreis ET: 05.05.2017'));
    removePublicationButton = ROOT.$('.glyphicon-trash');
    resetChangesButton = ROOT.$('.fa-undo');
    generateReportButton = ROOT.$('.glyphicon-file');

    isCreatedPublicationPresent() {
        return browser.wait(protractor.ExpectedConditions.visibilityOf(this.createdPublication))
            .then(() => this.createdPublication.isPresent())
    }

    deleteCreatedPublication() {
        return this.clickAfterClick(this.createdPublication, this.removePublicationButton);
    }

    enshopNrCompleteArrow = ROOT.$('.htRight.tBold.htMiddle.htAutocomplete.current').$('.htAutocompleteArrow');
    handsontableInput = ROOT.$$('textarea.handsontableInput').get(1);

    inputEnshopNrValue (handsontableValue: string) {
        return browser.wait(protractor.ExpectedConditions.visibilityOf(this.enshopNrCompleteArrow))
            .then(() => Actions.pressEnterKey())
            .then(() => this.handsontableInput.sendKeys(handsontableValue))
            .then(() => Actions.pressRightKey())
    }
}
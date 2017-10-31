import {$, by} from "protractor";
import {Prototype} from "./prototype";

const ROOT = $('.modal-content');

export class ModalContent extends Prototype{

    inputNameField = ROOT.$('.form-control.input-sm.ng-pristine');
    okButton = ROOT.element(by.cssContainingText('button', 'Anlegen'));
    confirmDeletingButton = ROOT.element(by.cssContainingText('button', 'Ja'));

    inputValue (value) {
        return this.inputNameField.sendKeys(value)
            .then(() => this.okButton.click());
    }

}
import {$, by} from "protractor";

const ROOT = $('.modal-content');

export class ModalContent {

    inputNameField = ROOT.$('.form-control.input-sm.ng-pristine');
    okButton = ROOT.element(by.cssContainingText('button', 'Anlegen'));
    confirmDeletingButton = ROOT.element(by.cssContainingText('button', 'Ja'));

}
import {$, by} from "protractor";
import {Prototype} from "./prototype";

const ROOT = $('#eastLayout');

export class EastLayout extends Prototype {

    nummerField = ROOT.$("input[placeholder='Nummer']");
    typeSelect = ROOT.element(by.cssContainingText('select', 'Prospekt'));
    typeOption = this.typeSelect.$('option[label="Inszenierungspunkt"]');
    etField = ROOT.$("input[placeholder='ET']");
    preiseSelect = ROOT.element(by.cssContainingText('select', 'Schwarzpreis'));
    preiseOption = this.preiseSelect.$('option[label="Reduziert"]');
    landSelect = ROOT.element(by.cssContainingText('select', 'Deutschland'));
    landOption = this.landSelect.$('option[label="Schweiz"]');
    kommentarField = ROOT.$("textarea[placeholder='Kommentar']");
    cancelButton = ROOT.$("[title='Änderungen zurückstellen']");
    message = ROOT.element(by.cssContainingText('.cp-text-color', 'Wurde gespeichert'));

    inputFields = ROOT.$$('.form-control.input-sm.ng-pristine');
    saisonNameField = this.inputFields.get(0);
    saisontypField = this.inputFields.get(1);
    startdatumField = this.inputFields.get(2);
    enddatumField = this.inputFields.get(3);


    vrNameField = ROOT.$('.form-control.input-sm');
    saveVrButton = ROOT.$('.fa-floppy-o');

    saveNewValue(value: string) {
        return this.replaceValue(this.vrNameField, value)
            .then(() => this.saveVrButton.click());
    }

    changePublicationValues(nummer: string, et: string, kommentar: string) {
        return this.replaceValue(this.nummerField, nummer)
            .then(() => this.selectOption(this.typeSelect, this.typeOption))
            .then(() => this.replaceValue(this.etField, et))
            .then(() => this.selectOption(this.preiseSelect, this.preiseOption))
            .then(() => this.selectOption(this.landSelect, this.landOption))
            .then(() => this.kommentarField.sendKeys(kommentar))
    }
}

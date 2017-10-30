import {$, $$, by} from "protractor";

const ROOT = $('#eastLayout');

export class EastLayout {

    nummerField = ROOT.$("input[placeholder='Nummer']");
    typeSelect = ROOT.element(by.cssContainingText('select', 'Prospekt'));
    typeOption = this.typeSelect.element(by.css('option[label="Inszenierungspunkt"]'));
    etField = ROOT.$("input[placeholder='ET']");
    preiseSelect = ROOT.element(by.cssContainingText('select', 'Schwarzpreis'));
    preiseOption = this.preiseSelect.element(by.css('option[label="Reduziert"]'));
    landSelect = ROOT.element(by.cssContainingText('select', 'Deutschland'));
    landOption = this.landSelect.element(by.css('option[label="Schweiz"]'));
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

}

import {$, by} from "protractor";
import {PrototypePage} from "./prototype-page";

const ROOT = $('.modal-content');

export class ModalContent extends PrototypePage {

    inputNameField = ROOT.$('.form-control.input-sm.ng-pristine');
    okButton = ROOT.element(by.cssContainingText('button', 'Anlegen'));
    confirmDeletingButton = ROOT.element(by.cssContainingText('button', 'Ja'));

    inputValue(value) {
        return this.inputNameField.sendKeys(value)
            .then(() => this.okButton.click());
    }

    static NEW_NUMMER = Math.floor(1000 + Math.random() * 9000).toString();

    saisonSelect = ROOT.element(by.cssContainingText('.row.smallspacer', 'Saison'))
        .$('select');
    saisonOption = this.saisonSelect.$("option[label='31, Frühling/Sommer 2011']");
    inputNummerField = ROOT.element(by.cssContainingText('.row.smallspacer', 'Nummer'))
        .$('input');
    typeSelect = ROOT.element(by.cssContainingText('.row.smallspacer', 'Typ'))
        .$('select');
    typeOption = this.typeSelect.$("option[label='Inszenierungspunkt']");
    hauptEtInputField = ROOT.element(by.cssContainingText('.row.smallspacer', 'Haupt-ET'))
        .$('input');
    preiseSelect = ROOT.element(by.cssContainingText('.row.smallspacer', 'Preise'))
        .$('select');
    preiseOption = this.preiseSelect.$("option[label='Schwarzpreis']");
    inputWarenabgabeField = ROOT.element(by.cssContainingText('.row.smallspacer', 'Warenabgabe'))
        .$('input');
    inputKommentarField = ROOT.element(by.cssContainingText('.row.smallspacer', 'Kommentar'))
        .$('textarea');
    publicationPartSelect = ROOT.element(by.cssContainingText('.row.smallspacer', 'Publikationsteil'))
        .$('select');
    publicationPartOption = this.publicationPartSelect.$("option[label='3911']");
    undDerSeiteSelect = ROOT.element(by.cssContainingText('.row.smallspacer', 'und der Seite'));
    undDerSeiteOption = this.undDerSeiteSelect.$("option[label='Titel']");

    createNewPublication(et: string, warenabgabe: string, kommentar: string) {
        return this.selectOption(this.saisonSelect, this.saisonOption)
            .then(() => this.replaceValue(this.inputNummerField, ModalContent.NEW_NUMMER))
            .then(() => this.selectOption(this.typeSelect, this.typeOption))
            .then(() => this.replaceValue(this.hauptEtInputField, et))
            .then(() => this.selectOption(this.preiseSelect, this.preiseOption))
            .then(() => this.replaceValue(this.inputWarenabgabeField, warenabgabe))
            .then(() => this.inputKommentarField.sendKeys(kommentar))
            .then(() => this.okButton.click())
    }

    createArtikelzuordnung() {
        return this.selectOption(this.publicationPartSelect, this.publicationPartOption)
            .then(() => this.selectOption(this.undDerSeiteSelect, this.undDerSeiteOption))
            .then(() => this.okButton.click());
    }

}
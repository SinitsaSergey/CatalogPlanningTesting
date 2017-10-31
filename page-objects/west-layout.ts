import {$, by} from "protractor";
import {PrototypePage} from "./prototype-page";

const ROOT = $('#westLayout');

export class WestLayout extends PrototypePage {

    productionsEditorRef = ROOT.element(by.cssContainingText('a', 'Publikationspflege'));
    stammdatenRef = ROOT.element(by.cssContainingText('.text-justify', 'STAMMDATEN'));
    saisonsRef = ROOT.element(by.cssContainingText('.list-group-item', 'Saisons'));
    vorteileRef = ROOT.element(by.cssContainingText('.list-group-item', 'Vorteile'));
    einkaufRef = ROOT.element(by.cssContainingText('.text-justify', 'EINKAUF'));
    seitenplanungRef = ROOT.element(by.cssContainingText('.list-group-item', 'Seitenplanung'));

    selectVorteileMenuItem() {
        return this.clickAfterClick(this.stammdatenRef, this.vorteileRef);
    }

    selectSaisonsMenuItem() {
        return this.clickAfterClick(this.stammdatenRef, this.saisonsRef);
    }

    selectSeitenplanungMenuItem() {
        return this.clickAfterClick(this.einkaufRef, this.seitenplanungRef);
    }

}
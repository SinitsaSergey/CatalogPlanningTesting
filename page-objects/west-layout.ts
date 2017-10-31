import {$, by} from "protractor";
import {Prototype} from "./prototype";

const ROOT = $('#westLayout');

export class WestLayout extends Prototype {

    productionsEditorRef = ROOT.element(by.cssContainingText('a', 'Publikationspflege'));

    stammdatenRef = ROOT.element(by.cssContainingText('.text-justify', 'STAMMDATEN'));
    saisonsRef = ROOT.element(by.cssContainingText('.list-group-item', 'Saisons'));

    vorteileRef = ROOT.element(by.cssContainingText('.list-group-item', 'Vorteile'));

    selectVorteileMenuItem () {
        return this.clickAfterClick(this.stammdatenRef, this.vorteileRef);
    }

    selectSaisonsMenuItem () {
        return this.clickAfterClick(this.stammdatenRef, this.saisonsRef);
    }

}
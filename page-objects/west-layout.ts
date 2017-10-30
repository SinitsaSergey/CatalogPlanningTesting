import {$, by} from "protractor";

const ROOT = $('#westLayout');

export class WestLayout {

    productionsEditorRef = ROOT.element(by.cssContainingText('a', 'Publikationspflege'));

    stammdatenRef = ROOT.element(by.cssContainingText('.text-justify', 'STAMMDATEN'));
    saisonsRef = ROOT.element(by.cssContainingText('.list-group-item', 'Saisons'));

    vorteileRef = ROOT.element(by.cssContainingText('.list-group-item', 'Vorteile'));

}
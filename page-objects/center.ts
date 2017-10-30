import {$, browser, by} from "protractor";

const ROOT = $('#center');

export class Center {

    treeElementLevel1 = ROOT.element(by.cssContainingText('.aciTreeText', '40, Herbst/Winter 2015/2016'));
    treeElementLevel2 = ROOT.element(by.cssContainingText('.aciTreeText', 'Prospekt'));
    treeElementLevel3 = ROOT.element(by.cssContainingText('.aciTreeText', '6556 Schwarzpreis'));

    saison34ListElement = ROOT.element(by.cssContainingText('li', '34'));

    getListElement(text: string) {
        return ROOT.element(by.cssContainingText('li', text))
    }

    createVorteileButton = ROOT.$('.glyphicon-plus');
    deleteVorteileButton = ROOT.$('.glyphicon-minus');

}
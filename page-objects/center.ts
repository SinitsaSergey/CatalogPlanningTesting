import {$, by} from "protractor";
import {Prototype} from "./prototype";
import {Actions} from "../utils/actions";

const ROOT = $('#center');

export class Center extends Prototype {

    treeElementLevel1 = ROOT.element(by.cssContainingText('.aciTreeText', '40, Herbst/Winter 2015/2016'));
    treeElementLevel2 = ROOT.element(by.cssContainingText('.aciTreeText', 'Prospekt'));
    treeElementLevel3 = ROOT.element(by.cssContainingText('.aciTreeText', '6556 Schwarzpreis'));

    saison34ListElement = ROOT.element(by.cssContainingText('li', '34'));

    getListElement(text: string) {
        return ROOT.element(by.cssContainingText('li', text))
    }

    selectElementInTree() {
        return Actions.doubleClickAndWait(this.treeElementLevel1, this.treeElementLevel2)
            .then(() => Actions.doubleClickAndWait(this.treeElementLevel2, this.treeElementLevel3))
            .then(() => this.treeElementLevel3.click())
    }

    createVorteileButton = ROOT.$('.glyphicon-plus');
    deleteVorteileButton = ROOT.$('.glyphicon-minus');

}
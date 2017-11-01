import {WestLayout} from "../page-objects/west-layout";
import {Header} from "../page-objects/header";
import {Center} from "../page-objects/center";
import {EastLayout} from "../page-objects/east-layout";
import {browser} from "protractor";
import {
    ENDDATUM_VALUE,
    NAME_VALUE,
    SAISONTYP_VALUE,
    STARTDATUM_VALUE,
    TESTING_URL
} from "../utils/constants";

describe('test 2', () => {

    let westLayout = new WestLayout();
    let header = new Header();
    let center = new Center();
    let eastLayout = new EastLayout();

    beforeAll(() => {
        browser.get(TESTING_URL);
    });

    it('Отображается форма PuC.Marketing Saisons', () => {
        westLayout.selectSaisonsMenuItem ();
        expect(header.applicationTitle.getText())
            .toEqual('Saisons', 'форма PuC.Marketing Saisons не отображается');
    });

    it('На форме справа поля Name, Saisontyp, Startdatum, Enddatum содержат значения, согласно выбору', () => {
        center.getListElement(NAME_VALUE).click();
        expect(eastLayout.saisonNameField.getAttribute('value'))
            .toEqual(NAME_VALUE, 'поле Name не содержит выбранного значения');
        expect(eastLayout.saisontypField.getAttribute('value'))
            .toEqual(SAISONTYP_VALUE, 'поле Saisontyp не содержит выбранного значения');
        expect(eastLayout.startdatumField.getAttribute('value'))
            .toEqual(STARTDATUM_VALUE, 'поле Startdatum не содержит выбранного значения');
        expect(eastLayout.enddatumField.getAttribute('value'))
            .toEqual(ENDDATUM_VALUE, 'поле Enddatum не содержит выбранного значения');
    });

});
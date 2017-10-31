import {WestLayout} from "../page-objects/west-layout";
import {Header} from "../page-objects/header";
import {Center} from "../page-objects/center";
import {EastLayout} from "../page-objects/east-layout";
import {browser, protractor} from "protractor";

const TESTING_URL = 'http://vtest16:8093/catalog-planning/#/productionsEditor';
const NAME_VALUE = '34';
const SAISONTYP_VALUE = 'Herbst/Winter 2012/2013';
const STARTDATUM_VALUE = '01.09.2012';
const ENDDATUM_VALUE = '28.02.2013';

xdescribe('test 2', () => {

    let westLayout = new WestLayout();
    let header = new Header();
    let center = new Center();
    let eastLayout = new EastLayout();

    let EC = protractor.ExpectedConditions;

    beforeAll(() => {
        browser.get(TESTING_URL);
    });


    it('Отображается форма PuC.Marketing Saisons', () => {
        westLayout.selectSaisonsMenuItem ();
        expect(header.applicationTitle.getText()).toEqual('Saisons');
    });

    it('На форме справа поля Name, Saisontyp, Startdatum, Enddatum содержат значения, согласно выбору', () => {
        center.saison34ListElement.click();
        expect(eastLayout.saisonNameField.getAttribute('value')).toEqual(NAME_VALUE);
        expect(eastLayout.saisontypField.getAttribute('value')).toEqual(SAISONTYP_VALUE);
        expect(eastLayout.startdatumField.getAttribute('value')).toEqual(STARTDATUM_VALUE);
        expect(eastLayout.enddatumField.getAttribute('value')).toEqual(ENDDATUM_VALUE);
    });

});
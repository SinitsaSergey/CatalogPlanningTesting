import {browser} from "protractor";
import {WestLayout} from "../page-objects/west-layout";
import {Center} from "../page-objects/center";
import {EastLayout} from "../page-objects/east-layout";
import {Header} from "../page-objects/header";

const TESTING_URL = 'http://vtest16:8093/catalog-planning/#/productionsEditor';
const ELEMENT_LEVEL1_TEXT ='40, Herbst/Winter 2015/2016';
const ELEMENT_LEVEL2_TEXT = 'Prospekt';
const ELEMENT_LEVEL3_TEXT = '6556 Schwarzpreis';
const PROSPEKT_VALUE = '1';
const INSZENIERUNGSPUNKT_VALUE = '21';
const DEUTSCHLAND_VALUE = '43';
const SCHWEIZ_VALUE = '181';
const SCHWARZPREIS_VALUE = '0';
const REDUZIERT_VALUE = '1';

describe('test 1', () => {

    let westLayout = new WestLayout();
    let header = new Header();
    let center = new Center();
    let eastLayout = new EastLayout();

    beforeAll(() => {
        browser.get(TESTING_URL);
    });

    it('Отображается форма PuC.Marketing Publikationspflege', () => {
        westLayout.productionsEditorRef.click();
        expect(header.applicationTitle.getText()).toEqual('Publikationspflege');
    });

    it('На форме справа на вкладке Werbeplanung поля Nummer, Type, ET, Preise содержат значения, согласно выбору', () => {
        center.selectElementInTree(ELEMENT_LEVEL1_TEXT, ELEMENT_LEVEL2_TEXT, ELEMENT_LEVEL3_TEXT);
        expect(eastLayout.nummerField.getAttribute('value')).toEqual('6556');
        expect(eastLayout.typeSelect.getAttribute('value')).toEqual(PROSPEKT_VALUE);
        expect((eastLayout.etField.getAttribute('value'))).toEqual('02.03.2017');
        expect(eastLayout.preiseSelect.getAttribute('value')).toEqual(SCHWARZPREIS_VALUE);
    });

    it('Значения соответствуют введенным', () => {
        eastLayout.changePublicationValues('1362', '03.04.2017', 'bla-bla-bla');
        expect(eastLayout.nummerField.getAttribute('value')).toEqual('1362');
        expect(eastLayout.typeSelect.getAttribute('value')).toEqual(INSZENIERUNGSPUNKT_VALUE);
        expect((eastLayout.etField.getAttribute('value'))).toEqual('03.04.2017');
        expect(eastLayout.preiseSelect.getAttribute('value')).toEqual(REDUZIERT_VALUE);
        expect(eastLayout.landSelect.getAttribute('value')).toEqual(SCHWEIZ_VALUE);
        expect(eastLayout.kommentarField.getAttribute('value')).toEqual('bla-bla-bla');
    });

    it("Изменения отменены, присутствует надпись 'Noch nichts geändert'", () => {
        eastLayout.cancelButton.click();
        expect(eastLayout.nummerField.getAttribute('value')).toEqual('6556');
        expect(eastLayout.typeSelect.getAttribute('value')).toEqual(PROSPEKT_VALUE);
        expect((eastLayout.etField.getAttribute('value'))).toEqual('02.03.2017');
        expect(eastLayout.preiseSelect.getAttribute('value')).toEqual(SCHWARZPREIS_VALUE);
        expect(eastLayout.landSelect.getAttribute('value')).toEqual(DEUTSCHLAND_VALUE);
        expect(eastLayout.kommentarField.getAttribute('value')).toEqual('');
        expect(eastLayout.message.isDisplayed()).toBe(true);
    })
});
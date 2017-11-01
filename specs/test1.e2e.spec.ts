import {browser} from "protractor";
import {WestLayout} from "../page-objects/west-layout";
import {Center} from "../page-objects/center";
import {EastLayout} from "../page-objects/east-layout";
import {Header} from "../page-objects/header";
import {ELEMENT1_LEVEL1_TEXT, ELEMENT1_LEVEL2_TEXT, ELEMENT1_LEVEL3_TEXT, NUMMER_VALUE, TESTING_URL, PROSPEKT_VALUE,
    EDIT_NUMMER_VALUE, REDUZIERT_VALUE, EET_VALUE, SCHWARZPREIS_VALUE, EDIT_ET_VALUE, EDIT_KOMMENTAR_VALUE,
    INSZENIERUNGSPUNKT_VALUE, SCHWEIZ_VALUE, DEUTSCHLAND_VALUE} from "../utils/constants";

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
        center.selectElementInTree(ELEMENT1_LEVEL1_TEXT, ELEMENT1_LEVEL2_TEXT, ELEMENT1_LEVEL3_TEXT);
        expect(eastLayout.nummerField.getAttribute('value'))
            .toEqual(NUMMER_VALUE, 'поле Nummer не содержит значение согласно выбору');
        expect(eastLayout.typeSelect.getAttribute('value'))
            .toEqual(PROSPEKT_VALUE, 'поле Prospekt не содержит значение согласно выбору');
        expect((eastLayout.etField.getAttribute('value')))
            .toEqual(EET_VALUE, 'поле ET не содержит значение согласно выбору');
        expect(eastLayout.preiseSelect.getAttribute('value'))
            .toEqual(SCHWARZPREIS_VALUE, 'поле Preise не содержит значение согласно выбору');
    });

    it('Значения соответствуют введенным', () => {
        eastLayout.changePublicationValues(EDIT_NUMMER_VALUE, EDIT_ET_VALUE, EDIT_KOMMENTAR_VALUE);
        expect(eastLayout.nummerField.getAttribute('value'))
            .toEqual(EDIT_NUMMER_VALUE, 'значение Nummer не соответствует введенному');
        expect(eastLayout.typeSelect.getAttribute('value'))
            .toEqual(INSZENIERUNGSPUNKT_VALUE, 'значение Typ не соответствует введенному');
        expect((eastLayout.etField.getAttribute('value')))
            .toEqual(EDIT_ET_VALUE, 'значение ET не соответствует введенному');
        expect(eastLayout.preiseSelect.getAttribute('value'))
            .toEqual(REDUZIERT_VALUE, 'значение Preise не соответствует введенному');
        expect(eastLayout.landSelect.getAttribute('value')).toEqual(SCHWEIZ_VALUE);
        expect(eastLayout.kommentarField.getAttribute('value')).toEqual(EDIT_KOMMENTAR_VALUE);
    });

    it("Изменения отменены, присутствует надпись 'Noch nichts geändert'", () => {
        eastLayout.cancelButton.click();
        expect(eastLayout.nummerField.getAttribute('value')).toEqual(NUMMER_VALUE);
        expect(eastLayout.typeSelect.getAttribute('value')).toEqual(PROSPEKT_VALUE);
        expect((eastLayout.etField.getAttribute('value'))).toEqual(EET_VALUE);
        expect(eastLayout.preiseSelect.getAttribute('value')).toEqual(SCHWARZPREIS_VALUE);
        expect(eastLayout.landSelect.getAttribute('value')).toEqual(DEUTSCHLAND_VALUE);
        expect(eastLayout.kommentarField.getAttribute('value')).toEqual('');
        expect(eastLayout.message.isDisplayed()).toBe(true);
    })
});
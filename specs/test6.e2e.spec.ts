import {browser, protractor} from "protractor";
import {
    ELEMENT2_LEVEL1_TEXT,
    ELEMENT2_LEVEL2_TEXT,
    ELEMENT2_LEVEL3_TEXT,
    HANDSONTABLE_VALUE,
    TESTING_URL
} from "../utils/constants";
import {WestLayout} from "../page-objects/west-layout";
import {Header} from "../page-objects/header";
import {Center} from "../page-objects/center";
import {ModalContent} from "../page-objects/modal-content";
import {EastLayout} from "../page-objects/east-layout";
import {deleteCookies} from "../utils/clear-data";

describe('test 6', () => {

    let westLayout = new WestLayout();
    let header = new Header();
    let center = new Center();
    let eastLayout = new EastLayout();
    let modalContent = new ModalContent();

    beforeAll(() => {
        browser.get(TESTING_URL)
    });

    afterAll(() => {
        browser.sleep(2000);
        deleteCookies();
    });

    it('Таблица имеет первоначальный вид', () => {
        westLayout.productionsEditorRef.click();
        expect(header.applicationTitle.getText())
            .toEqual('Publikationspflege', 'Не отображается форма PuC.Marketing Publikationspflege');
        center.selectElementInTree(ELEMENT2_LEVEL1_TEXT, ELEMENT2_LEVEL2_TEXT, ELEMENT2_LEVEL3_TEXT);
        westLayout.selectArtikelzuordnungMenuItem();
        expect(header.applicationTitle.getText())
            .toEqual('Artikelzuordnung', 'Не отображается форма PuC.Marketing Artikelzuordnung');
        center.createButton.click();
        modalContent.createArtikelzuordnung();
        center.inputEnshopNrValue(HANDSONTABLE_VALUE);
        expect(eastLayout.currentEshopNrField.getAttribute('value'))
            .toEqual(HANDSONTABLE_VALUE, 'в поле Eshop-Nr. отсутствует выбранное значение');
        center.resetChangesButton.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(eastLayout.currentEshopNrField));
        expect(eastLayout.currentEshopNrField.getAttribute('value'))
            .not.toEqual(HANDSONTABLE_VALUE, 'в поле Eshop-Nr. присутствует сброшенное значение');
    });
});
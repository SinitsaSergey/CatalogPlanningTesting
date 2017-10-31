import {browser} from "protractor";
import {WestLayout} from "../page-objects/west-layout";
import {Header} from "../page-objects/header";
import {Center} from "../page-objects/center";

const TESTING_URL = 'http://vtest16:8093/catalog-planning/#/productionsEditor';
const ELEMENT_LEVEL1_TEXT ='39, Frühling/Sommer 2015';
const ELEMENT_LEVEL2_TEXT = 'Inszenierungspunkt';
const ELEMENT_LEVEL3_TEXT = '3911 Schwarzpreis ET: 04.03.2016';

describe('test 5', () => {

    let westLayout = new WestLayout();
    let header = new Header();
    let center = new Center();

    beforeAll(() => {
        browser.get(TESTING_URL);
    });

    afterAll(() => {
       browser.sleep(10000);
    });

    it('Отчет сохраняется на диске', () => {
        westLayout.productionsEditorRef.click();
        expect(header.applicationTitle.getText())
            .toEqual('Publikationspflege', 'Не отображается форма PuC.Marketing Publikationspflege');
        center.selectElementInTree(ELEMENT_LEVEL1_TEXT, ELEMENT_LEVEL2_TEXT, ELEMENT_LEVEL3_TEXT);
        westLayout.selectSeitenplanungMenuItem();
        expect(header.applicationTitle.getText())
            .toEqual('Seitenplanung', 'Не отображается форма PuC.Marketing Seitenplanung');
        center.generateReportButton.click();

    });



});
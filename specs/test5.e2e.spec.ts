import {browser} from "protractor";
import {WestLayout} from "../page-objects/west-layout";
import {Header} from "../page-objects/header";
import {Center} from "../page-objects/center";
import {TESTING_URL, ELEMENT2_LEVEL1_TEXT, ELEMENT2_LEVEL2_TEXT, ELEMENT2_LEVEL3_TEXT} from "../utils/constants";

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
        center.selectElementInTree(ELEMENT2_LEVEL1_TEXT, ELEMENT2_LEVEL2_TEXT, ELEMENT2_LEVEL3_TEXT);
        westLayout.selectSeitenplanungMenuItem();
        expect(header.applicationTitle.getText())
            .toEqual('Seitenplanung', 'Не отображается форма PuC.Marketing Seitenplanung');
        center.generateReportButton.click();

    });



});
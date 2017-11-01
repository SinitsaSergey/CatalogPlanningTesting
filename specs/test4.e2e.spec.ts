import {browser} from "protractor";
import {WestLayout} from "../page-objects/west-layout";
import {Header} from "../page-objects/header";
import {Center} from "../page-objects/center";
import {ModalContent} from "../page-objects/modal-content";
import {TESTING_URL, HAUPT_ET_VALUE, WARENABGABE_VALUE, EDIT_KOMMENTAR_VALUE} from "../utils/constants";

describe('test 4', () => {

    let westLayout = new WestLayout();
    let header = new Header();
    let center = new Center();
    let modalContent = new ModalContent();

    let newNummer = ModalContent.NEW_NUMMER;

    beforeAll(() => {
        browser.get(TESTING_URL);
    });

    it('Отображается форма PuC.Marketing Publikationspflege', () => {
        westLayout.productionsEditorRef.click();
        expect(header.applicationTitle.getText()).toEqual('Publikationspflege');
    });

    it('В дереве публикаций должна появиться новая запись со значением' + newNummer + 'Schwarzpreis ET: 05.05.2017', () => {
        center.createPublicationButton.click();
        modalContent.createNewPublication(HAUPT_ET_VALUE, WARENABGABE_VALUE, EDIT_KOMMENTAR_VALUE);
        expect(center.isCreatedPublicationPresent()).toBe(true);
    });

    it('В дереве публикаций должна отсутствовать запись со значением' + newNummer + 'Schwarzpreis ET: 05.05.2017', () => {
        center.deleteCreatedPublication();
        modalContent.confirmDeletingButton.click();
        expect(center.createdPublication.isPresent()).toBe(false);
    });

});
import {WestLayout} from "../page-objects/west-layout";
import {Header} from "../page-objects/header";
import {Center} from "../page-objects/center";
import {EastLayout} from "../page-objects/east-layout";
import {browser} from "protractor";
import {ModalContent} from "../page-objects/modal-content";
import {
    TESTING_URL,
    VR_NAME_VALUE,
    NEW_VORTEILE_VALUE,
    EDIT_VORTEILE_VALUE
} from "../utils/constants";

describe('test 3', () => {

    let westLayout = new WestLayout();
    let header = new Header();
    let center = new Center();
    let eastLayout = new EastLayout();
    let modalContent = new ModalContent();

    beforeAll(() => {
        browser.get(TESTING_URL);
    });

    it('Отображается форма PuC.Marketing Vorteile', () => {
        westLayout.selectVorteileMenuItem();
        expect(header.applicationTitle.getText())
            .toEqual('Vorteile', 'форма PuC.Marketing Vorteile не отображается');
    });

    it('На форме справа поле Name содержит значение согласно выбору', () => {
        center.getListElement(VR_NAME_VALUE).click();
        expect(eastLayout.vrNameField.getAttribute('value'))
            .toEqual(VR_NAME_VALUE, 'поле Name не содержит значение согласно выбору');
    });

    it('В списке должна появиться новая строка со значением Name, заданным на этапе создания', () => {
        center.createVorteileButton.click();
        modalContent.inputValue(NEW_VORTEILE_VALUE);
        expect(center.getListElement(NEW_VORTEILE_VALUE).isPresent())
            .toBe(true, 'в списке отсутствует строка с созданным значением Name');
    });

    it('В списке должна обновиться информация об измененном элементе', () => {
        center.getListElement(NEW_VORTEILE_VALUE).click();
        eastLayout.saveNewValue(EDIT_VORTEILE_VALUE);
        expect(center.getListElement(EDIT_VORTEILE_VALUE).isPresent())
            .toBe(true, 'информация об измененном элементе не обновилась');
    });

    it('В списке отсутствует элемент, созданный на шаге 3', () => {
        center.getListElement(EDIT_VORTEILE_VALUE).click();
        expect(center.deleteVorteileButton.isEnabled())
            .toBe(true, 'кнопка удаления недоступна');
        center.deleteVorteileButton.click();
        modalContent.confirmDeletingButton.click();
        expect(center.getListElement(EDIT_VORTEILE_VALUE).isPresent())
            .toBe(false, 'присутствует элемент, который был удален');
    });
});
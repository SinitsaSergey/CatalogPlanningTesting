import {$} from "protractor";
import {PrototypePage} from "./prototype-page";

const ROOT = $('#header');

export class Header extends PrototypePage{

applicationTitle = ROOT.$('.ng-binding');

}
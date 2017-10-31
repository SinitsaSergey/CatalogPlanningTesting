import {$} from "protractor";
import {Prototype} from "./prototype";

const ROOT = $('#header');

export class Header extends Prototype{

applicationTitle = ROOT.$('.ng-binding');

}
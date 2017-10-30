import {$, by} from "protractor";

const ROOT = $('#header');

export class Header {

applicationTitle = ROOT.$('.ng-binding');

}
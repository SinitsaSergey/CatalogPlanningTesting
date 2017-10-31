import {browser, Config} from "protractor";

export let config: Config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['./specs/test1.e2e.spec.js',
        './specs/test2.e2e.spec.js',
        './specs/test3.e2e.spec.js',
        './specs/test4.e2e.spec.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    onPrepare() {
        browser.driver.manage().window().maximize()
    },
    noGlobals: true
};
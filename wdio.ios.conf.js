const { join } = require('path')
const allure = require('allure-commandline')
const video = require('wdio-video-reporter');

exports.config = {

    ///bs
    services: ['browserstack'],
    user: "lojaebac_gBJk0x",
    key: "dQfHqx13fxpsVg1Ns1Yc",

    //sauce
    /// ???


    capabilities: [
        {
            "platformName": "iOS",
            "deviceName": "iPhone 13",
            "platformVersion": "15.2",
            "orientation": "PORTRAIT",
            "automationName": "XCUITest",
            "app": join(process.cwd(), './app/ios/loja-ebac.app'),
            'newCommandTimeout': 240
          }
    ],

}
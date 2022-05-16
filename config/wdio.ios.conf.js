const path = require('path');

const {config} = require('./wdio.shared.conf');

// ====================
// Runner Configuration
// ====================
//
config.port = 4723;

// ==================
// Specify Test Files
// ==================

config.specs = [
    './test/specs/02-Bodega.test.js'
];

global.testDevice = "LOCAL";

console.log("VARIABLE ENTORNO ENV --------> " + process.env.ENV);
console.log("DISPOSITIVO EJECUTANDO --------> " + global.testDevice);
let appPath = "";
if(process.env.ENV == "preprod") {
    appPath = "./app/ios/preprod/App2/Payload/App.app";
} else if(process.env.ENV == "prod") {
    appPath = "./app/ios/prod/App2/Payload/App.app";
}

// ============
// Capabilities
// ============

config.capabilities = [
    {
        platformName: "ios",
        "appium:platformVersion": "15.2",
        "appium:deviceName": "iPhone 12",
        "appium:automationName": "XCUITest",
        "appium:app": path.join(process.cwd(), appPath),
        "appium:autoGrantPermissions": true
    }
];

config.reporters = [
    'spec',
    ['allure', {
        outputDir: './reports/allure-results',
        disableWebdriverScreenshotsReporting: false
    }]
];

// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['appium'];

exports.config = config
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
let name = "";
let version = "";
if(process.env.ENV == "preprod") {
    appPath = "./app/android/preprod/app-debug.apk";
    name = "Pixel 3 pp";
    version = "9.0";
} else if(process.env.ENV == "prod") {
    appPath = "./app/android/prod/app-release.apk";
    name = "Pixel 3 prod";
    version = "11.0";
}
// ============
// Capabilities
// ============

config.capabilities = [
    {
        platformName: "Android",
        "appium:platformVersion": version,
        "appium:deviceName": name,
        "appium:automationName": "UIAutomator2",
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
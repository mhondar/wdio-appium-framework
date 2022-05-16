const {config} = require('./wdio.shared.conf');

// ==================
// BrowserStack Credentials
// ==================

config.user = 'marisleydihondar_IaQR6p';
config.key = 'oWKqJBzBxRMzeVgxGDxx';

// ==================
// Specify Test Files
// ==================

config.specs = [
    './test/specs/02-Bodega.test.js'
];

global.testDevice = "BS";
console.log("VARIABLE ENTORNO ENV ----------> " + process.env.ENV);
console.log("DISPOSITIVO EJECUTANDO --------> " + global.testDevice);
let appPath = "";
if(process.env.ENV == "preprod") {
    appPath = "bs://078555ac8c24c9f8758ee1963c122ac5e326945f";
} else if(process.env.ENV == "prod") {
    appPath = "bs://d0fcdb99135cdf3dd8a6a7ae76d768788df58b05";
}
// ============
// Capabilities
// ============

config.capabilities = [
    {
        project: "iConstruye App",
        build: "POC " + process.env.ENV,
        name: "Pruebas de Regresion " + process.env.ENV,
        platformName: "android",
        os_version: "11.0",
        device: "Samsung Galaxy S21",
        automationName: "UIAutomator2",
        app: appPath,
        autoGrantPermissions: true
    }
];

config.reporters = [
    'spec',
    ['junit', {
        outputDir: './',
        outputFileFormat: function() { 
            return `results.xml`
        }
    }],
    ['allure', {
        outputDir: './reports/allure-results',
        disableWebdriverScreenshotsReporting: false
    }]
];

// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack'];

exports.config = config
const util = require("../../helpers/utils")
class CrearPinScreen {
    setNumber(number) {
        let numberBtn = "";
        if(global.testDevice == "BS") {
            numberBtn = $('//android.widget.Button[@text="' + number + '"]')
        } else if(global.testDevice == "LOCAL") {
            let divNumber = number + 7
            numberBtn = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View/android.view.View/android.view.View[' + divNumber.toString() + ']/android.view.View/android.widget.Button')
        }
        return numberBtn;
    }

    get hechoAlertBtn() {
        return util.getLocator('//android.widget.Button[@text="HECHO"]','//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.app.Dialog/android.view.View[3]/android.widget.Button')
    }

    get pinCreadoAlert() {return $('//android.view.View[@text="PIN Creado"]')}

    async ingresarPin(pin, cant) {
        for (let j=0; j<cant; j++) {
            for (let i=0; i<pin.length; i++) {
                await this.setNumber(parseInt(pin.substr(i,1))).click();
            }
        }
        await this.hechoAlertBtn.waitForDisplayed({ timeout: 10000 })
        await this.hechoAlertBtn.click();
    }
}
module.exports = new CrearPinScreen();
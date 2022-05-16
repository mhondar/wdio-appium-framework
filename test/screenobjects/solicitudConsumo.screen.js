const util = require("../../helpers/utils")
class SolicitudConsumoScreen {
    get titleLabel() {
        return util.getLocator('//android.widget.TextView[@text="Solicitud de Consumo"]','//android.view.View[@text="Solicitud de Consumo"]')
    }
    
    get cambiarCgBt() {
        return util.getLocator('//android.widget.Button[@text="swap horizontal outline"]','/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.widget.Button')
    }

    centroGestionBtn(centro) {
        // return  $('android.view.View[@text="' + centro + '"]')
        let locator = "";
        if (process.env.ENV == "preprod") {
            locator = util.getLocator('//android.widget.TextView[@text="' + centro + '"]','/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.app.Dialog/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View/android.view.View[2]')
        } else if (process.env.ENV == "prod") {
            locator = util.getLocator('//android.widget.TextView[@text="' + centro + '"]','/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.app.Dialog/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View/android.view.View[3]')
        }
        return locator;
    }

    get crearSolicitudBtn() {
        return util.getLocator('//android.widget.Button[@text="CREAR SOLICITUD"]','/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.view.View/android.view.View/android.widget.Button')
    }
    
    get seleccionaTipoConsumoTitleModal() {return $('//android.view.View[@text="Selecciona tipo de Consumo"]')}
    
    get itemOpcionRadio() {return $('//android.widget.RadioButton[@text="Item"]')}
    
    get okBtn() {
        return util.getLocator('//android.widget.Button[@text="OK"]','/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.app.Dialog/android.view.View[3]/android.widget.Button[2]')
    }
    
    get ultimaSolicitudConsumoNumero() {return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[2]/android.view.View[1]/android.view.View[1]/android.widget.TextView')}
}
module.exports = new SolicitudConsumoScreen();
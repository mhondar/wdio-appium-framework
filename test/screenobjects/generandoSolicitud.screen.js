const util = require("../../helpers/utils")
class GenerandoSolicitudScreen {
    get titleLabel() {
        return util.getLocator('//android.widget.TextView[@text="Generando Solicitud"]','//android.view.View[@text="Generando Solicitud"]')
    }

    get personaRetiraText() {
        return util.getLocator('//android.widget.EditText[@resource-id="__smartlook_2"]','/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[1]/android.view.View[2]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[2]/android.widget.EditText')
    }

    get preseleccionarDestinoSelect() {
        return util.getLocator('//android.widget.Button[@bounds="[201,584][1080,749]"]','/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[1]/android.view.View[3]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.widget.ListView/android.widget.Button')
    }

    get preseleccionarDestinoTitlePopup() {
        return $('//android.view.View[@text="PRESELECCIONAR DESTINO"]')
    }

    get destinoARadio() {return $('//android.widget.RadioButton[@text="Destino A"]')}
    
    get okBtn() {
        return util.getLocator('//android.widget.Button[@text="OK"]','/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.app.Dialog/android.view.View[3]/android.widget.Button[2]')
    }
    
    get agregarItemBtn() {
        return util.getLocator('//android.widget.TextView[@text="Agregar Item"]','/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[2]')
    }
    
    get enviarBtn() {
        return util.getLocator('//android.widget.Button[@text="ENVIAR"]','/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.view.View/android.view.View/android.widget.Button')
    }
    
    get itemAgregado() {return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[5]')}

    async getDestinoOption(destino) {
        return $('//android.widget.RadioButton[@text="' + destino + '"]')
    }

}




module.exports = new GenerandoSolicitudScreen
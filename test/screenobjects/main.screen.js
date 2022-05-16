const util = require("../../helpers/utils")
class MainScreen {
    get aprobacionesMenu() {
        return util.getLocator('//android.widget.TextView[@text="Aprobaciones"]','//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[2]/android.view.View/android.view.View/android.view.View[1]')
    }
   
    get bodegaMenu() {
        return util.getLocator('//android.widget.TextView[@text="Bodega"]','/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]')
    }

    get consultaDocumentosMenu() {
        return util.getLocator('//android.view.View[@text="Consulta Documentos"]','/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[2]/android.view.View/android.view.View/android.view.View[3]')
    }

    async validarMainTitle(nombre, empresa) {
        return $('//android.view.View[@text="Bienvenido ' + nombre + ' ' + empresa + '"]')
    }

}
module.exports = new MainScreen();
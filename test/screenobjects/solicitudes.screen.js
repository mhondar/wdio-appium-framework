const util = require("../../helpers/utils")
class SolicitudesScreen {
    get titleLabel() {return $('//android.view.View[@text="Solicitudes"]')}
    
    get mensageConfirmacion() {return $('//android.view.View[@text="Se han generado 1 solicitudes de consumo"]')}
    
    get irAlInicioBtn() {
        return util.getLocator('//android.widget.Button[@text="IR AL INICIO"]','/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.view.View[1]/android.view.View/android.widget.Button')
    }
    
    get numeroSolicitud() {
        return util.getLocator('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[2]/android.view.View[1]/android.view.View[1]/android.widget.TextView',
                               '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[2]/android.view.View[1]/android.view.View[1]')
    }

    
}
module.exports = new SolicitudesScreen();
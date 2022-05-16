const util = require("../../helpers/utils")
class OrdenCompraScreen {
    get titleOCLabel() {return $('//android.view.View[@text="Orden de compra"]')}
    
    get aprobarBtn() {
        return util.getLocator('//android.widget.Button[@text="APROBAR"]','/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.view.View[3]/android.view.View/android.widget.Button')
    }
    
    get mensajeAprobacionText() {return $('android.widget.EditText')}
    
    get confirmarBtn() {
        return util.getLocator('//android.widget.Button[@text="CONFIRMAR"]','/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.app.Dialog/android.view.View/android.view.View[3]/android.view.View[3]/android.view.View/android.widget.Button')
    }
    
    get ocAprobadaPopup() {return $('//android.view.View[@text="OC Aprobada"]')}
    
    get continuarBtnPopup() {
        return util.getLocator('//android.widget.Button[@text="CONTINUAR"]','/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.app.Dialog/android.view.View[3]/android.widget.Button')
    }
   
}
module.exports = new OrdenCompraScreen();
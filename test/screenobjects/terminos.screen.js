const util = require("../../helpers/utils")
class TerminosScreen {
    
    get titleLabel() {return $('//android.view.View[@text="Términos y Condiciones"]')}

    get aceptarButton() {
      return util.getLocator('//android.widget.Button[@text="ACEPTAR"]','//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View/android.widget.Button')
    }
}
module.exports = new TerminosScreen();
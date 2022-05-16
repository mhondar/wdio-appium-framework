const util = require("../../helpers/utils")
class BodegaScreen {
    get titleLabel() {
        return util.getLocator('//android.widget.TextView[@text="Bodega"]','//android.view.View[@text="Bodega"]')
    }

    get solicitudConsumoBtn() {
        return util.getLocator('//android.widget.TextView[@text="Solicitud de Consumo"]','/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[2]')
    }
}
module.exports = new BodegaScreen();
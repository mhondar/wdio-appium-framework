const util = require("../../helpers/utils")
class AgregarItemScreen {
    get titleLabel() {
        return util.getLocator('//android.widget.TextView[@text="Agregar Item"]','//android.view.View[@text="Agregar Item"]')
    }

    get bucarItemText() {
        return util.getLocator('//android.widget.EditText[@bounds="[48,245][1032,371]"]','/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.app.Dialog/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View/android.view.View/android.widget.EditText')
    }

    get item() {
        return util.getLocator('//android.widget.EditText[@resource-id="__smartlook_4"]','/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.app.Dialog/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[3]')
    }

    async getProducto(producto) {
        console.log("PRODUCTO  --> " + producto)
        return util.getLocator('//android.widget.TextView[@text="' + producto + '"]','//android.view.View[@text="' + producto + '"]')
    }

    async getBodegaLabel(bodega) {
        console.log("BODEGA  --> " + bodega)
        return util.getLocator('//android.widget.TextView[@text="' + bodega + '"]','//android.view.View[@text="' + bodega + '"]')
    }
}
module.exports = new AgregarItemScreen();
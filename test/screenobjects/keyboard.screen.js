class KeyboardScreen {
    get aceptarBtn() {return $('//android.view.View[@text="Aceptar"]')}

    async getNmberBtn(number) {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[3]/android.app.Dialog/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View/android.view.View[' + number + ']')
    }
}
module.exports = new KeyboardScreen();
const util = require("../../helpers/utils")
class LoginScreen {

    get ingresarButton() {
      return util.getLocator('//android.widget.Button[@text="INGRESAR"]','//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.widget.Button')
    }
    
    get nombreUsuarioInput() {
      let usuario = "";
      if(process.env.ENV == "preprod") {
        usuario = util.getLocator('//android.widget.EditText[@bounds="[252,845][906,965]"]','//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[3]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View/android.widget.EditText')
      } else if(process.env.ENV == "prod") {
        usuario = util.getLocator('//android.widget.EditText[@bounds="[252,839][906,959]"]','//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[3]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View/android.widget.EditText')
      }
      return usuario
    }

    get empresaInput() {
      let empresa = "";
      if(process.env.ENV == "preprod") {
        empresa = util.getLocator('//android.widget.EditText[@bounds="[252,992][906,1112]"]','//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[4]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View/android.widget.EditText')
      } else if(process.env.ENV == "prod") {
        empresa = util.getLocator('//android.widget.EditText[@bounds="[252,986][906,1106]"]','//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[4]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View/android.widget.EditText')
      }
      return empresa
    }

    get claveInput() {
      let clave = "";
      if(process.env.ENV == "preprod") {
        clave = util.getLocator('//android.widget.EditText[@bounds="[252,1139][690,1259]"]','//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[5]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View/android.widget.EditText')
      } else if(process.env.ENV == "prod") {
        clave = util.getLocator('//android.widget.EditText[@bounds="[252,1133][690,1253]"]','//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[5]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View/android.widget.EditText')
      }
      return clave 
    }

    get aceptarButton() {
      const locator = "";
      if(process.env.ENV == "preprod") {
        return util.getLocator('//android.widget.Button[@text="INGRESAR"]','//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[8]/android.widget.Button')
      } else if(process.env.ENV == "prod") {
        return util.getLocator('//android.widget.Button[@text="INGRESAR"]','//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[9]/android.widget.Button')
      }
      return locator;
  }

    async login(user, org, pass) {
        await this.ingresarButton.waitForDisplayed({ timeout: 10000 })
        await expect(this.ingresarButton).toBeDisplayed();
        await this.ingresarButton.click();
        await expect(this.nombreUsuarioInput).toBeDisplayed();
        await this.nombreUsuarioInput.clearValue();
        await this.nombreUsuarioInput.addValue(user);
        await this.empresaInput.clearValue();
        await this.empresaInput.addValue(org);
        await this.claveInput.clearValue();
        await this.claveInput.addValue(pass);
        await this.aceptarButton.click();
      }
}
module.exports = new LoginScreen();
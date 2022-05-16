class AlertModal {
    get onlyThisTimeButton() {return $('//android.widget.Button[@text="Allow only while using the app"]')}
}
module.exports = new AlertModal();
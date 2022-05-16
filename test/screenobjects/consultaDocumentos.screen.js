class ConsultaDocumentosScreen {
    get titleConsultaDocLabel() {return $('//android.view.View[@text="Orden de compra"]')}
    async verificarDocumentoExistente(nombre) {
        let documento = $('//android.widget.TextView[@text="' + nombre + '"]')
        await expect(documento).toExist()
    }
}
module.exports = new ConsultaDocumentosScreen();
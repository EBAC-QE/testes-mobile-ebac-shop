const productViewScreen = require("../screens/productView.screen")

describe('Product List', () => {
    // beforeEach(async () => {
    //     //verificar se o app ja esta instalado e executando
    //     let state = await driver.queryAppState("br.art.ebaconline")
    //     if(state !== 4){
    //         await driver.launchApp()
    //     }
    // })
    // afterEach(async () => {
    //     //fechar o app
    //     await driver.closeApp()
    // })
    it('shoud list products', async () => {
        expect(await productViewScreen.product("Ingrid Running")).toExist()
        expect(await productViewScreen.productList()).toBeElementsArrayOfSize(10)
    })
})
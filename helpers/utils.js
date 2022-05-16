class Util {

    between(min, max) {  
        return Math.floor(
          Math.random() * (max - min) + min
        )
      }

      getRandomValueFromJson(jsonFile) {
        const values = Object.values(jsonFile)
        const randomValue = values[parseInt(Math.random() * values.length)]
        return randomValue
      }

      getLocator(locatorBS, locatorLocal) {
        let locator = "";
        if(global.testDevice == "BS") {
          locator = $(locatorBS)
        } else if(global.testDevice == "LOCAL") {
          locator = $(locatorLocal)
        }
        return locator;
      }


}
module.exports = new Util();

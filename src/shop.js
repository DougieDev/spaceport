var Part = require('../src/part');
var Being = require('../src/being');

class Shop {
  constructor(shopInfo) {
    this.name = shopInfo.name
    this.inventory = {}
  }

  addInventory(part) {
    if (part instanceof Part) {
      this.inventory[part.type] = part
    }
  }

  outfitShip(ship, partType) {
    if (!ship.captain) {
      return `cannot outfit a ship without a captian`
    }
    var dollaz = ship.captain.credits
    var demBillz = this.inventory[partType].value

    if (dollaz < demBillz) {
      return `you require ${demBillz - dollaz} more credits to make this purchase`
    }
    ship.captain.credits = dollaz - demBillz
    ship.updatePart(this.inventory[partType])
    this.inventory[partType] = undefined
    return `shell added to ship`
  }
}

module.exports = Shop

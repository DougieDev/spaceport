var Being = require('../src/being');
var Part = require('../src/part');

class Ship {
  constructor(shipInfo) {
    this.name = shipInfo.name
    this.type =
      shipInfo.type === 'military' ||
      shipInfo.type === 'cargo' ||
      shipInfo.type === 'passenger' ?
      shipInfo.type : undefined
    this.maxCrew = shipInfo.maxCrew
    this.odometer = shipInfo.odometer || 0
    this.fuelCapacity = shipInfo.fuelCapacity || 10
    this.fuel = 0
    this.captain = shipInfo.captain
    this.crew = []
    this.cargo = []
    this.parts = shipInfo.parts || {}
  }

  addCrew(crew) {
    //Spread operators take old this.crew elements and new crew elements and combine them into a new array
    // this.crew = [...this.crew, ...crew]
    for (var i = 0; i < crew.length; i++) {
      //if crew is less than max crew AND crew member is an instance of the class Being...
      if (this.crew.length < this.maxCrew && crew[i] instanceof Being) {
        this.crew.push(crew[i])
      }
    }
  }
  loadCargo(partCargo) {
    if (partCargo instanceof Part) {
      this.cargo.push(partCargo)
    }
  }

  updatePart(part) {
    //STOPPING POINT
    // if (this.parts[part.type]) {
    //   this.parts = {...this.parts, [part.type]: part}

  // }
    if (part.type != undefined) {
      this.parts = {...this.parts, [part.type]: part}
    }
  }
}

module.exports = Ship

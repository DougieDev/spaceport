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
    if (part.type != undefined) {
      if (this.parts[part.type]) {
        var oldValue = this.parts[part.type].value
      }
      this.parts = {...this.parts, [part.type]: part}
      return oldValue - part.value
    }
  }

  checkReadiness() {
    var status = {
      readyToFly: this.isReadyToFly(),
      notes: 'Good to go!'
    }
    if (Object.keys(this.parts).length === 0) {
      status.notes = 'Cannot fly without all parts'
    }
    if (!this.fuel) {
      status.notes = 'Cannot fly without fuel'
    }
    if (!this.captain) {
      status.notes = 'Cannot fly without a captain'
    }
    // if (readyToFly?()) {
    //   status.readyToFly: true
    // }
    return status
  }

  isReadyToFly() {
    return Boolean(this.captain && this.fuel && Object.keys(this.parts).length)
  }
}

module.exports = Ship

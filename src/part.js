class Part {
  constructor(partInfo) {
    this.name = partInfo.name
    this.type =
      partInfo.type === 'shell' ||
      partInfo.type === 'hyperdrive' ||
      partInfo.type === 'computer' ||
      partInfo.type === 'life support' ||
      partInfo.type === 'landing gear' ?
      partInfo.type : undefined;
    this.value = partInfo.value
    this.broken = partInfo.broken = false
  }

  isValid() {
    //--Other ways to display boolean value--/
    // return !!(this.name && this.type && this.value)
    // return Boolean(this.name && this.type && this.value)
    if (this.name && this.type && this.value) {
      return true
    } else {
      return false
    }
  }
}

module.exports = Part

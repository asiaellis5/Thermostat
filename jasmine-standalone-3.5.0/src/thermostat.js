var Thermostat = function() {
  this.temperature = 20
  this.minimumTemperature = 10
  this.powerSavingMode = true
  this.maximumTemperature = function() {
    return this.powerSavingMode ? 25 : 32
  }
  this.increaseTemperature = function() {
    if (this.temperature < this.maximumTemperature()) {
      this.temperature += 1;
    } 
  }

}


Thermostat.prototype.decreaseTemperature = function(number) {
  return this.temperature -= number;
}

Thermostat.prototype.turnPowerSavingOff = function() {
    this.powerSavingMode = !this.powerSavingMode
}


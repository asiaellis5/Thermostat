var Thermostat = function() {
  this.temperature = 20
  this.minimumTemperature = 10
  this.powerSavingMode = true
  this.maximumTemperature = function() {
    return this.powerSavingMode ? 25 : 32
  }
}

Thermostat.prototype.increaseTemperature = function() {
  if (this.temperature < this.maximumTemperature()) {
    this.temperature += 1;
  } 
}

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temperature > this.minimumTemperature) {
    this.temperature -= 1;
  }
}

Thermostat.prototype.turnPowerSavingOff = function() {
    this.powerSavingMode = !this.powerSavingMode
}


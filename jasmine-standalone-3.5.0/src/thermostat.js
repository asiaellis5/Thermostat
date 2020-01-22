"use strict";

var Thermostat = function() {
  this.temperature = 20
  this.resetTemp = 20
  this.minimumTemperature = 10
  this.powerSavingMode = true
  this.maximumTemperature = function() {
    return this.powerSavingMode ? 25 : 32
  }
  this.currentUsage
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

Thermostat.prototype.reset = function() {
  this.temperature = this.resetTemp
}

Thermostat.prototype.currentEnergyUsage = function() {
  if (this.temperature < 18) {
    return("low-usage")
  }
  else if (this.temperature < 25) {
    return("medium-usage")
  }
  else {
    return("high-usage")
  }
}


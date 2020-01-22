var Thermostat = function() {
  this.temperature = 20
  this.minimumTemperature = 10
  this.maximumTemperature = 25
}

Thermostat.prototype.increaseTemperature = function(number) {
  return this.temperature += number;
}

Thermostat.prototype.decreaseTemperature = function(number) {
  return this.temperature -= number;
}
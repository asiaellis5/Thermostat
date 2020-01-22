"use strict";

describe("thermostat", function() {
  var thermostat;
  
  beforeEach(function() {
    thermostat = new Thermostat()
  })


  it("starts at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("increases temperature", function() {
    for (var i = 0; i < 6; i++) {
    thermostat.increaseTemperature();
    }
    expect(thermostat.temperature).toEqual(25);
  });

  it("decreases the temperature", function() {
    for (var i = 0; i < 11; i++) {
      thermostat.decreaseTemperature();
    }
    expect(thermostat.temperature).toEqual(10);
  });

  it("has a minimum temperature of 10 degrees", function() {
    expect(thermostat.minimumTemperature).toEqual(10);
  });

  it("power saving has maximum temperature of 25 degrees", function() {
    expect(thermostat.maximumTemperature()).toEqual(25);
  });

  it("power saving off has maximum temperature of 32 degrees", function() {
    thermostat.turnPowerSavingOff();
    expect(thermostat.maximumTemperature()).toEqual(32);
  });

  it("power saving mode on by default", function() {
    expect(thermostat.powerSavingMode).toBe(true)
  })

  it("switch off power saving mode", function() {
    thermostat.turnPowerSavingOff()
    expect(thermostat.powerSavingMode).toBe(false)
  })

  it("resets back to 20", function() {
    thermostat.reset()
    expect(thermostat.temperature).toEqual(20)
  })
  
  it("shows low usage when temp is below 18", function() {
    for ( var i = 0; i < 3; i++) {
      thermostat.decreaseTemperature();
    }
    expect(thermostat.currentEnergyUsage()).toEqual("low-usage")
    })

    it("shows medium usage when temp is below 25", function() {
      for (var i = 0; i < 4; i++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.currentEnergyUsage()).toEqual("medium-usage")
    })

    it("shows high usage when temp is above 25", function() {
      thermostat.turnPowerSavingOff();

      for (var i = 0; i < 6; i++) {
        thermostat.increaseTemperature();
      }

      expect(thermostat.currentEnergyUsage()).toEqual("high-usage")
    })
});
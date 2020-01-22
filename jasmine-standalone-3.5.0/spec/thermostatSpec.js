describe("thermostat", function() {
  var thermostat;
  
  beforeEach(function() {
    thermostat = new Thermostat()
  })


  it("starts at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("increases temperature", function() {
    thermostat.increaseTemperature();
    expect(thermostat.temperature).toEqual(21);
  });

  it("decreases the temperature", function() {
    thermostat.decreaseTemperature();
    expect(thermostat.temperature).toEqual(19);
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

});
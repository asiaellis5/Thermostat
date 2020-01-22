describe("thermostat", function() {
  var thermostat;
  
  beforeEach(function() {
    thermostat = new Thermostat()
  })


  it("starts at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("increases temperature", function() {
    thermostat.increaseTemperature(5);
    expect(thermostat.temperature).toEqual(25);
  });

  it("decreases the temperature", function() {
    thermostat.decreaseTemperature(10);
    expect(thermostat.temperature).toEqual(10);
  });

  it("has a minimum temperature of 10 degrees", function() {
    expect(thermostat.minimumTemperature).toEqual(10);
  });

  it("power saving has maximum temperature of 25 degrees", function() {
    expect(thermostat.maximumTemperature).toEqual(25);
  });

});
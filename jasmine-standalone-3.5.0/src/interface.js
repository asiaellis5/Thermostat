$(document).ready(function() {
  var thermostat = new Thermostat() 

  $("#temperature").text(thermostat.temperature);

  $("#temperature-up").on('click', function() {
    thermostat.increaseTemperature();
    updateTemperature();
  })

  $('#temperature-down').on('click', function(){
    thermostat.decreaseTemperature();
    updateTemperature();
  })

  $('#temperature-reset').on('click', function(){
    thermostat.reset();
    updateTemperature();
  })

  $('#powersave').on('click', function(){
    thermostat.turnPowerSavingOff();
    updateTemperature();
  })

function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.currentEnergyUsage())
  }

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=31c50239396d81ea3e312fc1c9c788ab&units=metric', function(data){
    $("#current-temperature").text(data.main.temp);
  })


});

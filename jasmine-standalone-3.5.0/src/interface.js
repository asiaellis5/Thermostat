$(document).ready(function() {
  var thermostat = new Thermostat() 

  updateTemperature();

  $("#temperature-up").on('click', function() {
    thermostat.increaseTemperature();
    updateTemperature();
    $('#audioHot').trigger('play');
    if (thermostat.temperature > 24) {
      updateFire() 
    } 
  })

  $('#temperature-down').on('click', function(){
    thermostat.decreaseTemperature();
    updateTemperature();
    if (thermostat.temperature > 24) {
      updateFire()
    }
  })

  $('#temperature-reset').on('click', function(){
    thermostat.reset();
    updateTemperature();
    $('#button').trigger('play');
  })

  $('#powersave').on('click', function(){
    thermostat.turnPowerSavingOff();
    updateTemperature();
    $('#button').trigger('play');
    if (thermostat.temperature > 24) {
      updateFire()
    }
  })

function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.currentEnergyUsage())
  }

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=31c50239396d81ea3e312fc1c9c788ab&units=metric', function(data){
      $("#current-temperature").text(data.main.temp);
    })
  })

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=31c50239396d81ea3e312fc1c9c788ab&units=metric', function(data) {
    $('#london').text(data.main.temp);
  })

  function updateFire() {
    $('#temperature').attr('class', "font-effect-fire-animation");
  }


});

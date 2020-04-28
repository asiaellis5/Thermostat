# Thermostat_Wednesday
Simple thermostat webapp using javascript, jQuery and OpenWeather API.

**The functionality of the app:**

- Starting temperature of 20 degrees
- Maximum temperature of 25 degrees
- Minimum temperature of 10 degrees
- Power Saving - when turned off, maximum temperature is now 32 degrees (PS on as default)
- Reset function returns temperature to 20 degrees

jQuery was used in order to add unique audio to the `+`, `-`, `Power Saving` and `Reset` buttons when clicked, these are all different.

The main temperature display also changes colour:

- Red - When temperature between 25-32 degrees
- Green - When temperature between 18-24 degrees
- Blue - When temperature between 10-17 degrees

The app also calls on the `OpenWeatherMap` API, this shows the real temperature (in celcius) for London, New York and Sao Paolo. The app also has a search bar that can be used to search the current temperature for any city in the world - this will then also be displayed.

---

## How to Run

Clone this repo, in the command line navigate to the [_jasmine_](jasmine) directory and in the command line type:

```
bundle install
```

Once the dependencies are installed, right click on the [_index_](index.html) file, click `copy path` and paste this into the Google Chrome browser to run the app.

### Running Tests

From the [_jasmine_](jasmine) directory, right click on the [_SpecRunner_](SpecRunner.html) file, click `copy path` and paste this into the Google Chrome browser.

This will display the `Jasmine Test Suite` showing 10 passing tests.

---


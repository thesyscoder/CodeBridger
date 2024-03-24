/**
 * SkySense is a simple weather application that allows users to check the current weather conditions for their location.
 * @file main.js
 * @author thesyscoder
 */

// function for get the weather data of the given location

const getWeather = async (location) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f3911b7d27f11e75e1a769f7434930ee&units=metric`
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {}
};

getWeather("pune");

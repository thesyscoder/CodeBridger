/**
 * SkySense is a simple weather application that allows users to check the current weather conditions for their location.
 * @file main.js
 * @author thesyscoder
 */

// event listener for search the city
document
  .getElementById("weatherFormInput")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const userInputCity = document.getElementById("search").value.trim();
    getWeather(userInputCity);
  });
// function for get the weather data of the given location

const getWeather = async (location) => {
  try {
    showCurrentDate();
    // fetch the weather api data
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f3911b7d27f11e75e1a769f7434930ee&units=metric`
    );
    const data = await response.json();
    // get all html elements
    const city = document.getElementById("city");
    city.textContent = data.name;

    const description = document.getElementById("description");
    description.textContent = data.weather[0].description;

    const temp = document.getElementById("temp");
    temp.textContent = data.main.temp + "°";
  } catch (error) {
    console.log("Error fetching data", error);
  }
};

function showCurrentDate() {
  const currentDate = new Date();
  // Format the date to "Day Date Month" format
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  var formattedDate = currentDate.toLocaleDateString("en-US", options);
  document.getElementById("currentDate").innerHTML = formattedDate;
}

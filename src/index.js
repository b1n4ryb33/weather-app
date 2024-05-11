/**
 * Global CSS imports
 */
import "./reset.css";
import "./main.css";

/**
 * Font Awesome
 */
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

import { getWeatherFromLocation } from "./weather-api-client/weather-api-client";
import { createWeatherCard } from "./weather-card/weather-card";

getWeatherFromLocation().then((response, reject)=>{
  console.dir(response);
  createWeatherCard('section#content', response);
});

document.querySelector("form#location-search-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const searchValue = this.querySelector("input#location-search").value;
  getWeatherFromLocation(searchValue).then((response)=>{
    createWeatherCard('section#content', response);
  });
})

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
import { spinner } from "./spinner-component/spinner";
import { errorHandler } from "./error-component/error";

getWeatherFromLocation().then((response, reject)=>{
  errorHandler.hideError();
  createWeatherCard('section#content', response);
}).catch((error)=>{
  errorHandler.showError(error.message);
});

document.querySelector("form#location-search-form").addEventListener("submit", function(event) {
  event.preventDefault();
  errorHandler.hideError();
  spinner.showLoader();
  const searchValue = this.querySelector("input#location-search").value;
  const isMetric = document.querySelector('input#metric-checkbox').checked ? false : true;
  getWeatherFromLocation(searchValue).then((response)=>{
    createWeatherCard('section#content', response, isMetric);
    spinner.hideLoader();
  }).catch((error)=>{
    errorHandler.showError(error.message);
    spinner.hideLoader();
  });
})

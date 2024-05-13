import "./weather-card.css";
import { createWeatherLocation } from "../weather-location-model/weather-location";


function createWeatherCard(selector, data, metric = true){
    const _weatherLocation = createWeatherLocation(data);
    console.dir(_weatherLocation.humidity);
    const weatherCardContainer = document.createElement("div");
    weatherCardContainer.classList.add("weather-card-container");
    weatherCardContainer.innerHTML = createTemplate(_weatherLocation, metric);
    const selectorNode = document.querySelector(selector);
    selectorNode.append(weatherCardContainer);
}

function createTemplate(data, metric){
    let weatherDataTemplate = metric ? createWeatherTemplateMetric(data) : createWeatherTemplateUS(data);
    const template = createLocationTemplate(data) + weatherDataTemplate;
    return template + `<div class="weather-icon"><i class="fa-solid fa-sun"></i></div>`;
}

function createLocationTemplate(data){
    const template = 
    `<div class="location-container">
        <span class="location-name">Ort: ${data.name}</span>
        <span class="location-region">Region: ${data.region}</span>
        <span class="location-timestamp">Uhrzeit: ${data.timeStamp}</span>
    </div>`;

    return template;
}

function createWeatherTemplateMetric(data){
    const template = 
    `<div class="weather-container">
        <span class="weather-temp-c">Temparatur (C): ${data.temp_c}</span>
        <span class="weather-wind-kph">Windst&auml;rke (kph): ${data.wind_kph}</span>
        <span class="weather-humidity">Luftfeuchtigkeit: ${data.humidity}</span>
    </div>`;

    return template;
}

function createWeatherTemplateUS(data){
    const template = 
    `<div class="weather-container">
        <span class="weather-temp-c">Temparatur (F): ${data.temp_f}</span>
        <span class="weather-wind-kph">Windst&auml;rke (mph): ${data.wind_mph}</span>
        <span class="weather-humidity">Luftfeuchtigkeit: ${data.humidity}</span>
    </div>`;

    return template;
}


export { createWeatherCard };
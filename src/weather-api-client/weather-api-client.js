import "./sample.css";
import { WEATHER_API_KEY } from "../secrets";

const BASE_URL = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}`;


async function getWeatherFromLocation(location = "london"){

    if (location == ""){
        throw new Error("Location must be set. Cant show weather for nothing.");
    }

    try {
        const queryUrl = addQueryParam('q', location, BASE_URL);
        
        let response = await fetch(queryUrl, {
            mode: 'cors'
        });

        let data = await validateResponse(response);

        return data;
    } catch (err){
        throw err;
    }
}

async function validateResponse(response){
 
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  
    let responseJson = await response.json();
    
    if (responseJson && responseJson.length === 0) {
      throw new Error("No results found.");
    }
    
    return responseJson;
  }

function addQueryParam(param, value, url, encoded = false){
    let encodeValue;
    
    if(!encoded){
        encodeValue = encodeURIComponent(value);
    } else {
        encodeValue = value;
    }
    

    return `${url}&${param}=${value}`;
}

export { getWeatherFromLocation };
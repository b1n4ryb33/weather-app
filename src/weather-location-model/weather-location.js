function createWeatherLocation(data){

    if(data == null || data == undefined || data.length < 1){
        throw new Error("Can't create weather location object with empty data");
    }

    let location;
    let weather;

    try {
        location = createLocation(data.location);
        weather = createWeather(data.current);
    } catch(err) {
        console.dir(err);
    }
    
    let weatherLocation = Object.assign({}, location);
    Object.assign(weatherLocation, weather);

    return Object.assign({},weatherLocation);
}

function createWeather(data){
    
    if(data == null || data == undefined || data.length < 1){
        throw new Error("Can't create location object with empty data");
    }

    const temp_c = data.temp_c;
    const temp_f = data.temp_f;
    const wind_mph = data.wind_mph;
    const wind_kph = data.wind_kph;
    const humidity = data.humidity;

    return {temp_c, temp_f, wind_mph, wind_kph, humidity};

}

function createLocation(data){
    
    if(data == null || data == undefined || data.length < 1){
        throw new Error("Can't create location object with empty data");
    }

    const name = data.name;
    const region = data.region;
    const timeStamp = data.localtime;

    return {name, region, timeStamp};    
}

export {createWeatherLocation};

/*  Location
    "name": "London",
    "region": "City of London, Greater London",
    "country": "United Kingdom",
    "lat": 51.52,
    "lon": -0.11,
    "tz_id": "Europe/London",
    "localtime_epoch": 1715414527,
    "localtime": "2024-05-11 9:02"
*/

/*  Weather
    "current": {
        "last_updated_epoch": 1715414400,
        "last_updated": "2024-05-11 09:00",
        "temp_c": 14.0,
        "temp_f": 57.2,
        "is_day": 1,
        "condition": {
            "text": "Mist",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/143.png",
            "code": 1030
        },
        "wind_mph": 5.6,
        "wind_kph": 9.0,
        "wind_degree": 50,
        "wind_dir": "NE",
        "pressure_mb": 1022.0,
        "pressure_in": 30.18,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 88,
        "cloud": 50,
        "feelslike_c": 13.1,
        "feelslike_f": 55.6,
        "vis_km": 5.0,
        "vis_miles": 3.0,
        "uv": 5.0,
        "gust_mph": 8.7,
        "gust_kph": 14.1,
        "air_quality": {
            "co": 243.7,
            "no2": 23.0,
            "o3": 49.4,
            "so2": 13.1,
            "pm2_5": 16.8,
            "pm10": 19.0,
            "us-epa-index": 2,
            "gb-defra-index": 2
        }
    }
*/
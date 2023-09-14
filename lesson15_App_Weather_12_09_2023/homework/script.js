const API_KEY = "468be9cf8e397711d8bb840fad102c64";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const locationInput = document.getElementById("locationInput");
const weatherButton = document.getElementById("getWeatherButton");
const weatherContainer = document.getElementById("weatherContainer");

weatherButton.addEventListener('keydown', (e) => {
    console.log(e);
    if (e.code === 'KeyA') {
        console.log('We pressed the A key');
    }
})

weatherButton.addEventListener("click", () => {
    const location = locationInput.value.trim();

    // if (location) {
    //     const apiURL = `${BASE_URL}?q=${location}&appid=${API_KEY}`;

    //     fetch(apiURL)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             let parseTemp = data.main.temp;
    //             parseTemp = (parseTemp + " ").slice(0, 2);
    //             weatherContainer.innerHTML = `
    //                 <p>City: ${data.name}</p>
    //                 <p>Temperature: ${parseTemp}</p>
    //                 <p>Cloudy: ${data.clouds.all}%</p>
    //                 <p>Description: ${data.weather[0].description}</p>
    //                 <p>Humidity: ${data.main.humidity}%</p>
    //                 <p>Wind: ${data.wind.speed}km/h</p>
    //             `;
    //         });
    // }

    if (location) {
        const apiURL = `${BASE_URL}?q=${location}&appid=${API_KEY}&units=metric`;

        fetch(apiURL)
            .then(res => res.json())
            .then(data => displayWeather(data))

            .catch(err => console.log(err))
            .finally(console.log("Request is finished"));
                
            
    }
});

function displayWeather(weatherData) {
    const { 
        name, 
        sys: { country },
        main, 
        main: { humidity: hum }, 
        weather, 
        wind: { speed }, 
        visibility 
    } = weatherData;

    weatherContainer.innerHTML = `
        <h2>${name}, ${country}</h2>
        <p>Temperature: ${main.temp}</p>
        <p>Max temperature: ${main.temp_max}</p>
        <p>Min temperature: ${main.temp_min}</p>
        <p>Weather: ${weather[0].main}</p>
        <p>Description: ${weather[0].description}</p>
        <p>Humidity: ${hum}</p>
        <p>Speed of wind: ${speed}</p>
        <p>Visibility: ${visibility}</p>
    `;
}

/*
fetch(apiUrl)
    .then((res) => res.json())
    .then(({
            base,
            name,
            coord: { lon, lat },
            main: { temp, feels_like },
            sys: { country },
            weather: {
                0: { main, description },
            },
        }) =>
            console.log(
                base,
                name,
                lon,
                lat,
                (temp - 273.15).toFixed(1),
                (feels_like - 273.15).toFixed(1),
                country,
                description,
                main
            )
    )

    .catch((err) => console.log(err))
    .finally(console.log("Request is finished!"));
*/
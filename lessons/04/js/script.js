// This is the openweather.com API Key
let API = "a63e47f37a743be15083ba6bebc0d0ef";

//The function to get the data
getWeatherData = () => {
    let city = getCityName();

    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`;

    // console.log(URL);


    fetch(URL)
        .then(response => response.json())
        .then((data) => showResult(data))
        .catch(error => console.log(error));



};

// Get the city name
function getCityName() {
    return document.querySelector("#city-input").value;
}

function showResult(data) {
    document.querySelector("#city-nam-output").innerText = data.name;
    document.querySelector("#card-title").innerText = data.weather[0].description;
    document.querySelector("#temp").innerText = data.main["temp"];
    document.querySelector("#mintemp").innerText = data.main['temp_min'];
    document.querySelector("#maxtemp").innerText = data.main["temp_max"];
}
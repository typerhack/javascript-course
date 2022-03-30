// This is the openweather.com API Key
let API = 'a63e47f37a743be15083ba6bebc0d0ef';

//The function to get the data
getWeatherData = () => {
    let city = getCityName();

    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}?`
    console.log(URL);

    fetch(URL)
        .then(response => console.log(response.json()))
        .then(data => console.log(data));

    showResult(city);

}

// Get the city name
function getCityName() {
    return document.querySelector('#city-input').value;
}

function showResult(city) {
    document.querySelector('#card-title').value = city;
}
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const countryOutput = document.getElementById('country');
const cityOutput = document.getElementById("cityOutput");
const discOutput = document.getElementById('description');
const tempOutput = document.getElementById('temp');
const windOutput = document.getElementById('wind');

const apiKey = "9310540e371a8e04be2422e7cb2ddae8";

function convertToCel(value){
    return (value-273).toFixed(2);
}

async function getWeather() {
    var weatherResult = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
        ${cityInput.value}&appid=${apiKey}`)).json();

    setInfo(weatherResult);
}   

function setInfo (data){

    var countryName = data["sys"]["country"];
    var cityName = data["name"];
    var description = data["weather"][0]["description"];
    var temp = data["main"]["temp"];
    var wind = data["wind"]["speed"];

    countryOutput.innerHTML = `Country: ${countryName}`;
    cityOutput.innerHTML = `City: ${cityName}`;
    discOutput.innerHTML = `Description: ${description}`;
    tempOutput.innerHTML = `Temprature: ${convertToCel(temp)} C`;
    windOutput.innerHTML = `Wind Speed: ${wind} km/h`;
}

searchBtn.addEventListener('click', getWeather);

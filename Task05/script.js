let searchBox = document.getElementsByClassName("search-container")[0];
let weatherBox = document.getElementsByClassName("weather-display-container")[0];


function toggleContainers(){
    weatherBox.classList.remove("inactive");
}




let searchButton = document.getElementById("search-button")
let searchField = document.getElementById("searchbar")

let cityName = ""

function api(){
    let url = `http://api.weatherapi.com/v1/current.json?key=4d5cdad1c192451191c112257242505&q=${cityName}`
    fetch(url)
    .then(res=> res.json())
    .then(data=>result(data))


}

function search(){
    cityName = searchField.value;
    api();
    toggleContainers();
}


//searchButton.addEventListener("click",search);

let cityNameHeading = document.getElementById("city-name-heading")
let currentTempText = document.getElementById("current-temp-text")
let humidityText = document.getElementById("humidity-text")
let windDirText = document.getElementById("wind-dir-text")
let windSpeedText = document.getElementById("wind-speed-text")
let feelsLikeText = document.getElementById("feels-like-text")
let precipitationText = document.getElementById("precipitation-text")
let uvText = document.getElementById("uv-text")
let visibilityText = document.getElementById("visibility-text")


function result(info){
    cityNameHeading.innerHTML = cityName.toUpperCase();
    currentTempText.innerHTML = info.current.temp_c;
    humidityText.innerHTML = info.current.humidity + "%";
    windDirText.innerHTML = info.current.wind_dir;
    windSpeedText.innerHTML = info.current.wind_kph + "kph";
    feelsLikeText.innerHTML = "Feels Like : " + info.current.feelslike_c;
    precipitationText.innerHTML = info.current.precip_mm + "mm";
    uvText.innerHTML = info.current.uv;
    visibilityText.innerHTML = info.current.vis_km + " km";
}
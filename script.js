


const apiKey = "a5521908a453246a5aeabfaf924702a7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const SearchBox = document.querySelector(".search input");
const SearchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if (!response.ok) {
        alert("City not found!");
        return;
    }

    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
}

SearchBtn.addEventListener("click", () => {
    checkWeather(SearchBox.value);
});

// Optional: check weather for default city on load
checkWeather("dhaka");

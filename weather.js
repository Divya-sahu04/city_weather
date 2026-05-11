async function checkWeather(){

    let city = document.getElementById("cityInput").value;

    let apiKey = "2c985379f61dc169b2e172e00a69edaa";

    let apiURL =
    "https://api.openweathermap.org/data/2.5/weather?q="
    + city +
    "&appid=" + apiKey +
    "&units=metric";

    try{

        let response = await fetch(apiURL);

        let data = await response.json();

        console.log(data);

        if(data.cod == 200){

            document.getElementById("cityName").innerHTML =
            data.name;

            document.getElementById("temp").innerHTML =
            "Temperature : " + data.main.temp + " °C";

            document.getElementById("climate").innerHTML =
            "Climate : " + data.weather[0].main;

            document.getElementById("humidity").innerHTML =
            "Humidity : " + data.main.humidity + "%";

        }
        else{

            alert("City not found");

        }

    }
    catch(error){

        alert("Something went wrong");

        console.log(error);

    }

}
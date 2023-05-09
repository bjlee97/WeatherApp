let lat = 0;                    // Create the variable for latitude
let long = 0;                   // Create the variable for longitude

window.onload = function() {
    const date = new Date();
    const dateString = (date.getMonth() + 1) + '/' + date.getDate() +      '/' + date.getFullYear();
    document.getElementById('date').innerHTML = dateString;
    // Now, set the .date HTML text to our dateString

    if ("geolocation" in navigator) {   //if browser supports location
        navigator.geolocation.getCurrentPosition(success)   //call success function
        //collects a lot of information
    } 
    
    else {                              //if not supported
      console.log("Geolocation is not available in your browser."); //report error message
    }    
}

function success(position){         //enable permissions
	lat = position.coords.latitude;    //redefine lat
	long = position.coords.longitude;  //redefine long
    console.log(lat,long)
	// Print out the latitude and longitude to see if it works!
}
    
const btn = document.getElementById('getWeatherBtn')

btn.addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `localhost:3000/weather/${lat}/${long}`); //We change this later (What are we calling if we want to get the current weather data)
    xhr.send();

    xhr.onload = function() {
        //What’s wrong w/ this (Think about the format responseText is in and what format we need it in (stringify/parse)
        const body = JSON.parse(xhr.responseText);
        let temperature = body.temperature;
        let weatherStatus = body.weatherStatus;
        document.getElementById("temperature").innerHTML = `Temperature: ${temperature}°F`
        document.getElementById("weatherStatus").innerHTML = `Weather Status: ${weatherStatus}`
    }

    const xhr2 = new  XMLHttpRequest();
    xhr2.open("GET", `http://localhost:3000/weather/${lat}/${lon}`);
    xhr2.send();

    xhr2.onload = function() {
        const body = JSON.parse(xhr2.responseText)
        var forecast = body.forecast //Remember: this is a list
        var forecastElements = document.getElementsByClassName("forecast");
        for (var i = 0; i < forecast.length; i++) {
            forecastElements[i].innerHTML = `${forecast[i].dayName}: ${forecast[i].temp} \u00B0 F`;
    }
    }
    

    let forecast = [["M", 52], ["Tu", 53], ["W", 54], ["Th", 55], ["F", 56]]
    let forecastElements = document.getElementsByClassName("forecast");
    for (let i = 0; i < forecast.length; i++) {
        forecastElements[i].innerHTML = forecast[i][0] + ": " + forecast[i][1] + "\u00B0 F";
      }
});


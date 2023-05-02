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
    let forecast = [["M", 52], ["Tu", 53], ["W", 54], ["Th", 55], ["F", 56]]
    let forecastElements = document.getElementsByClassName("forecast");
    for (let i = 0; i < forecast.length; i++) {
        forecastElements[i].innerHTML = forecast[i][0] + ": " + forecast[i][1] + "\u00B0 F";
      }
});


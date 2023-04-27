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
    
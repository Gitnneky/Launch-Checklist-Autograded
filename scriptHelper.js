// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
// Here is the HTML formatting for our mission target div.

let div= document.getElementById("missionTarget");
div.innerHTML =`
<h2>Mission Destination</h2>
<ol>
<li>Name: ${name} </li>
<li>Diameter: ${diameter} </li>
<li>Star: ${star}</li>
<li>Distance from Earth: ${distance}</li>
<li>Number of Moons: ${moons}</li>
</ol>
 <img src="${imageUrl}">`;
    
}
 
 function validateInput(testInput) {
    let number = Number(testInput)
if (testInput === ""){
    return "Empty";
    } else if (isNaN(number)) {
    return "Not a Number"
} else if (isNaN(number) === false){
return ("Is a Number")
}  
}
 
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel){
let pilotStatus = document.getElementById('pilotStatus');
let copilotStauts = document.getElementById('copilotStatus');
let fuelStatus = document.getElementById('fuelStatus');
let cargoStatus = document.getElementById('cargoStatus');
let launchStatus = document.getElementById('launchStatus');

let readyToLaunch = true;
if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty'){
readyToLaunch = false;
alert('All fields are required');   
}

if (validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number' || validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number'){
 readyToLaunch = false

 alert("Please enter valid information for each field!");
 } 
 else {
pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
copilotStauts.innerHTML = `Co-pilot ${copilot} is ready for launch`;

if (fuelLevel >= 10000) {
fuelStatus.innerHTML = "Fuel level high enough for launch";
} else {
list.style.visibility = 'Visible';
fuelStatus.innerHTML = "Fuel level too low for launch";
launchStatus.innerHTML = "Shuttle Not Ready for Launch";
launchStatus.style.color = "red";
readyToLaunch = false;
}

if (cargoLevel <= 10000) { // Second: Condition for Cargo level
    cargoStatus.innerHTML = "Cargo mass low enough for launch"
} else {
 list.style.visibility = 'visible'; // faulty id visible
 cargoStatus.innerHTML = "Cargo mass too heavy for launch";
launchStatus.innerHTML = "Shuttle Not Ready for Launch";
launchStatus.style.color = "red"; // color changed to red
readyToLaunch = false; //In this condition ready to launch will be false
}

}

if (readyToLaunch) { // This mean rdyToLaunch = true;
launchStatus.innerHTML = "Shuttle is Ready for Launch";
launchStatus.style.color = "green"; //color changes to green
}
}

async function myFetch() {
let planetsReturned;

planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
return response.json()
});
 
return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length); // Return one planet from the list with a randomly-selected index.
    return planets[index];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;
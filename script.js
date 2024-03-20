// Write your JavaScript code here!

const { addDestinationInfo, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
let listedPlanets;
// Set listedPlanetsResponse equal to the value returned by calling myFetch()
let listedPlanetsResponse = myfetch();

listedPlanetsResponse.then(function (result) {
listedPlanets = result;
console.log(listedPlanets);
}).then(function () {
console.log(listedPlanets);
// Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
let selectedPlanet = pickPlanet(listedPlanets);
console.log(selectedPlanet);

addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
    
const form = document.querySelector('form');
const list = document.querySelector('#faultyItems');
form.addEventListner("submit", function(event){
event.preventDefault();
const pilot = document.querySelector("input[name=pilotName}").value;
const copilot = document.querySelector("input[name=copilotName]").value;
const fuelLevel = document.querySelector("input[name=fuelLevel}").value;
const cargoLevel = document.querySelector("input[name=cargoMass]").value;

formSubmission(document,list,pilot,copilot,fuelLevel,cargoLevel);
});

})
    
 });
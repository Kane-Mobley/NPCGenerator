const regions = require("../config/regions.json");
const { randomArrayValue } = require("../functions/randomArrayValue");

function randomLocation(){
    //Planet
    const planets = regions.planets;
    const randomPlanet = randomArrayValue(planets);
    const planetName = randomPlanet.planetName;
    const planetContinents = randomPlanet.continents;
    //Continent
    const randomContinent = randomArrayValue(planetContinents);
    const continentName = randomContinent.continentName;
    const continentRegions = randomContinent.continentRegions;
    //Region
    const randomRegion = randomArrayValue(continentRegions);
    const regionName = randomRegion.regionName;
    const regionLocations = randomRegion.regionLocations;
    const regionURL = randomRegion.regionURL
    //location
    const randomLocation = randomArrayValue(regionLocations);
    const locationName = randomLocation.locationName;
    const locationURL = randomLocation.locationURL
    return {planetName:planetName , continentName:continentName, regionName:regionName, regionURL:regionURL,  locationName:locationName, locationURL:locationURL}
}
module.exports = {
  randomLocation
}
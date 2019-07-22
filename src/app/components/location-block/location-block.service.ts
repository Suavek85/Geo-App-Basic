import { Subject } from "rxjs";
import { LocationDataElement } from "./data.model";

export class LocationsService {
  private locations = [];
  private homes = [];
  locationsUpdated = new Subject();
  key = "AjF525jJkMH_mNXo4Aov0_S_jIAYZubFnMxP3AIg4jMkjaqpWL4Hz9SG6BMDUESC";
  long: number;
  lat: number;
  address: any;
  country: any;
  newLocationEl: any;
  newHomeEl: any;
  uniqueCountries: any;
  northernMostLocation: any;

  getLocations() {
    return [...this.locations];
  }

  getHomes() {
    return [...this.homes];
  }

  deleteLocation(locationName: string) {
    this.locations = this.locations.filter(l => l !== locationName);
    this.locationsUpdated.next();
  }

  //API METHODS

  apiURL(input, key) {
    return `http://dev.virtualearth.net/REST/v1/Locations?query=${input}
    &key=${key}`;
  }

  getAPI(locationName: string) {
    fetch(this.apiURL(locationName, this.key))
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setAPIData(data);
        this.newLocationEl = new LocationDataElement(
          locationName,
          this.lat,
          this.long,
          this.address,
          this.country
        );
        this.locations.push(this.newLocationEl);
        console.log(this.locations);
        this.getUniqueCountries();
        this.getNorthernmostLocation();
        this.locationsUpdated.next();
      })
      .catch(error => window.alert("Wrong location name"));
  }

  getHomeAPI(homeName: string) {
    fetch(this.apiURL(homeName, this.key))
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setAPIData(data);
        this.newHomeEl = new LocationDataElement(
          homeName,
          this.lat,
          this.long,
          this.address,
          this.country
        );
        this.homes.length ? this.homes.splice(-1, 1) : null;
        this.homes.push(this.newHomeEl);
        console.log(this.homes);
        this.locationsUpdated.next();
      })
      .catch(error => window.alert("Wrong home name"));
  }

  setAPIData(data) {
    this.long =
      data.resourceSets[0].resources[0].geocodePoints[0].coordinates[1];
    this.lat =
      data.resourceSets[0].resources[0].geocodePoints[0].coordinates[0];
    this.address = data.resourceSets[0].resources[0].address.formattedAddress;
    this.country = data.resourceSets[0].resources[0].address.countryRegion;
  }

  //STATS METHODS

  getUniqueCountries() {
    const allCountries = [];
    this.locations.forEach(el => {
      allCountries.push(el.country);
    });
    this.uniqueCountries = [...new Set(allCountries)];
  }

  getNorthernmostLocation() {
    const northernObj = this.locations.reduce(function(prev, current) {
      return prev.la > current.la ? prev : current;
    });
    this.northernMostLocation = northernObj.loc;
  }
}

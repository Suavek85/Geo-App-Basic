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
  newLocationEl: any;
  newHomeEl: any;

  apiURL(input, key) {
    return `http://dev.virtualearth.net/REST/v1/Locations?query=${input}
    &key=${key}`;
  }

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

  getAPI(locationName: string) {
    fetch(this.apiURL(locationName, this.key))
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.long =
          data.resourceSets[0].resources[0].geocodePoints[0].coordinates[0];
        this.lat =
          data.resourceSets[0].resources[0].geocodePoints[0].coordinates[1];
        this.address =
          data.resourceSets[0].resources[0].address.formattedAddress;
        this.newLocationEl = new LocationDataElement(locationName, this.lat, this.long, this.address);
        this.locations.push(this.newLocationEl);
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
        this.long =
          data.resourceSets[0].resources[0].geocodePoints[0].coordinates[0];
        this.lat =
          data.resourceSets[0].resources[0].geocodePoints[0].coordinates[1];
        this.address =
          data.resourceSets[0].resources[0].address.formattedAddress;
        this.newHomeEl = new LocationDataElement(homeName, this.lat, this.long, this.address);
        this.homes.length ? this.homes.splice(-1, 1) : null;
        this.homes.push(this.newHomeEl);
        this.locationsUpdated.next();
      })
      .catch(error => window.alert("Wrong home name"));
  }

  //getAPIData(long, lat) {
  //long =
  //data.resourceSets[0].resources[0].geocodePoints[0].coordinates[0];
  //lat =
  //data.resourceSets[0].resources[0].geocodePoints[0].coordinates[1];

  //}
}

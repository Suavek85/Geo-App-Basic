import { Subject } from "rxjs";
import { Test } from "./data.model";

export class LocationsService {
  private locations = [];
  private homes = [];
  locationsUpdated = new Subject();
  key = "AjF525jJkMH_mNXo4Aov0_S_jIAYZubFnMxP3AIg4jMkjaqpWL4Hz9SG6BMDUESC";
  long: number;
  lat: number;
  p1: any;
  p2: any;

  apiURL(input, key) {
    return `http://dev.virtualearth.net/REST/v1/Locations?query=${input}
    &key=${key}`;
  }

  //addLocation(locationName: string) {
  //this.locations.push(locationName);
  //this.locationsUpdated.next();
  //}

  getLocations() {
    return [...this.locations];
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
        this.p1 = new Test(locationName, this.lat, this.long);
        this.locations.push(this.p1);
        console.log(this.locations);
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
        this.p2 = new Test(homeName, this.lat, this.long);
        this.homes.length? this.homes.splice(-1,1) : null;
        this.homes.push(this.p2);
        console.log(this.homes)
        this.locationsUpdated.next();
      })
      .catch(error => window.alert("Wrong home name"));
  }
}

import { Subject } from "rxjs";
import { Test } from "./data.model";

export class LocationsService {
  private locations = [];
  locationsUpdated = new Subject();

  key = "AjF525jJkMH_mNXo4Aov0_S_jIAYZubFnMxP3AIg4jMkjaqpWL4Hz9SG6BMDUESC";
  long;
  lat;

  apiURL(input, key) {
    return `http://dev.virtualearth.net/REST/v1/Locations?query=${input}
    &key=${key}`;
  }

  addLocation(locationName: string) {
    this.locations.push(locationName);
    this.locationsUpdated.next();
  }

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
        this.long =
          data.resourceSets[0].resources[0].geocodePoints[0].coordinates[0];
        this.lat =
          data.resourceSets[0].resources[0].geocodePoints[0].coordinates[1];
        console.log(this.long);
        console.log(this.lat);
        const p1 = new Test(locationName, this.lat, this.long);
        console.log(p1)
        p1.getMap();
    
      });
  }

  



}

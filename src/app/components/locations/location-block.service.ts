import { Subject } from "rxjs";
import { LocationDataElement } from "./data.model";
import { StatsData } from "./stats.model";

export class LocationsService {
  private locations = [];
  private homes = [];
  public statsData: StatsData[] = [
    {
      uniqueCountries: [],
      northernmostLocation: "None",
      southernmostLocation: "None",
      westernmostLocation: "None",
      easternmostLocation: "None"
    }
  ];
  locationsUpdated = new Subject();
  key = "AjF525jJkMH_mNXo4Aov0_S_jIAYZubFnMxP3AIg4jMkjaqpWL4Hz9SG6BMDUESC";
  long: number;
  lat: number;
  address: any;
  country: any;
  newLocationEl: any;
  newHomeEl: any;
  uniqueCountries: string[];
  northernMostLocation: string = "None";
  southernMostLocation: string = "None";
  westernMostLocation: string = "None";
  easternMostLocation: string = "None";
  closestLocation: string = "None";

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
        this.setAPIData(data);
        this.newLocationEl = new LocationDataElement(
          locationName,
          this.lat,
          this.long,
          this.address,
          this.country
        );
        this.locations.push(this.newLocationEl);
        this.getAllStats();
        this.getClosestToHome();
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

        this.locationsUpdated.next();
      })
      .catch(error => window.alert("Wrong home name"));
  }

  setAPIData(data: any) {
    this.long =
      data.resourceSets[0].resources[0].geocodePoints[0].coordinates[1];
    this.lat =
      data.resourceSets[0].resources[0].geocodePoints[0].coordinates[0];
    this.address = data.resourceSets[0].resources[0].address.formattedAddress;
    this.country = data.resourceSets[0].resources[0].address.countryRegion;
  }

  //STATS PRIVATE METHODS

  private getAllStats() {
    this.getUniqueCountries();
    this.getNorthernmostLocation();
    this.getSouthernmostLocation();
    this.getWesternnmostLocation();
    this.getEasternnmostLocation();
    this.statsData = [
      {
        uniqueCountries: this.uniqueCountries,
        northernmostLocation: this.northernMostLocation,
        southernmostLocation: this.southernMostLocation,
        westernmostLocation: this.westernMostLocation,
        easternmostLocation: this.easternMostLocation
      }
    ];
  }

  private getUniqueCountries() {
    const allCountries = [];
    this.locations.forEach(el => {
      allCountries.push(el.country);
    });
    this.uniqueCountries = [...new Set(allCountries)];
  }

  private getNorthernmostLocation() {
    const northObj = this.locations.reduce((prev, current) => {
      return prev.la > current.la ? prev : current;
    });
    this.northernMostLocation = northObj.loc;
  }

  private getSouthernmostLocation() {
    const southObj = this.locations.reduce((prev, current) => {
      return prev.la < current.la ? prev : current;
    });
    this.southernMostLocation = southObj.loc;
  }

  private getWesternnmostLocation() {
    const westObj = this.locations.reduce((prev, current) => {
      return prev.lo < current.lo ? prev : current;
    });
    this.westernMostLocation = westObj.loc;
  }

  private getEasternnmostLocation() {
    const eastObj = this.locations.reduce((prev, current) => {
      return prev.lo > current.lo ? prev : current;
    });
    this.easternMostLocation = eastObj.loc;
  }

  private getClosestToHome() {
    const firstLa = this.locations[0].la;
    const firstLo = this.locations[0].lo;

    if (this.homes.length) {
      var homeLa = this.homes[0].la;
      var homeLo = this.homes[0].lo;
    } else {
      return;
    }

    var x = this.distanceInKmBetweenEarthCoordinates(
      firstLa,
      firstLo,
      homeLa,
      homeLo
    );
    let arrDis = []

    this.locations.forEach((el, i) => {
      let u = {
        index: i,
        name: el.address,
        distance: this.distanceInKmBetweenEarthCoordinates(
          el.la,
          el.lo,
          homeLa,
          homeLo
        )
      };
      arrDis.push(u);
    
    });

    console.log(x);
    console.log(arrDis)

    const closesObj = this.arrDis.reduce((prev, current) => {
      return prev.la < current.la ? prev : current;
    });
    this.closestLocation = closesObj.name;


  }

  private degreesToRadians(degrees: any): number {
    return (degrees * Math.PI) / 180;
  }

  private distanceInKmBetweenEarthCoordinates(
    lat1: any,
    lon1: any,
    lat2: any,
    lon2: any
  ) {
    var earthRadiusKm = 6371;

    var dLat = this.degreesToRadians(lat2 - lat1);
    var dLon = this.degreesToRadians(lon2 - lon1);

    lat1 = this.degreesToRadians(lat1);
    lat2 = this.degreesToRadians(lat2);

    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadiusKm * c;
  }
}

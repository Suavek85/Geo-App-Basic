import { Subject } from "rxjs";
import { LocationDataElement } from "./data.model";
import { StatsData } from "./stats.model";
import { AngularFirestore } from "@angular/fire/firestore";

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
  key: any;
  keyAPI: any = this.db.collection("bingkey").doc("mYRsUMqj2QR0DE5LPAbl").valueChanges().subscribe(result => this.key = result)
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
  arrDis: any = [];

  constructor(private db: AngularFirestore) {}

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
    fetch(this.apiURL(locationName, this.key.key))
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
          this.country,
          this.key
        );
        this.locations.push(this.newLocationEl);
        this.getAllStats();
        this.getClosestToHome();
        this.locationsUpdated.next();
      })
      .catch(error => window.alert("Wrong location name"));
  }

  getHomeAPI(homeName: string) {
    fetch(this.apiURL(homeName, this.key.key))
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
          this.country,
          this.key.key
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

  //MAIN

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

  //HELPERS

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
    if (this.homes.length && this.locations.length) {
      const locationDistanceItem = {
        index: this.locations.length - 1,
        name: this.locations[this.locations.length - 1].address,
        distance: this.distanceInKmBetweenEarthCoordinates(
          this.locations[this.locations.length - 1].la,
          this.locations[this.locations.length - 1].lo,
          this.homes[0].la,
          this.homes[0].lo
        )
      };

      this.arrDis.push(locationDistanceItem);

      const closesObj = this.arrDis.reduce((prev, current) => {
        return prev.distance < current.distance ? prev : current;
      });
      this.closestLocation = `${closesObj.name} away ${Math.round(
        closesObj.distance
      )} km in straight line from home location`;
    }
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

import { ApiService } from "./api.service";
import { Subject } from "rxjs";
import { LocationDataElement } from "./data.model";
import { StatsData } from "./stats.model";

export class LocationsService {
  locationsUpdated = new Subject();
  public statsData: StatsData[] = [
    {
      uniqueCountries: [],
      northernmostLocation: "None",
      southernmostLocation: "None",
      westernmostLocation: "None",
      easternmostLocation: "None"
    }
  ];
  private locations = [];
  private homes = [];
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
  arrClosestDistances: any = [];

  constructor(private api: ApiService) {}

  getLocations() {
    return [...this.locations];
  }

  getHomes() {
    return [...this.homes];
  }

  deleteLocation(locationName: string) {
    this.locations = this.locations.filter(
      locationObj => locationObj.loc !== locationName
    );
    this.getAllStats();
    this.locationsUpdated.next();
  }

  getLocationAPI(locationName: string) {
    fetch(this.api.apiURL(locationName))
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        this.setAPIData(data);
        this.newLocationEl = this.createLocationObj(locationName);
        this.locations.push(this.newLocationEl);
        this.getAllStats();
        this.getClosestToHome();
        this.locationsUpdated.next();
      })
      .catch(error => window.alert("Wrong location name"));
  }

  getHomeAPI(homeName: string) {
    fetch(this.api.apiURL(homeName))
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        this.setAPIData(data);
        this.newHomeEl = this.createLocationObj(homeName);
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

  // -- LOCATION OBJECT CONSTRUCTOR METHOD --

  createLocationObj(name: string) {
    return new LocationDataElement(
      name,
      this.lat,
      this.long,
      this.address,
      this.country,
      this.api.key.key
    );
  }

  // -- STATS METHODS --

  //MAIN

  private getAllStats() {
    if (!this.locations.length) {
      this.setStatsData([], "None", "None", "None", "None");
    } else {
      this.getUniqueCountries();
      this.getNorthernmostLocation();
      this.getSouthernmostLocation();
      this.getWesternnmostLocation();
      this.getEasternnmostLocation();
      this.setStatsData(
        this.uniqueCountries,
        this.northernMostLocation,
        this.southernMostLocation,
        this.westernMostLocation,
        this.easternMostLocation
      );
    }
  }

  //SETTER

  private setStatsData(
    uniqueCountries: string[],
    northernMostLocation: string,
    southernMostLocation: string,
    westernMostLocation: string,
    easternMostLocation: string
  ) {
    this.statsData = [
      {
        uniqueCountries: uniqueCountries,
        northernmostLocation: northernMostLocation,
        southernmostLocation: southernMostLocation,
        westernmostLocation: westernMostLocation,
        easternmostLocation: easternMostLocation
      }
    ];
  }

  //INDIVIDUAL STATS

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

  //CLOSEST TO HOME STATS

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
      this.arrClosestDistances.push(locationDistanceItem);

      const closesObj = this.arrClosestDistances.reduce((prev, current) => {
        return prev.distance < current.distance ? prev : current;
      });
      this.closestLocation = `${closesObj.name} away ${
        closesObj.distance
      } km in straight line from home location`;
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
    return Math.round(earthRadiusKm * c);
  }
}

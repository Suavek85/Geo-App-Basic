import { Component, OnInit } from "@angular/core";
import { LocationsService } from "../locations/location-block.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-stats-grid",
  templateUrl: "./stats-grid.component.html",
  styleUrls: ["./stats-grid.component.css"]
})
export class StatsGridComponent implements OnInit {
  uniqueCountries = [];
  allStatsData: any;
  closestToHome: string = 'None';
  arrClosestDistances: string[];
  private uniqueCountriesSubscription: Subscription;
  private allStatsSubscription: Subscription;
  private closestToHomeSubscription: Subscription;
  private arrClosestDistancesSubscription: Subscription;
 
  constructor(private locationsService: LocationsService) {}

  ngOnInit() {
    this.allStatsData = this.locationsService.statsData;
    this.allStatsSubscription = this.locationsService.locationsUpdated.subscribe(
      () => {
        this.allStatsData = this.locationsService.statsData;
      }
    );

    this.uniqueCountries = this.locationsService.uniqueCountries;
    this.uniqueCountriesSubscription = this.locationsService.locationsUpdated.subscribe(
      () => {
        this.uniqueCountries = this.locationsService.uniqueCountries;
      }
    );

    this.closestToHome = this.locationsService.closestLocation;
    this.closestToHomeSubscription = this.locationsService.locationsUpdated.subscribe(
      () => {
        this.closestToHome = this.locationsService.closestLocation;
      }
    );
    this.arrClosestDistances= this.locationsService.arrClosestDistances
    this.arrClosestDistancesSubscription = this.locationsService.locationsUpdated.subscribe(
      () => {
        this.arrClosestDistances= this.locationsService.arrClosestDistances
      }
    );

  }
 

  
}

import { Component, OnInit } from "@angular/core";
import { LocationsService } from "../location-block/location-block.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-stats-grid",
  templateUrl: "./stats-grid.component.html",
  styleUrls: ["./stats-grid.component.css"]
})
export class StatsGridComponent implements OnInit {
  uniqueCountries = [];
  private uniqueCountriesSubscription: Subscription;

  constructor(private locationsService: LocationsService) {}

  ngOnInit() {
    this.uniqueCountries = this.locationsService.uniqueCountries;
    this.uniqueCountriesSubscription = this.locationsService.locationsUpdated.subscribe(
      () => {
        this.uniqueCountries = this.locationsService.uniqueCountries;
      }
    );
  }

  getUniqueCountries() {
    console.log("function itself works");
    console.log([...this.uniqueCountries]);
  }
}
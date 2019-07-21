import { Component, OnInit, OnDestroy } from "@angular/core";
import { LocationsService } from "./location-block.service";
import { Subscription } from "rxjs";

@Component({
  selector: "location-block",
  templateUrl: "./location-block.component.html",
  styleUrls: ["./location-block.component.css"]
})


export class LocationBlockComponent implements OnInit, OnDestroy {
  panelOpenState = false;
  locationName = "";
  homeName = "";
  locations = [];
  long: number;
  lat: number;
  private locationsSubscription: Subscription;

  constructor(
    private locationsService: LocationsService,
  ) {}

  ngOnInit() {
    this.locations = this.locationsService.getLocations();
    this.locationsSubscription = this.locationsService.locationsUpdated.subscribe(
      () => {
        this.locations = this.locationsService.getLocations();
      }
    );
  }

  addLocation() {
    this.locationsService.getAPI(this.locationName);
    this.locationName = ' ';
  }

  addHome() {
    this.locationsService.getHomeAPI(this.homeName);
    this.homeName = ' ';
  }

  onRemoveLocation(locationName: string) {
    this.locations = this.locations.filter(l => l !== locationName);
  }

  ngOnDestroy() {
    this.locationsSubscription.unsubscribe();
  }
}

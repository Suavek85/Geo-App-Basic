import { Component, OnInit, OnDestroy } from "@angular/core";
import { LocationsService } from "./location-block.service";
import { Subscription } from "rxjs";
//import { Test } from "./data.model";
//import { DataService } from "./data.service";

@Component({
  selector: "location-block",
  templateUrl: "./location-block.component.html",
  styleUrls: ["./location-block.component.css"]
})


export class LocationBlockComponent implements OnInit, OnDestroy {
  panelOpenState = false;
  locationName = "";
  locations = [];
  long: number;
  lat: number;
  private locationsSubscription: Subscription;

  
  //users$: User[];

  constructor(
    private locationsService: LocationsService,
    //private dataService: DataService
  ) {}

  ngOnInit() {
    this.locations = this.locationsService.getLocations();
    this.locationsSubscription = this.locationsService.locationsUpdated.subscribe(
      () => {
        this.locations = this.locationsService.getLocations();
      }
    );

  

    //this.dataService.getUsers().subscribe(data => (this.users$ = data));
  }

  addLocation() {
    //this.locations.push(this.locationName);
    this.locationsService.addLocation(this.locationName);
    this.locationsService.getAPI(this.locationName);
 

    //TRYING OUT API IN ANGULAR WAY
    //this.long = this.users$.resourceSets[0].resources[0].geocodePoints[0].coordinates[0];
    //this.lat = this.users$.resourceSets[0].resources[0].geocodePoints[0].coordinates[1];
    //this.dataService.sendLocation(this.locationName);
    //this.dataService.getUsers().subscribe(data => (this.users$ = data));
    //console.log(this.long);
    //console.log(this.lat);
    //console.log(this.users$)
   
  }

  onRemoveLocation(locationName: string) {
    this.locations = this.locations.filter(l => l !== locationName);
  }

  ngOnDestroy() {
    this.locationsSubscription.unsubscribe();
  }
}

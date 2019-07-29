import { Component, OnInit, OnDestroy } from "@angular/core";
import { LocationsService } from "../location-block.service";
import { Subscription } from "rxjs";
import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "location-block",
  templateUrl: "./location-block.component.html",
  styleUrls: ["./location-block.component.css"]
})
export class LocationBlockComponent implements OnInit, OnDestroy {
  panelOpenState = false;
  locationName: string = "";
  homeName: string = "";
  locations = [];
  //homes = [];
  homes: Observable<any>;
  long: number;
  lat: number;
  private locationsSubscription: Subscription;
  private homesSubscription: Subscription;

  constructor(
    private locationsService: LocationsService,
    private db: AngularFirestore
  ) {}

  ngOnInit() {
    this.locations = this.locationsService.getLocations();
    this.locationsSubscription = this.locationsService.locationsUpdated.subscribe(
      () => {
        this.locations = this.locationsService.getLocations();
      }
    );

    //this.homes =
    this.db
      .collection("homes")
      .snapshotChanges()
      .subscribe(result => {
        for (const res of result) {
          console.log(res.payload.doc.data());
        }
      });

    //.subscribe( result => {
    //console.log(result);
    //} )

    //this.homes = this.locationsService.getHomes();
    //this.homesSubscription = this.locationsService.locationsUpdated.subscribe(
    //() => {
    // this.homes = this.locationsService.getHomes();
    //}
    //);
  }

  addLocation() {
    this.locationsService.getAPI(this.locationName);
    this.locationName = " ";
  }

  addHome() {
    this.locationsService.getHomeAPI(this.homeName);
    this.homeName = " ";
  }

  onRemoveLocation(locationName: string) {
    this.locations = this.locations.filter(l => l !== locationName);
  }

  ngOnDestroy() {
    this.locationsSubscription.unsubscribe();
  }
}

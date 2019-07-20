import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { LocationsService } from "../location-block/location-block.service";
import { MatDialog } from "@angular/material";
import { RemoveLocationAlert } from "./remove-alert.component";

@Component({
  selector: "location-item",
  templateUrl: "location.component.html",
  styleUrls: ["location.component.css"]
})
export class LocationItem implements OnInit {
  @Input() locationName: any;
  //@Output() locationClicked = new EventEmitter();
 
  constructor(
    private locationsService: LocationsService,
    private dialog: MatDialog
  ) {}
  ngOnInit() {}

  
  onLocationClick() {
    //this.locationClicked.emit();
    const dialogRef = this.dialog.open(RemoveLocationAlert, {data: {locationClicked: this.locationName}});
    dialogRef.afterClosed().subscribe(result => {
     result? this.locationsService.deleteLocation(this.locationName) : null
    })
  
  }
}

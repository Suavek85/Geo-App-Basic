import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { LocationsService } from "../location-block.service";
import { MatDialog } from "@angular/material";
import { RemoveLocationAlert } from "./remove-alert.component";

@Component({
  selector: "location-item",
  templateUrl: "location-item.component.html",
  styleUrls: ["location-item.component.css"]
})
export class LocationItem implements OnInit {
  @Input() locationObj: any;
  //@Output() locationClicked = new EventEmitter();
 
  constructor(
    private locationsService: LocationsService,
    private dialog: MatDialog
  ) {}
  ngOnInit() {}

  onLocationClick() {
    //this.locationClicked.emit();
    const dialogRef = this.dialog.open(RemoveLocationAlert, {data: {locationClicked: this.locationObj.loc}});
    dialogRef.afterClosed().subscribe(result => {
     result? this.locationsService.deleteLocation(this.locationObj.loc) : null
    })
  
  }
}

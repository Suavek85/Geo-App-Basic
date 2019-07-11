import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { LocationsService } from '../location-block/location-block.service';

@Component({
  selector: "location-item",
  templateUrl: "location.component.html",
  styleUrls: ["location.component.css"]
})
export class LocationItem implements OnInit {
  @Input() locationName: string;
  //@Output() locationClicked = new EventEmitter();

  constructor(private locationsService: LocationsService) {}
  ngOnInit() {}
  onLocationClick() {
    //this.locationClicked.emit();
    this.locationsService.deleteLocation(this.locationName)
  }
}

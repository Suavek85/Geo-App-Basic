import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "location-item",
  templateUrl: "location.component.html",
  styleUrls: ["location.component.css"]
})
export class LocationItem implements OnInit {
  @Input() locationName: string;
  @Output() locationClicked = new EventEmitter();

  constructor() {}
  ngOnInit() {}
  onLocationClick() {
    this.locationClicked.emit();
  }
}

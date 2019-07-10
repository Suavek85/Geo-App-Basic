import { Component } from "@angular/core";

@Component({
  selector: "main-block",
  templateUrl: "./main-block.component.html",
  styleUrls: ["./main-block.component.css"]
})
export class MainBlockComponent {
  locationName = "";
  locations = ["Warsaw", "Malaga"];
  addLocation() {
    this.locations.push(this.locationName);
  }
  onRemoveLocation(locationName: string) {
    console.log(locationName)
    this.locations = this.locations.filter(l => l !== locationName);
    console.log(this.locations)
  }
}

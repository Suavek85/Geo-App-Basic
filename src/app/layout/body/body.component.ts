import { Component } from "@angular/core";

@Component({
  selector: "app-body",
  templateUrl: "body.component.html",
  styleUrls: ["./body.component.css"]
})
export class BodyComponent {
  events: string[] = [];
  opened: boolean;
  appName: string = "";
  
  constructor() {
    setTimeout(() => {
      this.appName = "Beta";
    }, 1500);
  }

  
}

import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-nav-side-list",
  templateUrl: "./nav-side-list.component.html",
  styleUrls: ["./nav-side-list.component.css"]
})
export class NavSideListComponent implements OnInit {
  @Output() closeSideNav = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onClose() {
    this.closeSideNav.emit();
  }
}

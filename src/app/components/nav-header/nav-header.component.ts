import { AuthService } from "./../auth/auth.service";
import { Subscription } from "rxjs/Subscription";
import { Component, OnInit, EventEmitter, Output, OnDestroy } from "@angular/core";

@Component({
  selector: "app-nav-header",
  templateUrl: "./nav-header.component.html",
  styleUrls: ["./nav-header.component.css"]
})
export class NavHeaderComponent implements OnInit, OnDestroy {
  @Output() sideNavToggle = new EventEmitter<void>();
  isAuth: boolean = false;
  authSubscription: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  onToggleSidenav() {
    this.sideNavToggle.emit();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}

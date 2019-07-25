import { AuthService } from "./../auth/auth.service";
import {
  Component,
  OnInit,
  OnDestroy,
  EventEmitter,
  Output
} from "@angular/core";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-nav-side-list",
  templateUrl: "./nav-side-list.component.html",
  styleUrls: ["./nav-side-list.component.css"]
})
export class NavSideListComponent implements OnInit, OnDestroy {
  @Output() closeSideNav = new EventEmitter<void>();
  isAuth: boolean = false;
  authSubscription: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(
      authStatus => {
        this.isAuth = authStatus;
      }
    );
  }

  onClose() {
    this.closeSideNav.emit();
  }

  onSignOut() {
    this.onClose();
    this.authService.signOut();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}

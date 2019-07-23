
import { NgModule} from '@angular/core';
import { MaterialModule} from './material.module';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//PROVIDERS
import { LocationsService } from "./components/locations/location-block.service";
import { AuthService } from './components/auth/auth.service';

//DECLARATIONS
import { AppComponent } from './app.component';
import { BodyComponent } from './layout/body/body.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LocationBlockComponent } from './components/locations/location-block/location-block.component';
import { SignupComponent } from './components/auth/sign-up/sign-up.component';
import { LocationItem } from './components/locations/location-item/location-item.component';
import { RemoveLocationAlert } from './components/locations/location-item/remove-alert.component';

import { NavHeaderComponent } from "./components/nav-header/nav-header.component";
import { NavSideListComponent } from "./components/nav-side-list/nav-side-list.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SignInComponent } from "./components/auth/sign-in/sign-in.component";
import { LocationHomeComponent } from "./components/locations/location-home/location-home.component";
import { StatsGridComponent } from "./components/stats-grid/stats-grid.component";

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HomeComponent,
    FooterComponent,
    LocationBlockComponent,
    LocationItem,
    SignupComponent,
    NavHeaderComponent,
    NavSideListComponent,
    DashboardComponent,
    SignInComponent,
    RemoveLocationAlert,
    LocationHomeComponent,
    StatsGridComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [LocationsService, AuthService],
  bootstrap: [AppComponent],
  entryComponents: [RemoveLocationAlert]
})


export class AppModule { }

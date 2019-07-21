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
//import { DataService } from './components/location-block/data.service';
import { LocationsService } from "./components/location-block/location-block.service";

//DECLARATIONS
import { AppComponent } from './app.component';
import { BodyComponent } from './layout/body/body.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LocationBlockComponent } from './components/location-block/location-block.component';
import { StepperBlockComponent } from './components/stepper-block/stepper-block.component';
import { LocationItem } from './components/location/location.component';
import { RemoveLocationAlert } from './components/location/remove-alert.component';

import { NavHeaderComponent } from "./components/nav-header/nav-header.component";
import { NavSideListComponent } from "./components/nav-side-list/nav-side-list.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SignInComponent } from "./components/auth/sign-in/sign-in.component";
import { LocationHomeComponent } from "./components/location-home/location-home.component";

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HomeComponent,
    FooterComponent,
    LocationBlockComponent,
    LocationItem,
    StepperBlockComponent,
    NavHeaderComponent,
    NavSideListComponent,
    DashboardComponent,
    SignInComponent,
    RemoveLocationAlert,
    LocationHomeComponent
    
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
  providers: [LocationsService
   // ,DataService
  ],
  bootstrap: [AppComponent],
  entryComponents: [RemoveLocationAlert]
})


export class AppModule { }

import { NgModule} from '@angular/core';
import { MaterialModule} from './material.module';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LocationBlockComponent } from './components/location-block/location-block.component';
import { StepperBlockComponent } from './components/stepper-block/stepper-block.component';
import { LocationItem } from './components/location/location.component';
import { LocationsService } from "./components/location-block/location-block.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LocationBlockComponent,
    LocationItem,
    StepperBlockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule 
  ],
  providers: [LocationsService],
  bootstrap: [AppComponent]
})


export class AppModule { }

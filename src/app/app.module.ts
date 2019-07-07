import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { SidenavMainSimple } from './sidenav/sidenav.component';
import { SidenavInner } from './sidenav/sidenav-inner/sidenav-inner.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavMainSimple,
    SidenavInner
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppComponent } from './app.component';
import { MainBlockComponent } from './components/main-block/main-block.component';
import { HeaderComponent } from './layout/header/header.component';
//import { TestComponent } from './test/test.component';
//import { SidenavInner } from './test/sidenav-inner/sidenav-inner.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBlockComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

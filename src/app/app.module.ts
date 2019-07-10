import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


import { AppComponent } from './app.component';
import { MainBlockComponent } from './components/main-block/main-block.component';
import { HeaderComponent } from './layout/header/header.component';
import { SignupForm } from './components/signup-form/signup-form.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LocationItem } from './components/location/location.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBlockComponent,
    FooterComponent,
    SignupForm,
    LocationItem

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

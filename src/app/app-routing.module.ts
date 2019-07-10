import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LocationBlockComponent } from './components/location-block/location-block.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'locations', component: LocationBlockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

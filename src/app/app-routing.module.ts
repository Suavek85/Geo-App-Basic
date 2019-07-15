
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LocationBlockComponent } from './components/location-block/location-block.component';
import { StepperBlockComponent } from './components/stepper-block/stepper-block.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'locations', component: LocationBlockComponent},
  { path: 'stepper', component: StepperBlockComponent},
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

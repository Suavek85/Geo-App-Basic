
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StepperBlockComponent } from './components/stepper-block/stepper-block.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'stepper', component: StepperBlockComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'signin', component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

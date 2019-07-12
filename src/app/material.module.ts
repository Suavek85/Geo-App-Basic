import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatSelectModule,
  MatStepperModule
} from "@angular/material";

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatStepperModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatStepperModule
  ]
})
export class MaterialModule {}

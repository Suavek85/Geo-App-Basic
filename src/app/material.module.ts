import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatSelectModule
} from "@angular/material";

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class MaterialModule {}

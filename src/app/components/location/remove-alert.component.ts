import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA} from "@angular/material";

@Component({
  selector: "app-remove-alert",
  template: `
    <h1 mat-dialog-title>Are you sure you want to remove {{ passedData.locationClicked }} ?</h1>
    
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="true">Yes</button>
      <button mat-button [mat-dialog-close]="false">No</button>
    </mat-dialog-actions>
  `
})

export class RemoveLocationAlert {
    constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) {}
}

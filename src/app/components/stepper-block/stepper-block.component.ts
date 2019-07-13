import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, NgForm } from "@angular/forms";

@Component({
  selector: "app-stepper-block",
  templateUrl: "./stepper-block.component.html",
  styleUrls: ["./stepper-block.component.css"]
})
export class StepperBlockComponent implements OnInit {
  //isLinear = false;
  //firstFormGroup: FormGroup;
  maxDate;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);

    //this.firstFormGroup = this._formBuilder.group({
      //firstCtrl: ["", Validators.required],
      //secondCtrl: ["", Validators.required],
      //thirdCtrl: ["", Validators.required]
    //});
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}

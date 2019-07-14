import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, NgForm } from "@angular/forms";

@Component({
  selector: "app-stepper-block",
  templateUrl: "./stepper-block.component.html",
  styleUrls: ["./stepper-block.component.css"]
})
export class StepperBlockComponent implements OnInit {
  isLinear = true;
  secondFormGroup: FormGroup;
  maxDate;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ["", [Validators.minLength(3),Validators.maxLength(7) ]]
      }
    );
    console.log(this.secondFormGroup)
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}

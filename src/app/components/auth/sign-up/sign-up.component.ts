import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, NgForm } from "@angular/forms";
import { AuthService } from '../auth.service';

@Component({
  selector: "app-stepper-block",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignupComponent implements OnInit {
  isLinear = true;
  secondFormGroup: FormGroup;
  maxDate;

  constructor(private _formBuilder: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ["", [Validators.minLength(3),Validators.maxLength(12) ]]
      }
    );
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.authService.registerUser( {
      email: form.value.email,
      password: form.value.password
    })
  }
}

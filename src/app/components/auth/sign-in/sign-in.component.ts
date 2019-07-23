import { AuthService } from './../auth.service';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl("", {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl("", { validators: [Validators.required] })
    });
  }

  onSubmit() {
    console.log(this.loginForm);
    this.authService.signIn({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    })
  }
}

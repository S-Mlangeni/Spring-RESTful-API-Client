import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
/*"Formbuilder" module/object allows methods and other modules/objects
to be passed into the element properties. "Validators" module/object allows
form validators to be used to for a particular element property.*/
import { SignInService } from '../sign-in.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../app.component.css']
})
export class SignUpComponent implements OnInit {
  loader = false;

  constructor(private ourFB: FormBuilder, private ourservice: SignInService, private router: Router) { }

  ourForm = this.ourFB.group({
    username: ["", [Validators.required, Validators.minLength(3)]],
    /*second parameter specifies the method/s, validator methods/objects in this
    case, to be applied to the property*/
    phoneNumber: [ , [Validators.required, Validators.minLength(10)]],
    email: ["", Validators.required],
    password: ["", Validators.required],
  })

  submission() {
    this.loader = true;
    //console.log(this.ourForm.value);
    this.ourservice.signingup(this.ourForm.value).subscribe(
      response => this.handlingRegistrationResponse(response),
      error => this.handlingErrorResponse(error)
    );
  }

  handlingRegistrationResponse (response: any, loginpage: string = '/signin'):void {
    //console.log("You are Successful! ", response);
    this.router.navigate([loginpage]);

  }

  handlingErrorResponse (error: any) {
    this.loader = false;
    console.error("You have Error! ", error);
    setTimeout(() => {
      alert("Could not reach server. Please try again.");
    }, 1000);
  }

  ngOnInit(): void {
  }

}

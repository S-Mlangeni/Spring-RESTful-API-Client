import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
/*"Formbuilder" module/object allows methods and other modules/objects
to be passed into the element properties. "Validators" module/object allows
form validators to be used to for a particular element property.*/
import { SignInService } from '../sign-in.service'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../app.component.css']
})
export class SignInComponent implements OnInit {
  serverresult = [];
  loader = false;
  
  constructor(private ourFB: FormBuilder, private ourservice: SignInService, private router: Router) { }

  ourForm = this.ourFB.group({
    email: ["", Validators.required],
    password: ["", Validators.required],
  })

  submission(ourpage: string = '/firstpage'):void {
    //console.log(this.ourForm.value);
    this.loader = true;
    console.log(this.ourForm.value);
    this.ourservice.signingin(this.ourForm.value).subscribe(
      response => this.handlingresponse(response, ourpage),
      error => this.handlingErrorResponse(error)
    );
  }

  handlingresponse (response: any, ourpage: string) {
    this.loader = false;
    this.serverresult = response;
    console.log("You are Successful! ", this.serverresult);
    if (this.serverresult) {
      this.router.navigate([ourpage]);
    }
  }

  handlingErrorResponse (error: any) {
    this.loader = false;
    console.error("You have an Error! ", error);
    setTimeout(() => {
      alert("Could not reach server. Please try again.");
    }, 1000);
  }


  ngOnInit(): void {
  }

}

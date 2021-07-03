import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-first-page',
  template: `
    <h1>
      Thank You And Welcome
    </h1>
    <div><a routerLink="/signin" routerLinkActive="active">Sign In</a> | <a routerLink="/signup" routerLinkActive="active">Sign Up</a></div>
  `,
  styles: [
  ]
})
export class FirstPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

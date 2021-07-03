import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h1>
      Page Not Found!!!
    </h1>
    <div><a routerLink="/signin" routerLinkActive="active">Sign In</a> | <a routerLink="/signup" routerLinkActive="active">Sign Up</a></div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

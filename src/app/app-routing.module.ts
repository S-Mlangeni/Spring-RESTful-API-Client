import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthenticateGuard } from "./authenticate.guard";

const routes: Routes = [
  {path: "", redirectTo: "/signin", pathMatch: "full"},
  {path: "signin", component: SignInComponent},
  {path: "signup", component: SignUpComponent},
  {path: "firstpage", component: FirstPageComponent, canActivate: [AuthenticateGuard]},
  /* The canActivate method is run before the component is returned for the path.
  When the canActivate property returns "true", the component will be returned. Component
  will be returned for a "false" value. */
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

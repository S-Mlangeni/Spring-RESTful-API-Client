import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  private search_api_url = "https://spring-server1.herokuapp.com/search";//"http://localhost:7000/search";
  private entry_api_url = "https://spring-server1.herokuapp.com/entry";//"http://localhost:7000/entry";

  constructor(private http: HttpClient) { }

  signingin(SignInData: any) {
    return this.http.post(this.search_api_url, SignInData);
  }

  signingup(SignUpData: any) {
    return this.http.post(this.entry_api_url, SignUpData);
  }
}

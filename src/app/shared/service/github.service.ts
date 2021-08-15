import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  BASE_URL = "https://api.github.com";

  constructor(private http: HttpClient) { }

  getUserInformation(username: string) {

    let headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github.v3+json',
    }

    let requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.get(`${this.BASE_URL}/users/${username}`, requestOptions).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      },
    );
  }
}
/**
 *
 * Login 15 Ağustos Token -> denizacdray2456 // 24 saat
 *
 *
 * */

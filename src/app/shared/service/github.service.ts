import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Github} from '../model/github';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  BASE_URL = "https://api.github.com";

  constructor(private http: HttpClient) {
  }

  getUserInformation(username: string): Observable<Github> {

    let requestURL = `${this.BASE_URL}/users/${username}`;

    let headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github.v3+json',
    }

    let requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.get<Github>(requestURL, requestOptions);
  }
}

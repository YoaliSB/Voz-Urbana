import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
//import {Client} from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  getUser():Observable<any>{
    // Make the HTTP request:
    return this.http.get('http://localhost:4200/assets/users.json').pipe(
      map(function(res){
        return res;
      })
    );
  }
}

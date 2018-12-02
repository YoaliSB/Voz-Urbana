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
    //Make the HTTP request:
    var headers_object = new HttpHeaders();
    headers_object.append("Authorization", "Basic " + btoa("admin:admin"));
    const httpOptions = {
      headers: headers_object
    };
    return this.http.get('http://127.0.0.1:3000/users',httpOptions).pipe(
      map(function(res){
        return res;
      })
    );
  }
}

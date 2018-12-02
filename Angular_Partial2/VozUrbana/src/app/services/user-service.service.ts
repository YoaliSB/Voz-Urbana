import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {User} from '../models/user';

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
    return this.http.get('http://127.0.0.1:3000/usuarios', this.httpOptions).pipe(
      map(function(res){
        return res;
      })
    );
  }

  postUser(user : User):Observable<any>{
    return this.http
      .post('http://127.0.0.1:3000/usuarios', user, this.httpOptions).pipe(
        map(function(res){
          return res;
        }));
  }
}

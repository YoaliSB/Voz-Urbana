import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  USER_URL = 'http://127.0.0.1:3000/usuarios';
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
    return this.http.get(this.USER_URL, this.httpOptions).pipe(
      map(function(res){
        return res;
      })
    );
  }

  getUserById(mail : String):Observable<any>{
    return this.http.get(this.USER_URL + '/' + mail, this.httpOptions).pipe(
      map(function(res){
        return res;
      })
    );
  }

  postUser(user : User):Observable<any>{
    return this.http
      .post(this.USER_URL, user, this.httpOptions).pipe(
        map(function(res){
          return res;
        }));
  }

  patchUser(user : User):Observable<any>{
    return this.http
      .patch(this.USER_URL + '/' + user.mail, user, this.httpOptions).pipe(
        map(function(res){
          return res;
        }));
  }

  deleteUser(mail : String):Observable<any>{
    return this.http
      .delete(this.USER_URL + '/' + mail, this.httpOptions).pipe(
        map(function(res){
          return res;
        }));
  }
}

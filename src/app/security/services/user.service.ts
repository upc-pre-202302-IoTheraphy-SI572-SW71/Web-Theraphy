import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl='http://localhost:8080/api/v1'

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any>{
    const credentials = {username, password};
    return this.http.post(`${this.apiUrl}/auth/authentication`, credentials).pipe(
      tap((response: any) => {
        console.log('Response from server:', response); // Verifica la estructura de la respuesta
        if (response.access_Token) { // Accede a access_Token
          localStorage.setItem('jwtToken', response.access_Token); // Almacena access_Token en localStorage
        }
      }),
      catchError((error: any) => {
        console.error('Error from server:', error);
        return throwError(error);
      })
    );
  }

  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/registration`, user).pipe(
      tap((response: any) => {
        console.log('Response from server:', response);
        if (response.access_Token) {
          localStorage.setItem('jwtToken', response.access_Token);
        }
      })
    );
  }

  logout(): void{
    localStorage.removeItem('jwtToken');
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('jwtToken')!;
    return !!token;
  }

  /*getUserInfo(): Observable<User>{
    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }*/

}

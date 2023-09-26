import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  // Resource Endpoint
  basePath='https://api-iotheraphy-production.up.railway.app/api/v1'


  // Common options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default error handling
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    // Return Observable with Error Message to Client
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

  // Create Resource
  create(item: any, route: any): Observable<T> {
    return this.http.post<T>(
      `${this.basePath}/${route}`,
      JSON.stringify(item),
      this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Get Resource by id
  getById(route: any, id: any): Observable<T> {
    return this.http.get<T>(
      `${this.basePath}/${route}/${id}`,
      this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Get All Resources
  getAll(route: any): Observable<T> {
    return this.http.get<T>(`${this.basePath}/${route}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Delete Resource
  delete(route: any, id: any) {
    return this.http.delete(`${this.basePath}/${route}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Update Resource
  update(route: any, id: any, item: any): Observable<T> {
    return this.http.put<T>(`${this.basePath}/${route+id}`,
      JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getAll1(route: any): Observable<any> {
    return this.http.get(`${this.basePath}/${route}`,this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }
}

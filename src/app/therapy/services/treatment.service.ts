import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Therapy} from "../model/therapy";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";
import {Treatment} from "../model/treatment";

@Injectable({
  providedIn: 'root'
})
export class TreatmentService extends BaseService<Therapy> {

  endPoint = '/treatments';

  constructor(http: HttpClient) {
    super(http);
    this.basePath += this.endPoint;
  }
  getTreatmentByDateAndTherapyId(therapyId: number, date: string): Observable<Treatment>{

    const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {
      throw new Error('Token JWT no encontrado en el localStorage.');
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${jwtToken}`
    });

    //return this.http.post<createConsultation>(createConsultationUrl,consultation, {headers} )

    return this.http.get<Treatment>(
        `${this.basePath}/byDate/${date}/TherapyId/${therapyId}`,
        {headers})
        .pipe(
            retry(2),
            catchError(this.handleError),  );
  }

}
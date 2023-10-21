import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {CreateConsultation} from "../model/createConsultation";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";
import {Consultation} from "../model/Consultation";
import {Review} from "../../social/model/review";



@Injectable({
  providedIn: 'root'
})
export class ConsultationService extends BaseService<Consultation>{

  endPoint = '/consultations';

  constructor(http: HttpClient) {
    super(http);
    this.basePath += this.endPoint;
  }


  createConsultation(consultation: CreateConsultation): Observable<CreateConsultation>{
    const createConsultationUrl = `${this.basePath}`;
    const jwtToken = localStorage.getItem('jwtToken');


    if (!jwtToken) {
      throw new Error('Token JWT no encontrado en el localStorage.');
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${jwtToken}`
    });


    return this.http.post<CreateConsultation>(createConsultationUrl,consultation, {headers} )

  }

  getByPatientId(patientId: number): Observable<Consultation> {
    const getConsultationsByPatientIdUrl = `${this.basePath}/byPatientId/${patientId}`;
    const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {
      throw new Error('Token JWT no encontrado en el localStorage.');
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${jwtToken}`
    });

    return this.http.get<Consultation>(getConsultationsByPatientIdUrl, { headers })
      .pipe(
        retry(2),
        catchError(this.handleError));
  }



}

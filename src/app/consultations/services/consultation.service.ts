import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Consultation} from "../model/consultation";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConsultationService extends BaseService<Consultation>{

  endPoint = '/consultations';

  constructor(http: HttpClient) {
    super(http);
    this.basePath += this.endPoint;
  }


  createConsultation(consultation: Consultation): Observable<Consultation>{
    const createConsultationUrl = `${this.basePath}`;
    const jwtToken = localStorage.getItem('jwtToken');


    if (!jwtToken) {
      throw new Error('Token JWT no encontrado en el localStorage.');
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${jwtToken}`
    });


    return this.http.post<Consultation>(createConsultationUrl,consultation, {headers} )

  }



}

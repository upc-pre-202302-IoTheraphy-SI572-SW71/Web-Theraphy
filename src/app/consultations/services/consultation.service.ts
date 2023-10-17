import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {createConsultation} from "../model/createConsultation";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConsultationService extends BaseService<createConsultation>{

  endPoint = '/consultations';

  constructor(http: HttpClient) {
    super(http);
    this.basePath += this.endPoint;
  }


  createConsultation(consultation: createConsultation): Observable<createConsultation>{
    const createConsultationUrl = `${this.basePath}`;
    const jwtToken = localStorage.getItem('jwtToken');


    if (!jwtToken) {
      throw new Error('Token JWT no encontrado en el localStorage.');
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${jwtToken}`
    });


    return this.http.post<createConsultation>(createConsultationUrl,consultation, {headers} )

  }



}

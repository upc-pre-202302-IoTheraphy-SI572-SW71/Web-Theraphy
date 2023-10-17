import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {createPatient} from "../model/CreateUsers/createPatient";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/CreateUsers/user";

@Injectable({
  providedIn: 'root'
})
export class PatientService extends BaseService<createPatient>{
  endPoint = '/patients/registration-patient';

  constructor(http: HttpClient) {
    super(http);
    this.basePath += this.endPoint;
  }

  createPatient(patient: createPatient): Observable<createPatient> {
    const createPatientUrl = `${this.basePath}`;
    const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {
      throw new Error('Token JWT no encontrado en el localStorage.');
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${jwtToken}`
    });
    return this.http.post<createPatient>(createPatientUrl, patient, { headers });
  }
}

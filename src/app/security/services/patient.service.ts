import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Patient} from "../model/CreateUsers/patient";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/CreateUsers/user";

@Injectable({
  providedIn: 'root'
})
export class PatientService extends BaseService<Patient>{
  endPoint = '/patients/registration-patient';

  constructor(http: HttpClient) {
    super(http);
    this.basePath += this.endPoint;
  }

  createPatient(patient: Patient): Observable<Patient> {
    const createPatientUrl = `${this.basePath}`;
    const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {
      throw new Error('Token JWT no encontrado en el localStorage.');
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${jwtToken}`
    });
    return this.http.post<Patient>(createPatientUrl, patient, { headers });
  }
}

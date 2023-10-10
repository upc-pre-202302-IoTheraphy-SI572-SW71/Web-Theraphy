import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Patient} from "../model/patient";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PatientService{

  private apiUrl='http://localhost:8080/api/v1'

  constructor(private http: HttpClient) { }
  createPatient(patient: Patient): Observable<Patient> {
    const createPatientUrl = `${this.apiUrl}/registration-patient`;
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

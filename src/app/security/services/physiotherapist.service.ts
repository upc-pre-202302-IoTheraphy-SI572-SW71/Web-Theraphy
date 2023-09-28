import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Physiotherapist} from "../model/physiotherapist";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Patient} from "../model/patient";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhysiotherapistService{

  private apiUrl='http://localhost:8080/api/v1'

  constructor(private http: HttpClient) { }
  createPhysiotherapist(physiotherapist: Physiotherapist): Observable<Patient> {
    const createPatientUrl = `${this.apiUrl}/registration-physiotherapist`;
    const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {
      throw new Error('Token JWT no encontrado en el localStorage.');
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${jwtToken}`
    });
    return this.http.post<Patient>(createPatientUrl, physiotherapist, { headers });
  }
}

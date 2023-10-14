
import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Physiotherapist} from "../model/CreateUsers/physiotherapist";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Patient} from "../model/CreateUsers/patient";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhysiotherapistService extends BaseService<Physiotherapist>{

  endPoint = '/physiotherapists';

  constructor(http: HttpClient) {
    super(http);
    this.basePath += this.endPoint;
  }

  createPhysiotherapist(physiotherapist: Physiotherapist): Observable<Patient> {
    const createPatientUrl = `${this.basePath}/registration-physiotherapist`;
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


import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {createPhysiotherapist} from "../model/CreateUsers/createPhysiotherapist";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {createPatient} from "../model/CreateUsers/createPatient";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhysiotherapistService extends BaseService<createPhysiotherapist>{

  endPoint = '/physiotherapists';

  constructor(http: HttpClient) {
    super(http);
    this.basePath += this.endPoint;
  }

  createPhysiotherapist(physiotherapist: createPhysiotherapist): Observable<createPatient> {
    const createPatientUrl = `${this.basePath}/registration-physiotherapist`;
    const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {
      throw new Error('Token JWT no encontrado en el localStorage.');
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${jwtToken}`
    });
    return this.http.post<createPatient>(createPatientUrl, physiotherapist, { headers });
  }
}

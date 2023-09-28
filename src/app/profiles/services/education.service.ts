import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {MedicalHistory} from "../../../../../../../Ciclo 7/Soluciones_IoT/Web-Theraphy/src/app/profiles/model/medical-history";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EducationService extends BaseService<MedicalHistory> {

  endPoint = '/educations';

  constructor(http: HttpClient) {
    super(http);
    this.basePath += this.endPoint;
  }
}

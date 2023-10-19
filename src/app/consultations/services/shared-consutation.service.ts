import { Injectable } from '@angular/core';
import {CreateConsultation} from "../model/createConsultation";

@Injectable({
  providedIn: 'root'
})
export class SharedConsultationService {

  consultation!: CreateConsultation;

  constructor() { }


  setConsultation(consultation: CreateConsultation){
    this.consultation = consultation;
  }

  getConsultation(){
    return this.consultation;
  }

}

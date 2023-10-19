import { Injectable } from '@angular/core';
import {Consultation} from "../model/consultation";

@Injectable({
  providedIn: 'root'
})
export class SharedConsutationService {

  consultation!: Consultation;

  constructor() { }


  setConsultation(consultation: Consultation){
    this.consultation = consultation;
    localStorage.setItem('consultationData', JSON.stringify(this.consultation));
  }

  getConsultation(){
    return this.consultation;
  }

}

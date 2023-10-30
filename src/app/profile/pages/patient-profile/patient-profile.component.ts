import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Patient} from "../../../security/model/patient";
import {Diagnosis} from "../../../home/model/diagnosis";
import {PatientService} from "../../../security/services/patient.service";
import {DiagnosisService} from "../../../home/services/diagnosis.service";
import {MedicalHistory} from "../../../health-record-expertise/model/medical-history/medical-history";
import {MedicalHistoryService} from "../../../health-record-expertise/services/medical-history.service";

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent {
  patientLoggedId =0;
  patient$: Observable<Patient> | undefined
  medicalHistory$: Observable<MedicalHistory> | undefined
  lastDiagnosis$: Observable<Diagnosis> | undefined

  constructor(private patientService: PatientService, private diagnosisService: DiagnosisService, private medicalHistoryService: MedicalHistoryService) {

  }

  ngOnInit(): void {
    this.patient$= this.patientService.getPatientLogged();
    this.lastDiagnosis$ = this.diagnosisService.getLastDiagnosis();

    this.patientService.getPatientLogged().subscribe((response: any)=>{
      this.patientLoggedId=response.id
      console.log(this.patientLoggedId)
    })

    this.medicalHistoryService.getByPatientId(1).subscribe(
      (response: any) => {
        this.medicalHistory$ = response.content;
        console.log(response);
      },
      (error: any) => {
        console.error('Error fetching medical history', error);
      }
    );

  }

  goBack() {
    window.history.back();
  }
}

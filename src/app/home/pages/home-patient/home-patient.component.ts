import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Patient} from "../../../security/model/patient";
import {PatientService} from "../../../security/services/patient.service";
import {Consultation} from "../../../consultations/model/Consultation";
import {ConsultationService} from "../../../consultations/services/consultation.service";
import {Diagnosis} from "../../model/diagnosis";
import {DiagnosisService} from "../../services/diagnosis.service";
import {Review} from "../../../social/model/review";
import {Appointment} from "../../../therapy/model/appointment";
import {AppointmentService} from "../../../therapy/services/appointment.service";


  @Component({
    selector: 'app-home-patient',
    templateUrl: './home-patient.component.html',
    styleUrls: ['./home-patient.component.css']
  })
  export class HomePatientComponent implements OnInit {
    disabled = false;
    max = 100;
    min = 0;
    showTicks = false;
    step = 1;
    thumbLabel = true;
    value = 18;
    patientLoggedId: number = 0
    patient$: Observable<Patient> | undefined
    consultations: Consultation[]=[];
    lastConsultation!: Consultation | undefined
    lastDiagnosis$: Observable<Diagnosis> | undefined
    appointments: Appointment[]=[];
    /*firstAppointment!: Appointment | undefined*/
    firstThreeAppointments$: Appointment []=[]


   /* physiotherapists: Physiotherapist[]=[];
    treatments: Treatment[]=[];
    myTreatments: TreatmentsByPatient[]=[];
    appointments: Appointments[]=[];
    currentUser: number;
  */
    constructor(private patientService: PatientService, private consultationService: ConsultationService, private diagnosisService: DiagnosisService, private appointmentService: AppointmentService) {

    }

    ngOnInit(): void {
      this.patient$= this.patientService.getPatientLogged();


      this.patientService.getPatientLogged().subscribe((response: any)=>{

        this.patientLoggedId=response.id
        console.log(this.patientLoggedId)
        this.getFirstThreeAppointments(this.patientLoggedId)

        this.getLastConsultation(this.patientLoggedId)
      })

      this.lastDiagnosis$ = this.diagnosisService.getLastDiagnosis();





      /*this.getAllPhysiotherapists();
      this.getAllTreatments();
      this.getAllMyTreatments();
      this.getAllAppointments();*/
    }

    getLastConsultation(patientId: number){
      this.consultationService.getByPatientId(patientId).subscribe((response: any) => {
        this.consultations = response.content;

        if(this.consultations.length > 0) {
          this.lastConsultation = this.consultations.pop();
        }
      })
    }

    getFirstThreeAppointments(patientId: number){
      this.appointmentService.getUpcomingAppointments(patientId).subscribe((response:any)=>{
        this.appointments = response.content;

        if(this.appointments.length > 0) {
          this.firstThreeAppointments$ = this.appointments.splice(0,3);
          // this.firstAppointment = this.appointments.pop();
        }


      })
    }

    /*getLastDiagnosis(patientId: number){
      this.consultationService.getByPatientId(patientId).subscribe((response: any) => {
        this.diagnosis = response.content;

        if(this.diagnosis.length > 0) {
          this.lastDiagnosis = this.diagnosis.pop();
        }
      })
    }*/


  /*
    getAllPhysiotherapists(){
      this.physiotherapistsService.getAll().subscribe((response: any) =>{
        this.physiotherapists = response.content;
      })
    }

    getAllTreatments(){
      this.treatmentsService.getAll().subscribe((response:any)=>{
        this.treatments = response.content;
      })
    }

    getAllMyTreatments(){
      this.myTreatmentsService.getAll().subscribe((response: any)=>{
        this.myTreatments = response.content;
      })
    }*/
    protected readonly frameElement = frameElement;
  }

import { Component } from '@angular/core';
import {Physiotherapist} from "../../../security/model/physiotherapist";
import {PhysiotherapistService} from "../../../security/services/physiotherapist.service";
import {Router} from "@angular/router";
import {Consultation} from "../../model/Consultation";
import {ConsultationService} from "../../services/consultation.service";
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import {DiagnosisDialogComponent} from "../../../shared/components/diagnosis-dialog/diagnosis-dialog.component";


@Component({
  selector: 'app-consultations-list',
  templateUrl: './consultations-list.component.html',
  styleUrls: ['./consultations-list.component.css']
})
export class ConsultationsListComponent {
//value: any;

  consultations: Consultation[]=[];
  originals: Consultation[]=[];
  upcomingButtonActive: boolean;
  pastButtonActive: boolean;

  constructor(private consultationService: ConsultationService, private router: Router,private dialog: MatDialog) {
    this.upcomingButtonActive=false;
    this.pastButtonActive=false
  }

  ngOnInit(): void {
    this.getAllMyConsultations()
  }

  getAllMyConsultations(){
    this.consultationService.getByPatientId(1).subscribe((response: any) =>{
      this.consultations = response.content;
      this.originals = response.content;
    })
  }

  filterConsultations(searchName: string) {
    this.consultations = this.originals;
    this.consultations = this.consultations.filter(consultation => {
      return consultation.physiotherapist.user.firstname.toLowerCase().includes(searchName.toLowerCase()) ||
        consultation.physiotherapist.user.lastname.toLowerCase().includes(searchName.toLowerCase());
    });

  }

  viewDetailsById(id: number){
    this.router.navigate([`/physiotherapist-profile/${id}`]);
  }

  filterUpcomingConsultations(){
    if(this.upcomingButtonActive) {
      this.upcomingButtonActive = false;
      this.consultations = this.originals
    }else{
      this.upcomingButtonActive=true;
      this.pastButtonActive=false;

      this.consultations=this.originals;
      this.consultations=this.consultations.filter(consultation => {
        return !consultation.done;
      })
    }



  }


  filterPastConsultations(){

    if(this.pastButtonActive){
      this.pastButtonActive=false;
      this.consultations = this.originals

    }else{
      this.pastButtonActive=true;
      this.upcomingButtonActive=false;

      this.consultations=this.originals;
      this.consultations=this.consultations.filter(consultation => {
        return consultation.done;
      })
    }


  }

  openDiagnosisDialog(consultation: any) {
    this.dialog.open(DiagnosisDialogComponent, {
      data: {
        topic: consultation.topic,
        date: consultation.date,
        hour: consultation.hour,
        physiotherapist_full_name: consultation.physiotherapist.user.firstname+ " "+consultation.physiotherapist.user.lastname,
        diagnosis: consultation.diagnosis,
      },
    });
  }


}

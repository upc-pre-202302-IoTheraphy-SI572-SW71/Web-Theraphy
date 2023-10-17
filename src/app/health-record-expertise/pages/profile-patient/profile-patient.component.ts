import { Component, OnInit } from '@angular/core';
import {PatientsService} from "../../../security/services/patients.service";
import {createPatient} from "../../../security/model/CreateUsers/createPatient";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profile-patient',
  templateUrl: './profile-patient.component.html',
  styleUrls: ['./profile-patient.component.css']
})
export class ProfilePatientComponent implements OnInit {

  patients: createPatient[]=[];
  currentUser: number;
  constructor(private patientsService: PatientsService) {
    this.currentUser = Number(sessionStorage.getItem("userId"));

  }

  ngOnInit(): void {
   this.patientsService.getItemByField("userId",this.currentUser).subscribe((response:any)=>{
     this.patients.push(response);
   });
  }

}

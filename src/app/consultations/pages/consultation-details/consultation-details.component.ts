import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Physiotherapist} from "../../../security/model/physiotherapist";
import {PhysiotherapistService} from "../../../security/services/physiotherapist.service";
import {ConsultationService} from "../../services/consultation.service";
import {Consultation} from "../../model/consultation";

@Component({
  selector: 'app-consultation-details',
  templateUrl: './consultation-details.component.html',
  styleUrls: ['./consultation-details.component.css']
})
export class ConsultationDetailsComponent implements OnInit{
  physiotherapist!: Physiotherapist;
  physiotherapistId! : number;
  consultation!: Consultation;
  constructor(private route: ActivatedRoute, private physiotherapistService: PhysiotherapistService, private consultationService: ConsultationService) {
    this.route.params.subscribe(params => {
      this.physiotherapistId = +params['id']; // Convierte el valor a número si es necesario
      // Utiliza el ID para cargar los detalles del fisioterapeuta con ese ID
    });
  }


  ngOnInit(): void {
    this.physiotherapistService.getById(this.physiotherapistId).subscribe((response: any)=>{
      this.physiotherapist = response;
    })
    this.consultationService.getConsultationByPhysiotherapistId(this.physiotherapistId).subscribe((response: any)=>{
      this.consultation = response;
      console.log(this.consultation)
    })
  }

  // getConsultationByPhysiotherapistId(){
  //
  //
  // }

}

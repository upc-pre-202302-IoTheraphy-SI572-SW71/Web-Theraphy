import {Component, OnInit} from '@angular/core';
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Consultation} from "../../model/consultation";
import {Physiotherapist} from "../../../security/model/physiotherapist";
import {ConsultationService} from "../../services/consultation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../../security/model/CreateUsers/user";
import {PhysiotherapistService} from "../../../security/services/physiotherapist.service";


@Component({
  selector: 'app-book-consultation',
  templateUrl: './book-consultation.component.html',
  styleUrls: ['./book-consultation.component.css']
})
export class BookConsultationComponent implements OnInit{
  hours: number[] = Array.from({ length: 13 }, (_, i) => i + 7); // Array de horas (0-23)
  minutes: number[] = [0, 15, 20, 30, 35, 45, 50]; // Array de minutos (0-59)

  selectedHour: number = 7;
  selectedMinute: number = 0;

  schedule: string = "";

  selectedDate: Date | null = null;

  // hourSelected: boolean = false;

  selectedPeriod: string = "";

  isSundaySelected: boolean = false;

  consultation: Consultation = new Consultation(
    0,
    false,
    '',
    '',
    '',
    '',
    '',
    1
  );

  // user!: User;

  consultationForm: FormGroup;

  physiotherapist!: Physiotherapist;
  physiotherapistId: number = 0;








  constructor(private consultationService: ConsultationService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private physiotherapistService: PhysiotherapistService) {
    this.consultationForm = this.fb.group({
      date: ['', Validators.required],
      hour: ['', Validators.required],
      place: ['', Validators.required],
      minute: ['', Validators.required],
      topic: ['', Validators.required],
    });
    this.route.params.subscribe(params => {
      this.physiotherapistId = +params['id']; // Convierte el valor a número si es necesario
      // Utiliza el ID para cargar los detalles del fisioterapeuta con ese ID
      this.consultationForm.patchValue({ physiotherapistId: this.physiotherapistId });
    });

  }
  goBack() {
    window.history.back();
  }
//juntar el hour y el minute

  //el id lo recibo de la otra vista
  onSubmit(){
    if(this.consultationForm.valid){
      this.consultation.date = this.schedule;
      if(this.selectedHour<10){
        this.consultation.hour = "0" + this.selectedHour.toString() + ":" ;
        if(this.selectedMinute<10){
          this.consultation.hour += "0" + this.selectedMinute.toString();
        }else {
          this.consultation.hour += this.selectedMinute.toString();
        }
      }else if(this.selectedMinute<10) {
          this.consultation.hour = this.selectedHour.toString() + ":" + "0" + this.selectedMinute.toString();
      }else{
        this.consultation.hour = this.selectedHour.toString() + ":" + this.selectedMinute.toString();
      }
      this.consultation.place = this.consultationForm.value.place;
      this.consultation.topic = this.consultationForm.value.topic;

      this.createConsultation(this.consultation);

    }
  }

  onDateChange(selectedDate: Date): void {
    console.log(selectedDate.getDate().toString());
    console.log((selectedDate.getMonth() + 1).toString());
    console.log(selectedDate.getFullYear().toString());
    this.schedule = selectedDate.getFullYear().toString() + "-" + (selectedDate.getMonth() + 1).toString() + "-" + selectedDate.getDate().toString();
    // this.stringSchedule = this.consultationForm.get('date')?.setValue(this.schedule);

    console.log('la fecha que eligio su cita es: ' + this.schedule);
    // Verifica si la fecha seleccionada es un domingo (0 = Domingo, 1 = Lunes, ..., 6 = Sábado)
    if (selectedDate) {
      const dayOfWeek = selectedDate.getDay();
      this.isSundaySelected = dayOfWeek === 0;
    }
  }

  enviarDatos() {

  }

  createConsultation(consultation: Consultation){
    this.consultationService.createConsultation(consultation).subscribe((response:any) => {
      console.log("Appointment created")
    })
    // this.sharedService.setPhysiotherapist(this.physiotherapist);
    this.router.navigate([`/consultation-details/physiotherapist/${this.physiotherapist.id}`]);
  }
  ngOnInit(): void {
    // this.getPhysiotherapistById(this.physiotherapistId);
    this.physiotherapistService.getById(this.physiotherapistId).subscribe((response: any)=>{
      this.physiotherapist = response;
      console.log(response);
    })

  }

  // getPhysiotherapistById(){
  //   this.physiotherapistService.getById(this.physiotherapistId).subscribe((response: any)=>{
  //     this.physiotherapist = response.content;
  //   })
  // }




  setPeriod() {
    this.selectedPeriod = this.selectedHour < 12 ? "AM" : "PM";
  }







}

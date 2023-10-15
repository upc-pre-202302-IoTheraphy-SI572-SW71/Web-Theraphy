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
  isBeforeDate: boolean = false;
  // selectedDate: Date = new Date();

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
      this.physiotherapistId = +params['id'];
      this.consultationForm.patchValue({ physiotherapistId: this.physiotherapistId });
    });

  }
  goBack() {
    window.history.back();
  }

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
  isBeforeHour: boolean = false;
  isBeforeMinute: boolean = false;
  // currentData2!: Date;
  onDateChange(selectedDate: Date): void {
    console.log(selectedDate.getDate().toString());
    console.log((selectedDate.getMonth() + 1).toString());
    console.log(selectedDate.getFullYear().toString());
    this.schedule = selectedDate.getFullYear().toString() + "-" + (selectedDate.getMonth() + 1).toString() + "-" + selectedDate.getDate().toString();


    console.log('la fecha que eligio su cita es: ' + this.schedule);

    if (selectedDate) {
      const dayOfWeek = selectedDate.getDay();
      this.isSundaySelected = dayOfWeek === 0;

      const currentDate = new Date();
      // currentDate.setHours(0, 0, 0, 0);
      if (selectedDate < currentDate) {
        this.isBeforeDate = true;
      } else if(selectedDate == currentDate) {
        this.isBeforeDate = true;
        // const currentDate = new Date();
        // console.log("la hora es: " + this.selectedHour);
        // console.log("The hour: " + currentDate.getHours());
        // if(this.selectedHour < currentDate.getHours()){
        //   this.isBeforeHour = true;
        //   console.log("el minuto es: " + this.selectedMinute);
        //   console.log("The minute: " + currentDate.getMinutes());
        //   if(this.selectedMinute < currentDate.getMinutes()){
        //     this.isBeforeMinute = true;
        //   }
        //   else{
        //     this.isBeforeMinute = false;
        //   }
        // }else{
        //   this.isBeforeHour = false;
        // }
      }
      else{
        this.isBeforeDate = false;
      }
      console.log("Select date: " + selectedDate);
      console.log("current date: " + currentDate);
    }

  }


  onHourChange(){
    const currentDate = new Date();
    console.log("la hora es: " + this.selectedHour);
    console.log("The hour: " + currentDate.getHours());
    if(this.selectedHour < currentDate.getHours()){
      this.isBeforeHour = true;
    }
    // this.isBeforeHour = this.selectedHour < currentDate.getHours();

  }

  onHourMinute(){
    const currentDate = new Date();
    console.log("el minuto es: " + this.selectedMinute);
    console.log("The minute: " + currentDate.getMinutes());
    if(this.selectedMinute < currentDate.getMinutes()){
      this.isBeforeMinute = true;
    }
    // this.isBeforeMinute = this.selectedMinute < currentDate.getMinutes();

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










}

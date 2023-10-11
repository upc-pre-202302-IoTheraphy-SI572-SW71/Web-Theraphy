import { Component } from '@angular/core';
import {MatDatepickerInputEvent} from "@angular/material/datepicker";

@Component({
  selector: 'app-book-consultation',
  templateUrl: './book-consultation.component.html',
  styleUrls: ['./book-consultation.component.css']
})
export class BookConsultationComponent {
  hours: number[] = Array.from({ length: 13 }, (_, i) => i + 7); // Array de horas (0-23)
  minutes: number[] = [0, 15, 20, 30, 35, 45, 50]; // Array de minutos (0-59)

  selectedHour: number = 7; // Hora seleccionada inicialmente
  selectedMinute: number = 0;

  selectedDate: Date | null = null;

  hourSelected: boolean = false;

  selectedPeriod: string = ""; // Inicialmente vacío

// ...

// Función para determinar "AM" o "PM" según la hora seleccionada
  setPeriod() {
    this.selectedPeriod = this.selectedHour < 12 ? "AM" : "PM";
  }

  onDateChange(selectedDate: Date): void {
    // Verifica si la fecha seleccionada es un domingo (0 = Domingo, 1 = Lunes, ..., 6 = Sábado)
    if (selectedDate && selectedDate.getDay() === 0) {
      // Restablece la fecha seleccionada o muestra un mensaje de error
      this.selectedDate = null;

      // if(si esta 0 no podra hacer cita )
      console.log('No puedes seleccionar un domingo.');
    }
  }




}

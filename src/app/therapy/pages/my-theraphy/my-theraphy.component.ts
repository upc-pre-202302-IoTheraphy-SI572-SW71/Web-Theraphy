import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-my-theraphy',
  templateUrl: './my-theraphy.component.html',
  styleUrls: ['./my-theraphy.component.css']
})
export class MyTheraphyComponent {
  days: string[] = Array.from({ length: 50 }, (_, i) => `DAY ${i + 1}`);
  currentIndex: number = 0;
  maxVisibleDays: number = 10; // Define el número máximo de días visibles

  videoUrl: string = 'https://youtu.be/cPgK6btnzK0?si=EI_K_ZHiChsCFyTD';
  videoName: string = 'knee flexion';
  videoDescription: string = 'Discover a comprehensive approach to boost knee flexion through a series of targeted therapeutic exercises and cutting-edge methods. Regain mobility and reduce discomfort with this effective rehabilitation program for healthier knees.';


  selectedDayIndex: number = 0; // Inicializa el día seleccionado como el primer día

  // Otras funciones de tu componente

  selectDay(index: number) {
    this.selectedDayIndex = index;
  }


  prevDay() {
    this.currentIndex = (this.currentIndex - 1 + this.days.length) % this.days.length;
  }

  nextDay() {
    this.currentIndex = (this.currentIndex + 1) % this.days.length;
  }

  moveCarousel(step: number) {
    this.currentIndex += step;
  }

  get visibleDays() {
    // Calcula los días visibles en función del índice actual y el máximo de días visibles
    return this.days.slice(this.currentIndex, this.currentIndex + this.maxVisibleDays);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Detecta el ancho de la pantalla y ajusta el número máximo de días visibles
    if (window.innerWidth <= 800) {
      this.maxVisibleDays = 3; // Cambia a 1 día visible en pantallas pequeñas
    } else if (window.innerWidth <= 1200) {
      this.maxVisibleDays = 6; // Cambia a 1 día visible en pantallas pequeñas
    } else {
      this.maxVisibleDays = 10; // Cambia de nuevo a 10 días visibles en pantallas más grandes
    }
  }

  ngOnInit() {
    // Llama a la función de ajuste inicial para configurar el valor inicial
    this.onResize(null);
  }
}

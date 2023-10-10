import { Component } from '@angular/core';

@Component({
  selector: 'app-my-theraphy',
  templateUrl: './my-theraphy.component.html',
  styleUrls: ['./my-theraphy.component.css']
})
export class MyTheraphyComponent {
  days: string[] = Array.from({ length: 10 }, (_, i) => `DAY ${i + 1}`);
  currentIndex: number = 0;

  prevDay() {
    this.currentIndex = (this.currentIndex - 1 + this.days.length) % this.days.length;
  }

  nextDay() {
    this.currentIndex = (this.currentIndex + 1) % this.days.length;
  }
}

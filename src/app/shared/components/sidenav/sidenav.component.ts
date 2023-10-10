import {Component, HostListener, OnInit} from '@angular/core';
import {sidenavMenuData} from "./sidenavMenuData";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  sidenavData = sidenavMenuData;
  isExpanded = true;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkWindowSize();
  }

  ngOnInit(): void {
    this.checkWindowSize();
  }

  private checkWindowSize(): void {
    this.isExpanded = window.innerWidth > 1800; // Cambia isExpanded a false si el ancho es menor o igual a 800px
  }
}

import {Component, HostListener, OnInit} from '@angular/core';
import {sidenavMenuData} from "./sidenavMenuData";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  sidenavData = sidenavMenuData;
  isExpanded = true;

  constructor(private http: HttpClient) { }

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
  logout() {
    localStorage.removeItem('jwtToken');
  }
}

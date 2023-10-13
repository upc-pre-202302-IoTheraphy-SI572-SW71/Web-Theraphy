import {Component, OnInit} from '@angular/core';
import {Physiotherapist} from "../../../therapy/model/physiotherapist";
import {PhysiotherapistService} from "../../../security/services/physiotherapist.service";
import { NgModel } from '@angular/forms'; // Agrega esta importación


@Component({
  selector: 'app-physiotherapist-list',
  templateUrl: './physiotherapist-list.component.html',
  styleUrls: ['./physiotherapist-list.component.css'],
})
export class PhysiotherapistListComponent implements OnInit{
  //value: any;

  physiotherapists: Physiotherapist[]=[];
  originals: Physiotherapist[]=[];

  constructor(private physiotherapistsService: PhysiotherapistService) { }

  ngOnInit(): void {
    this.getAllPhysiotherapists()
  }

  getAllPhysiotherapists(){
    this.physiotherapistsService.getAll().subscribe((response: any) =>{
      this.physiotherapists = response.content;
      this.originals = response.content;
    })
  }

  filterPhysiotherapists(searchName: string) {
    this.physiotherapists = this.originals;
    this.physiotherapists = this.physiotherapists.filter(physiotherapist => {
      // Aquí comparamos el nombre del fisioterapeuta con el nombre de búsqueda
      return physiotherapist.user.firstname.toLowerCase().includes(searchName.toLowerCase()) ||
        physiotherapist.user.lastname.toLowerCase().includes(searchName.toLowerCase());
    });

  }

}

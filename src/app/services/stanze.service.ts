import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { Observable } from 'rxjs';




export interface Stanza {
  nome: string;
  dispositivi: [];
  tipiDispositivi: [];
  attivi: number;
}

@Injectable({
  providedIn: 'root'
})
export class StanzeService {
  stanze : any;

  constructor(private dataStorageService: DataStorageService) { }


  public getStanze(){
    this.dataStorageService.inviaRichiesta("GET","/getStanze")?.subscribe({
      next: (data) =>{
        this.stanze = data
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }
}
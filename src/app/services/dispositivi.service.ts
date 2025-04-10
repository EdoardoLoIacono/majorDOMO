import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { A } from '@angular/common/common_module.d-Qx8B6pmN';
import { contractOutline } from 'ionicons/icons';

@Injectable({
  providedIn: 'root'
})
export class DispositiviService {
  dispositivi: any = [];

  constructor(private dataStorageService: DataStorageService) { }

  public getDispositivi(){
    this.dataStorageService.inviaRichiesta('GET','/dispositivi')?.subscribe({
      next: (data:any)=>{
        this.dispositivi = data.map((dispositivo: any) => {
          if (dispositivo.favourite === undefined) {
            return { ...dispositivo, favourite: false };
          }
          return dispositivo;
        });
        console.log(this.dispositivi);
      },
      error: (error:any)=>{
        console.log(error)
      }
    })
  }

  public getDispositiviFiltrati(filtro: string) {
    let filter = {}
    switch (filtro) {
      case 'luci':
        filter = { tipo: 0 };
        break;
      case 'tapparelle':
        filter = { tipo: 1 };
        break;
    }

    this.dataStorageService.inviaRichiesta('GET','/dispositivi',filter)?.subscribe({
      next: (data:any)=>{
        this.dispositivi = data.map((dispositivo: any) => {
          if (dispositivo.favourite === undefined) {
            return { ...dispositivo, favourite: false };
          }
          return dispositivo;
        });
        console.log(this.dispositivi);
      },
      error: (error:any)=>{
        console.log(error)
      }
    })
  }
}

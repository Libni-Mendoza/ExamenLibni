import { Component } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})

export class NotasComponent {
nota: Notas[] = [];
  constructor() { }
  agregarNotas(
    tit: string, 
    descr: string,
  ){
    if(tit.length > 0 && descr.length > 0){
      this.nota.push({ titulos: tit, desc: descr, fechas: new Date()});
      (document.getElementById('text') as HTMLInputElement).autofocus=true;
      (document.getElementById('text') as HTMLInputElement).value = "";
      (document.getElementById('texto') as HTMLInputElement).value = "";
      (document.getElementById('validatedInputGroupSelect') as HTMLInputElement).value = "";
    }
  }
  ngOnInit(): void {
  }

}
export interface Notas{
  titulos: string;
  desc: string;
  fechas: Date;
}

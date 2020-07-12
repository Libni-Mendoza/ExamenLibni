import { Component } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  tarea: Tarea[] = [];
  validar = true;
 constructor() { } 

  cadena: string;

  guardarCadena(cadena){
    localStorage.setItem('cadena', cadena);
  }

  mostrarCadena(){
    this.cadena = localStorage.getItem('cadena');
  }
 
 agregatar( termino: string ){
  if (termino.length > 0){
    console.log(termino.length);
    this.tarea.push({ index: (this.tarea.length + 1), nombre: termino, realizada: false,   desabilitar:""});
    (document.getElementById('text') as HTMLInputElement).autofocus = true;
    (document.getElementById('text') as HTMLInputElement).value = "";
  }

}


  borrar(){
    this.tarea.splice(0, this.tarea.length);
}
}


export interface Tarea{
 nombre: string;
 realizada: boolean;
 index: number;
 desabilitar: string;
}
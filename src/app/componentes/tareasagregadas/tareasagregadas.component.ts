import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tareasagregadas',
  templateUrl: './tareasagregadas.component.html',
  styleUrls: ['./tareasagregadas.component.css']
})
export class TareasagregadasComponent implements OnInit {
@Input() tarea:any = {};
@Output() tareaSeleccionada: EventEmitter<number>
  constructor() {
    this.tareaSeleccionada=new EventEmitter();
   }

  ngOnInit(): void {
  }
  cheked(index: number){

    this.tareaSeleccionada.emit(index);
  }

}

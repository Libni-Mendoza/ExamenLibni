import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notasagregadas',
  templateUrl: './notasagregadas.component.html',
  styleUrls: ['./notasagregadas.component.css']
})
export class NotasagregadasComponent {

  @Input() nota: any = {};
  constructor() { }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Pregunta, Respuesta } from '../../models/pregunta';

@Component({
  selector: 'card-pregunta',
  templateUrl: 'card-pregunta.html'
})
export class CardPreguntaComponent {

  @Input() pregunta: Pregunta;
  @Output() selectEvent = new EventEmitter();

  constructor() { }

  valida(respuesta: Respuesta){

    let valida = false;

    if(respuesta.valida){
      valida = true;
    }

    this.selectEvent.emit(valida);

  }

}

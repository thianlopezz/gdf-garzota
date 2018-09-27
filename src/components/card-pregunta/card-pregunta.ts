import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { Pregunta, Respuesta } from '../../models/pregunta';

@Component({
  selector: 'card-pregunta',
  templateUrl: 'card-pregunta.html'
})
export class CardPreguntaComponent {

  respondida;

  @Input() pregunta: Pregunta;
  @Input() loading: boolean;
  
  @Output() selectEvent = new EventEmitter();

  constructor() { }

  valida(respuesta: Respuesta){

    this.respondida = true;

    let valida = false;

    if(respuesta.correcta){
      valida = true;
    }

    this.selectEvent.emit({ pregunta: this.pregunta, respuesta: respuesta});
  }

  ngOnChanges(changes: SimpleChanges) {
    debugger;
    if(changes.loading){
      this.loading = changes.loading.currentValue;
    }
    if (changes.pregunta) {
      this.respondida = false;
    }
  }

}

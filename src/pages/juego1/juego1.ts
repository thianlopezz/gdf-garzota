import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Pregunta, Respuesta } from '../../models/pregunta';

@Component({
  selector: 'page-juego1',
  templateUrl: 'juego1.html',
})
export class Juego1Page {

  pregunta: Pregunta;

  bloqueado;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.pregunta = new Pregunta();
    this.pregunta.idpregunta = 1;
    this.pregunta.pregunta = 'Podrias encontrar tres numeros iguales de un solo digito, para que al sumarlos se tenga como resultado el numero 60?';
    
    this.pregunta.respuestas.push(new Respuesta('6', false));
    this.pregunta.respuestas.push(new Respuesta('3', false));
    this.pregunta.respuestas.push(new Respuesta('5', true, 5));
    this.pregunta.respuestas.push(new Respuesta('No existe', false));
  }

  respuesta(valor){
    console.log('La respuesta es>>' + valor);
  }
  

}

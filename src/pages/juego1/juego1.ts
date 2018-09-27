import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { Pregunta, Respuesta } from '../../models/pregunta';

import { TiemposProvider } from '../../providers/tiempos/tiempos';
import { VerificaProvider } from '../../providers/verifica/verifica';

@Component({
  selector: 'page-juego1',
  templateUrl: 'juego1.html',
})
export class Juego1Page {

  pregunta: Pregunta;

  loading;

  bloqueado = true;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private tiemposProvider: TiemposProvider,
    private verificaProvider: VerificaProvider) {
      
      this.getPregunta();
    }

  respuesta(objeto){
    
    this.loading = true;

    if (objeto.respuesta.correcta){
      this.verificaProvider.enviaRespuesta(objeto.respuesta.idpregunta)
        .subscribe(
        result => {
          if (result.success) {
            this.verificaProvider.sumaPuntos(objeto.pregunta.puntos);
          }

          this.showAlert(result.mensaje);
          this.loading = false;
        },
        error => {
          this.showAlert('Revisa que tengas una conexión a internet activa.');
        });
    } else {
      
      setTimeout(() => {
        this.loading = false;
        this.showAlert('Sorry broww! respuesta incorrecta!');
      }, 1000);
    }
  }

  getPregunta(refresher?) {

    this.verificaProvider.getPregunta()
      .subscribe(
      result => {
        
        if (result.success) {
          
          this.pregunta = this.mapeaPregunta(result.data);
          this.bloqueado = false;
        } else {
          this.bloqueado = true;
        }
        
        if (refresher) { refresher.complete(); }
      },
      error => {
        this.showAlert('Revisa que tengas una conexión a internet activa.');
      });
  }

  showAlert(mensaje: string) {
    let alert = this.alertCtrl.create({
      title: 'Hey!',
      subTitle: mensaje,
      buttons: ['OK']
    });

    alert.present();
  }

  private mapeaPregunta(data) {
    
    let pregunta = new Pregunta();
    pregunta.idpregunta = data.idpregunta;
    pregunta.pregunta = data.pregunta;
    pregunta.puntos = data.puntos;

    for(let i = 0; i<data.respuestas.length; i++){
      pregunta.respuestas.push(new Respuesta(data.respuestas[i].idpregunta, data.respuestas[i].respuesta, data.respuestas[i].correcta));
    }
    
    return pregunta;
  }

}

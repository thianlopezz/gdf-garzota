import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VerificaProvider } from '../../providers/verifica/verifica';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-puntos',
  templateUrl: 'puntos.html',
})
export class PuntosPage {

  puntos;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    private verificaProvider: VerificaProvider) {
    this.buscaPuntos();
  }

  buscaPuntos(refresher?){
    
    setTimeout(() => {
      if (refresher) { refresher.complete(); }
      // this.puntos = this.verificaProvider.getPuntos();


      this.storage.get('puntos').then((val) => {
        if (val) {
          this.puntos = parseInt(val);
        } else {
          this.puntos = 0;
        }
      });
    }, 1000);
  }

}

import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

@Injectable()
export class VerificaProvider {

  constructor(public http: Http,
    private storage: Storage) { }

  enviaRespuesta(id: number) {

    return this.http.get('https://ws-reserva.herokuapp.com/api/chocolatada/setpregunta/' + id).map((response: Response) => response.json());
  }

  getPregunta() {

    return this.http.get('https://ws-reserva.herokuapp.com/api/chocolatada/getpregunta/').map((response: Response) => response.json());
  }

  sumaPuntos(valor: number) {
    
    this.storage.get('puntos').then((val) => {
      if(val){
        val = parseInt(val) + valor;
        this.storage.set('puntos', '' + val);
      } else {
        this.storage.set('puntos', '' + valor);
      }
    });
  }

}

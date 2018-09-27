import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TiemposProvider {

  pregunta1 = {
    dia: 30,
    mes: 11,
    anio: 2017,
    hora: 16,
    minutos: 0
  }

  pregunta2 = {
    dia: 30,
    mes: 11,
    anio: 2017,
    hora: 16,
    minutos: 29
  }

  pregunta3 = {
    dia: 30,
    mes: 11,
    anio: 2017,
    hora: 15,
    minutos: 30
  }

  pregunta4 = {
    dia: 30,
    mes: 11,
    anio: 2017,
    hora: 15,
    minutos: 31
  }

  pregunta5 = {
    dia: 30,
    mes: 11,
    anio: 2017,
    hora: 15,
    minutos: 32
  }

  constructor() { }

  getTiempoPegunta1() {
    
    return new Date(this.pregunta1.anio,
      this.pregunta1.mes - 1,
      this.pregunta1.dia,
      this.pregunta1.hora, 
      this.pregunta1.minutos, 0, 0);
  }

  getTiempoPegunta2() {

    return new Date(this.pregunta2.anio,
      this.pregunta2.mes - 1,
      this.pregunta2.dia,
      this.pregunta2.hora,
      this.pregunta2.minutos, 0, 0);
  }

  getTiempoPegunta3() {

    return new Date(this.pregunta3.anio,
      this.pregunta3.mes - 1,
      this.pregunta3.dia,
      this.pregunta3.hora,
      this.pregunta3.minutos, 0, 0);
  }

  getTiempoPegunta4() {

    return new Date(this.pregunta4.anio,
      this.pregunta4.mes - 1,
      this.pregunta4.dia,
      this.pregunta4.hora,
      this.pregunta4.minutos, 0, 0);
  }

  getTiempoPegunta5() {

    return new Date(this.pregunta4.anio,
      this.pregunta4.mes - 1,
      this.pregunta4.dia,
      this.pregunta4.hora,
      this.pregunta4.minutos, 0, 0);
  }

}

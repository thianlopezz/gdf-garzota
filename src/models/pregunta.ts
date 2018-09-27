export class Pregunta {

    idpregunta: number;
    pregunta: string;
    puntos: number;
    respuestas: Array<Respuesta>;

    constructor(){
        this.respuestas = new Array<Respuesta>();
    }
}

export class Respuesta {

    idpregunta: number;
    respuesta: string;
    correcta: boolean;

    constructor(idpregunta: number, respuesta: string, correcta: boolean){
        
        this.idpregunta = idpregunta;
        this.respuesta = respuesta;        
        this.correcta = correcta;
    }
}
export class Pregunta {

    idpregunta: number;
    pregunta: string;
    respuestas: Array<Respuesta>;

    constructor(){
        this.respuestas = new Array<Respuesta>();
    }
}

export class Respuesta {

    opcion: string;
    valida: boolean;
    valor: number;

    constructor(opcion: string, valida: boolean, valor?:number){

        this.opcion = opcion;        
        this.valida = valida;
        this.valor = valor || 0;
    }
}
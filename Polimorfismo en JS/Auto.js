const Vehiculo = require('./Vehiculo');

class Auto extends Vehiculo {

    constructor(marca, anio, color, recorrido, tiempo, puertas, combustible) {
        super(marca, anio, color, recorrido, tiempo);
        this.puertas = puertas;
        this.combustible = combustible;
    }
    
    acelerar() {
        return `Pisa el pedal derecho para acelerar`;
    }

    desacelerar() {
        return `Deja de pisar el pedal derecho para desacelerar`;
    }

    frenar() {
        return `Pisa el pedal izquierdo para frenar`;
    }

    especificaciones() {
        return `Auto\nPuertas: ${this.puertas}\nCapacidad de combustible: ${this.combustible} litros\n` + super.especificaciones();
    }
}

module.exports = Auto;

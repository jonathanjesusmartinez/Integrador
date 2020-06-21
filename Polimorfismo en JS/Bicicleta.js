const Vehiculo = require('./Vehiculo');

class Bicicleta extends Vehiculo {

    constructor(marca, anio, color, recorrido, tiempo, rodado) {
        super(marca, anio, color, recorrido, tiempo);
        this.rodado = rodado;
    }
    
    acelerar() {
        return `Pisa los pedales uno a la vez simultaneamente para acelerar`;
    }

    desacelerar() {
        return `Deja de pisar los pedales para desacelerar`;
    }

    frenar() {
        return `Aprieta la palanca derecha o izquierda del manillar para frenar`;
    }

    especificaciones() {
        return `Bicicleta\nRodado: ${this.rodado}"\n` + super.especificaciones();
    }
}

module.exports = Bicicleta;


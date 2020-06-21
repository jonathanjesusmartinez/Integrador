class Vehiculo {

    constructor(marca, anio, color, recorrido, tiempo) {
        this.marca = marca;
        this.anio = anio;
        this.color = color;
        this.recorrido = recorrido;
        this.tiempo = tiempo;
    }
    
    acelerar() {
        return this.acelerar;
    }

    desacelerar() {
        return this.desacelerar;
    }

    frenar() {
        return this.frenar;
    }

    calcularVelocidad() {
        return this.recorrido / this.tiempo
    }

    especificaciones() {
        return `Marca: ${this.marca}\nAño: ${this.anio}\nColor: ${this.color}\nAcelerar: ${this.acelerar()}\nDesacelerar: ${this.desacelerar()}\nFrenar: ${this.frenar()}\nVelocidad: ${this.calcularVelocidad()} m/s\n`;
    }
}

module.exports = Vehiculo;
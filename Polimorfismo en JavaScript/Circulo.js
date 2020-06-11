const Figura = require('./Figura');

class Circulo extends Figura {

    constructor(radio, x, y) {
        super(x, y);
        this.radio = radio;
    }
    
    calcularArea() {
        return Math.PI * (Math.pow(this.radio, 2));
    }

    calcularPerimetro() {
        return (Math.PI * this.radio * 2);
    }

    descripcion() {
        return "- Soy un Círculo. " + super.descripcion();
    }

}

module.exports = Circulo;

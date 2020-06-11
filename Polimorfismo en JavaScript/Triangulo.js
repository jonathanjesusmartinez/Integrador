const Figura = require('./Figura');

class Triangulo extends Figura {

    constructor(lado1, lado2, lado3, x, y) {
        super(x, y);
        this.lado1 = lado1;
        this.lado2 = lado2; 
        this.lado3 = lado3;
    }
    
    calcularArea() {
        var s = (this.lado1 + this.lado2 + this.lado3) / 2;
        return Math.sqrt(s*(s-this.lado1)*(s-this.lado2)*(s-this.lado3));
    }

    calcularPerimetro() {
        return (this.lado1 + this.lado2 + this.lado3);
    }

    descripcion() {
        return "- Soy un Triángulo. " + super.descripcion();
    }
}

module.exports = Triangulo;


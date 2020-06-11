class Figura {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    calcularArea() {
        return this.calcularArea;
    }

    calcularPerimetro() {
        return this.calcularPerimetro;
    }

    descripcion() {
        return `Mi posición es (x=${this.x}, y=${this.y})\nTengo un área de ${this.calcularArea()} y un perímetro de ${this.calcularPerimetro()}`;
    }
}

module.exports = Figura;
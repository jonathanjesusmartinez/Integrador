const Triangulo = require('./Triangulo');
const Circulo = require('./Circulo');

const triangulo1 = new Triangulo(3, 3, 4, 15, 34);
const triangulo2 = new Triangulo(4, 2, 5, 3, 12);
const circulo1 = new Circulo(3.5, 20, 24);
const circulo2 = new Circulo(5, 14, 28);

const figuras = [triangulo1, triangulo2, circulo1, circulo2];

for(let fig of figuras){
    console.log(fig.descripcion());
}

const Bicicleta = require('./Bicicleta');
const Auto = require('./Auto');

const auto1 = new Auto(`Chevrolet`, 2014, `Marron`, 100, 4, 3, 50);
const auto2 = new Auto(`Fiat`, 2018, `Blanco`, 100, 5, 5, 60);
const bicicleta1 = new Bicicleta(`Vairo`, 2011, `Rojo`, 10, 3, 26);
const bicicleta2 = new Bicicleta(`Mountanbike`, 2009, `Negro`, 10, 2, 24);

const vehiculos = [auto1, auto2, bicicleta1, bicicleta2];

for (let v of vehiculos) {
    console.log(v.especificaciones());
}
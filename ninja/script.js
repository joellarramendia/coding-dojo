class Ninja {
    constructor(nombre, salud=100, velocidad=3, fuerza=3){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }

    sayName(){
        console.log('Nombre del ninja: ' + this.nombre);
    }

    showStats(){
        console.log('Nombre: ' + this.nombre + ', Salud: ' + this.salud + ', Velocidad: ' + this.velocidad + ', Fuerza: ' + this.fuerza);
    }

    drinkSake(){
        this.salud += 10;
        console.log(this.nombre + ' ha bebido sake y su salud ha aumentado a ' + this.salud);
    }
}

class Sensei extends Ninja{
    constructor(nombre, salud=200, velocidad=10, fuerza=10, sabiduria=10){
        super(nombre, salud, velocidad, fuerza);
        this.sabiduria = sabiduria;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.")
    }
}

const superSensei = new Sensei('Master Splinter');
superSensei.speakWisdom();
superSensei.showStats();

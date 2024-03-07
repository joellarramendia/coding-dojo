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
        console.log('Nombre: ' + this.nombre + ', Fuerza: ' + this.fuerza + ', Velocidad: ' + this.velocidad + ', Salud: ' + this.salud);
    }

    drinkSake(){
        this.salud += 10;
        console.log(this.nombre + ' ha bebido sake y su salud ha aumentado a ' + this.salud);
    }
}

const ninja = new Ninja('Naruto');
ninja.sayName();
ninja.showStats();
ninja.drinkSake();

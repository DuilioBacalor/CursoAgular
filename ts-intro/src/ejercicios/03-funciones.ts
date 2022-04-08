

function sumar (a:number,b:number):number{
    return a+b; 

}

const sumarflecha=(a:number,b:number): number=>{
    return a+b;
}

function multiplicar(numero:number,otronumero?:number,base:number=2):number{
    return numero*base;
}
const resultado=multiplicar(5,10,2 );
console.log(resultado);

interface  PersonaleLor{
    nombre:string;
    pv:number;
    mostrarHP:() =>void;

}

function curar(personaje:PersonaleLor,curarX:number):void{
personaje.pv+=curarX;
};

const nuevoPersonaje:PersonaleLor={
    nombre:'strider',
    pv:50,
    mostrarHP (){
            console.log('Puntos de vida: ',this.pv);
    }

}

curar(nuevoPersonaje,20);
nuevoPersonaje.mostrarHP();
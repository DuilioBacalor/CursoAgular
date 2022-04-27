function classDecorator<T extends{new (...args:any[]):{}}>(
    constructor:T
)
{
        return class extends constructor{
            newProperty="new property";
            hello="override";
        };
}
@classDecorator
class MiSuperClase{
    public propiedad:string="abcd";
    imprimir (){console.log("Hola Mundo")}
}
console.log(MiSuperClase);
const miClase=new MiSuperClase();
console.log(miClase.propiedad);
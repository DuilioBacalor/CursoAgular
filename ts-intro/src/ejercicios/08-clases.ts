class PersonaNormal{
    constructor(
        public nombre:string,
        public direccion:string){}
}

class Hero extends PersonaNormal{
   constructor( 
    public alterego:string,
    public edad:number,
    public nombreReal:string)
    {
        super(nombreReal,"New york, Usa");
    }
}

const ironMan= new Hero("Ironman",45,"Tony");
console.log(ironMan);

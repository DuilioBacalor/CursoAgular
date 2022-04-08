interface Direccion{
    calle:string;
    ciudad:string;
    pais:string;
}

interface SuperHeroe{
    nombre:string;
    edad:number;
    direccion:Direccion;
    mostrardirecccion:()=>string;
    
}
const superHeroe={
    nombre:'Spaiderman',
    edad:50,
    direcccion:{
        calle:'Main St',
        pais:'USA',
        ciudad:'NY'
    },
    mostrarDireccion(){
        return this.nombre+' '+this.direcccion.ciudad+' '+this.direcccion.pais;
    }

}
const direccion=superHeroe.mostrarDireccion();
console.log(direccion);
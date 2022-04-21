interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalle:Detalle;
    
}
interface Detalle{
    autor:string;
    anio:number;
}

const reproductor:Reproductor={
    volumen:90,
    segundo:36,
    cancion:"Mess",
    detalle:{
        autor:"Ed Sheeran",
        anio:2015
        
    }

}

const {volumen,segundo,cancion,detalle}=reproductor;
const {autor}=detalle;

// console.log("El volumen actual es:",volumen);
// console.log("El segundo actual es:",segundo);
// console.log("El cancion actual es:",cancion);
// console.log("El volumen actual es:",autor);

const dbz:string[]=["Goku","Vegeta","Trunks"];
const [p1,p2,p3]=dbz;



 console.log("El volumen actual es:",p1);
 console.log("El volumen actual es:",p2);
 console.log("El volumen actual es:",p3);











let habilidades:string[]=['bash','counter','healing'];
interface Personje{
    nombre:string;
    hp:number;
    habilidades:string[];
    pueblonatal?:string;

}

let personaje :Personje={
    nombre:'strider',
    hp:100,
    habilidades:['bash','counter,','Healing']
    
}

personaje.pueblonatal='Pueblo Paleta';

console.table(personaje);

/*
    ===== Código de TypeScript =====
*/


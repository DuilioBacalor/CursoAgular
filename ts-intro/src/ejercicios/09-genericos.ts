function queTipoSoy<T>(argumento:T){
    return argumento;
}

let soyString= queTipoSoy("Hola mundo");
let soyNunero= queTipoSoy(100);
let soyArreglo= queTipoSoy([1,2,3,4]);

let soyEplicito=queTipoSoy<number>(100);
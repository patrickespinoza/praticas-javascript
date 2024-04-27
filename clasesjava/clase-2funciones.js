function sumar1y2 (){
    const uno = 1
    const dos = 2

    const resultado = uno + dos;

    if(resultado === 3) {
        return "la suma es 3"
    } else {
        return "la suma no es 3"
    }
    


}
const resultadoDeLaSuma = sumar1y2();
console.log (resultadoDeLaSuma)



// arrow function 
let decirHola = (nombre) => {
    console.log ("Hola", nombre);

};

decirHola("pedro");

decirHola = (nombre, apellido) => {
    console.log("HOla", nombre, apellido);
}

decirHola ("pedro", "ruiz")

const sumar = ( a, b ) =>   a + b;


console.log(sumar(2,3));


let decirHola = (darNombreParam) => {

    
    console.log ("Hola", darNombreParam ());
    console.log = (darNombreParam)
};


decirHola (() => ("pedro"))
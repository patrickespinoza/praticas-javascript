function decirHola() { 
 console.log ("Hola, koder");
}

decirHola();

function sumar () {
    console.log (2 + 1);
}
 
sumar();

let ovejas;

function contarOvejas () {
    ovejas = 4;
    console.log (ovejas);
}

contarOvejas() 

const sumas = 12;

let monedero = 1;

console.log (monedero);

monedero = monedero + 4;

console.log (monedero);

monedero += 5;

console.log (monedero);

console.log (monedero % 2);

// incremento y decremento

let diaSemana = 1;

console.log ('dia', diaSemana);

diaSemana = diaSemana + 1;

console.log ('dia', diaSemana);

diaSemana += 1;

console.log ('dia', diaSemana);

diaSemana++;

console.log ('dia', diaSemana);

// dia impar 
const dia = 1;

function diaOImpar() {

    const moduloDelDia = dia % 2;

    // si <<el dia es par>> Entonces <<imprima "el dia es par">>
    if(moduloDelDia === 0){
       console.log("el dia es par");
    } else {
        console.log("el dia es impar")
    }
}

diaOImpar();


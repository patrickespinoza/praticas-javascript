// monto prevsto para ese mismo dia 
const montoPrevisto = 5;

// crear una variable para guardar el numero de ordenes de un dia 
const ordenesEfectivas = 11;

// crea los dias del mes para saber si es impar o no 
const diaDelMes = 29

function ProyectarCapacidad() {


    if (ordenesEfectivas > montoPrevisto) {
        console.log("Carlos, debes incrementar la capacidad en el siguiente dia")
    } else if (ordenesEfectivas > montoPrevisto) {
        console.log("Carlos, debes reducir la capacidad en el siguiente dia")
    } else {
        console.log ("Carlos, vas bien sigue asi")
    } 
    
} 

function diasImpares(){

   const diaImpar = diaDelMes % 2;

   if (diaImpar === 0) {
        console.log("El dia es par!!");
    } else {
        console.log("El dia es impar!!")
    }

    
}


ProyectarCapacidad()
diasImpares()
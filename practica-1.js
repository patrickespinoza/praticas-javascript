// monto prevsto para ese mismo dia 
const montoPrevisto = 11;

// crear una variable para guardar el numero de ordenes de un dia 
const ordenesEfectivas = 11;

// crea los dias del mes para saber si es impar o no 
const diasDelMes = 30

function ProyectarCapacidad() {

    if (ordenesEfectivas > montoPrevisto) {
        console.log("Carlos, debes incrementar la capacidad en el siguiente dia")
    } else if (ordenesEfectivas > montoPrevisto) {
        console.log("Carlos, debes reducir la capacidad en el siguiente dia")
    } else {
        console.log ("Carlos, vas bien sigue asi")
    }
}

ProyectarCapacidad()
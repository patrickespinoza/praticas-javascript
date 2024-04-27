// 1.- Necesitamos poder entregar las iniciales del nombre de una persona, 
// considerando 
// únicamente primer nombre, apellido paterno y apellido materno
//     input => Israel Salinas Martínez
//     output => I. S. M.



function iniciales () {

const nombre = "Patrick"
const lastname = "Espinoza"
const lastname2 = "Sandoval"

    console.log( nombre.charAt(0));
    console.log(lastname.charAt(0))
    console.log (lastname2.charAt(0))
   
}
 

iniciales()








//     2.- Necesitamos una ruleta de nombres, es decir, de una lista de nombres, 
//     debemos poder obtener algún nombre al azar. El nombre seleccionado debe ser 
//     eliminado de la lista original para poder volver a usar la ruleta.
//     Cuando ya no haya nombres, debe avisar que ya no hay nombres en la lista.


function ruleta () {
    const listnames = ['Patrick', 'Leonel','Andres', 'Marcus', 'Aiden', 'clark', 'kevin','pedro','david'];
 const aleatorio = listnames[Math.floor(Math.random()*listnames.length)];

 while (listnames.length > 0) {
    const nombreEliminado = listnames.splice(aleatorio, 1)[0];
        console.log({nombreEliminado});
    }
    console.log("Ya no hay nombres en la lista.");
 }


ruleta()

// function eliminarNombresAleatorios(nombres) 
    // while (nombres.length > 0) {
    //     const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    //     const nombreEliminado = nombres.splice(indiceAleatorio, 1)[0];
    //     console.log({nombreEliminado});
    // }
    // console.log("Ya no hay nombres en la lista.");



// eliminarNombresAleatorios(listnames);
const phrase = "la mejor forma de predecir el futuro es creandolo"



const phraseUppercase = phrase.toUpperCase();
const phrasereplace = phrase.replace();
let phrasereplace2 = phrasereplace.replace ("la mejor forma de predecir el futuro es creandolo", "l4 mejor form4 de predecir el futuro es cre4ndolo")


// 1.- Saber cuántos caracteres tiene la frase
function  caracteristicas () {
const Characters = (phrase);
console.log (Characters.length)
return Characters

}

caracteristicas();
//     2.- Saber cuántas letras tiene la frase
        

//     3.- Saber cuántas palabras tiene la frase
 // separar la frase en paalbras esto es, crear un nuvea palabra cada que me ecnenutre un espacio
// agregamos  aun lista cada palabra encontrada
 // contamos la cantidad de palbras que hay en una lista resultante 

const countWord = (text) => text.split (" ").length;
let countTestOne  = countWord ("la mejor forma de predecir el futuro es creandolo")
console.log(countTestOne)

 //     4.- Obtener la misma frase pero en mayúsculas
console.log (phraseUppercase);


//     5.- Obtener la misma frase pero con todas las letras "a" reemplazadas por un "4"
 console.log (phrasereplace2);



// separar la frase en paalbras esto es, crear un nuvea palabra cada que me ecnenutre un espacio
// agregamos  aun lista cada palabra encontrada
// contamos la cantidad de palbras que hay en una lista resultante 


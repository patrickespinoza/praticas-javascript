const grades = [8, 7, 9, 10, 6];


const prom = (number) => {
    let promedio = 0;
    let cantidad =0;

   number.forEach( numbers => {
        
    promedio += numbers;
    cantidad++;

   });


   return promedio / cantidad

    
};

console.log("promedio", prom(grades));


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumaPares = (numbers) => {
let sumaNumerosPares = 0;

numbers.forEach(numeros => {

    if(numeros % 2 === 0 ) {
        sumaNumerosPares += numeros;
    }

   

})
return sumaNumerosPares

}

console.log(sumaPares(numbers))



const palabras = ["casa", "árbol", "plátano", "manzana", "avión"];


const contar = (contador) => {
let numeroLetras = [];

    contador.forEach(word => {
        let acumulador = {};
    

    word.split('').forEach(letras => {

        if(acumulador[letras]){
            acumulador[letras]++;
        } else {
            acumulador[letras] = 1;
        }
       

     

    })
    numeroLetras.push(acumulador)
}) 

    return numeroLetras

}

console.log(contar(palabras))

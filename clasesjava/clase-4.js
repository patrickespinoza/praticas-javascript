// funtion normal
function SumaDosNumeros (num1, num2) {
let result = num1 + num2
return result
}


let prueba1 = SumaDosNumeros (3, 4)

console.log (prueba1)

// funtion arrow

const AddTwoNumbers = (num1,num2) => num1 + num2

let pruebaArro2 = AddTwoNumbers (3,20)
console.log (pruebaArro2)

// example about function convencional , this hace referencia la mundo donde vive la funcion
let foo = {
    name:"some object",
    greeting: function () {
        console.log (this.name)
    }
}

foo.greeting ()

// Example  about the function arrow
let bar = {
    name:"some object",
    greeting: () => {
        console.log (this.name)
    }
}

bar.greeting ()



// Prototype
const SomeString = "hello my brother"
const someOtherStrincg = "TEXTO EN MAYUSCULAS";

console.log (SomeString);

console.log (SomeString.length);

const capString = SomeString.toUpperCase();
const lowerString =someOtherStrincg.toLocaleLowerCase();
const splittedString = SomeString.split("");

console.log(capString)
console.log(lowerString)
console.log(splittedString)
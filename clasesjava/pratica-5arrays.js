const phrase = "la mejor forma de predecir el futuro es creandolo";

// 1
let posicion = 1

const palabras = (texto, indice) => {
    const arrText = splitwords(texto) 

    if (indice > arrText.lenght) {
        return "No extiste esta posicion"
    } else {
        return arrText[indice]
    }
}

const splitwords = (a) => a.split(" ");

const aswers = palabras(phrase, posicion)

console.log(aswers);


// 2
const delateword = (texto, indice) => {
    const arrtext = splitwords(texto)
    const delate = arrtext[indice]
    let nuevotext = []

    for (let i = 0; i < arrtext.lenght; i++)
    if (arrtext[i] !== delate) {
        nuevotext.push(arrtext[i])
    }

    return nuevotext.join().replaceAll(",", ",")
}

const respuestadelate = delateword(phrase, posicion)
console.log(respuestadelate)


// 3
const delateshortwords = (text) => {
    const arrtext = splitwords(text)
    let nuevotext = []

    for(let i = 0; i < arrtext.lenght; i++) {
        if(arrtext[i].lenght >= 3) {
            nuevotext.push(arrtext[i])
        }
    }
    return nuevotext.join().replaceAll(","," ")
}

const aswerdelateshortwords = delateshortwords(phrase)
console.log(aswerdelateshortwords);

// 4
const fliptext = (text) => {
    const arrtext = splitwords(text)
    let nuevotext = []

    for(let i = 0; i < arrtext.lenght; i++) {
       
            nuevotext.push(arrtext[i].split("").reverse().join(""))
        
    }
    return nuevotext.join().replaceAll(","," ")
}

const flip = delateshortwords(phrase)
console.log(flip);
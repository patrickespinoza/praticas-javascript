const koders = ["patrick","jair", "daniel", "maria", "natalia"];

document.createElement("p")
// para  CREAR UN ELEMENTO
let paragrahp = document.createElement("p");
console.log(paragrahp)
// PARA AGREGAR TEXTO
let paragrahpText = document.createTextNode("Gloriela");
console.log(paragrahpText);


let checkbox = document.createElement("input");
checkbox.setAttribute("type", "chekbox");

// PARA INSERTAR UN ELEMNTO DENTRO DE OTRO ELEMNTO es un 
paragrahp.append(paragrahpText, checkbox);
console.log(paragrahp)


let koderCard = document.getElementById("koder-card")
koderCard.append(paragrahp)


const creatCard = (title) => {
    let cardBody = document.createElement("div");
    cardBody.classList.add("card"), "mb-3"; 
    // classList es la litsa de clases del elemento  y le metodo add  permite agregar una clase adicional

    let h3 = document.createElement("h3");
    let texto = document.createTextNode(title);
    h3.append(texto);

    
    let cardParagjhar = document.createElement("p")
    let cardParagjharText = document.createTextNode("card text")
    cardParagjhar.append(cardParagjharText)
;


    let cardButton = document.createElement("button");
    let cardButtonText = document.createTextNode("click me!");
    cardButton.append(cardButtonText);

    cardBody.append(h3, cardParagjhar, cardButton)
    return cardBody;
}

let newcard = creatCard();

console.log (newcard)





// para que se vea en la pagina 
let cardWrapper = document.getElementById("card-wrapper")
cardWrapper.append(newcard)

koders.forEach((koder) => {
    let newcard = creatCard(koder);
    cardWrapper.append(newcard)
 
 })
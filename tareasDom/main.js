// Crear una lista de koders, usando el siguiente array: usando ul

let koders = [
    {   name:"Israel",
        lastname:"Salinas Martínez"
    },{
        name:"Patrick",
        lastname:"Espinoza Sandoval"
    },{
        name:"clark",
        lastname:"Sanchez Gonzales"
    },{
        name:"Marta",
        lastname:"Hernandez Lopez"
    },{
        name:"Max",
        lastname:"chavez sandoval"
    },{
        name:"Eduardo",
        lastname:"Salinas Martínez"
    },{
        name:"Aiden",
        lastname:"Rupperd clark"
    }


]



const creatCard = (info) => {

    let card = document.createElement("div");
      card.classList.add("card")

      let h3 = document.createElement("h3");
      let texto = document.createTextNode(info);
      h3.append(texto);

      let cardParaghar = document.createElement("li")
      let cardParagharText = document.createTextNode("Name koders")
      cardParaghar.append(cardParagharText)


      card.append(cardParaghar, h3 )
      return card;


}
let task = creatCard();
console.log(task)


let cardWrapper = document.getElementById("uli")
cardWrapper.append(task)

koders.forEach((koder) => {
    let task = creatCard(`${koder.name} ${koder.lastname}`);
    
    cardWrapper.append(task)
 
 })
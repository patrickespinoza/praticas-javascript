const getplayer = async () => {
    let responde = await fetch (`https://jugadores-de-futbol-af23e-default-rtdb.firebaseio.com/Jugadores/.json`)
    let players = await responde.json();
    console.log(players)

    let keys = Object.keys(players);
    console.log(keys)
    

    let playesArray = keys.map((key) => {
        return{...players[key], key}
    });

    console.log(playesArray);
    //desde aqui mando a llamar lo de la impresion
    printPlayers(playesArray,"players-list")
}

const postplayers = async (playersObject) => {

let response = await fetch (`https://jugadores-de-futbol-af23e-default-rtdb.firebaseio.com/Jugadores/.json`,
{
    method: "POST",
    body: JSON.stringify(playersObject)

}
);

let data = await response.json();
console.log(data);
//aqui vuelvo  a llamar a la funcion de para que se muestre el jugadors (2)
getplayer();

}

//peticion para eliminar el jugador de la base de datos (3)
const deleatePlayerByID = async (playerKey) => {
    let response = await fetch (`https://jugadores-de-futbol-af23e-default-rtdb.firebaseio.com/Jugadores/${playerKey}/.json`, 
    {
       method: "DELETE"
    })
    let data =  await response.json()
    console.log(data);
}
// Funcion para hacer funcionar el boton de gurarda (1)
let savePlayers = document.getElementById("save-koder-button")
savePlayers.addEventListener("click", async () => {
    let input = document.querySelectorAll("#players-form input");

    let playersObject = {}

    input.forEach( ({name,value}) => {
        playersObject[name] = value;
        
    });

    console.log(playersObject);
   await postplayers(playersObject);
   await getplayer();
    /* este es para recetear el formulario */
    input.forEach((input)=> (input.value = ""))

});

// funcion para imprimir los jugadores en la pagina (2)
const creatPlayers = (playersObject) => {
    let {name,equipo, key} = playersObject
    let playerItem = document.createElement("li")
    playerItem.classList.add("list-group-item" ,"d-flex", "justify-content-between", "align-items-center")
    playerItem.innerText = `${name} ${equipo}`

//funcion para crear boton de eliminar (3)
    let deletaButton = document.createElement("button")
    deletaButton.classList.add("btn", "btn-danger","tetx.center");
    deletaButton.innerText= "X";
    
// evento listener para que escuche el click (3)
    deletaButton.addEventListener("click", async () => {
        console.log(key)
        await deleatePlayerByID(key)
        await getplayer()
    })
    playerItem.append(deletaButton)

    return playerItem
    
}


const printPlayers = (playesArray, wrapperId) => {
    let wrapper = document.getElementById(wrapperId)
    wrapper.innerHTML= " ";

    playesArray.forEach((player) => wrapper.append (creatPlayers(player)))
}

getplayer()
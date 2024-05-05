let input = document.querySelectorAll("#koder-form input")

const saveDataBase = async (entryObject) => {
let getdatabase = await fetch (`https://pratica-autores-default-rtdb.firebaseio.com/post/.json`, 
{
  method: "POST",
  body: JSON.stringify(entryObject)
})

let data = await getdatabase.json();
console.log(data)
}



let saveButton = document.getElementById("save-koder-btn")
saveButton.addEventListener("click", () => {

    let blogData = {};


   input.forEach((item) => {
   blogData[item.name] = item.value;
   });

console.log(blogData)
saveDataBase(blogData)
})


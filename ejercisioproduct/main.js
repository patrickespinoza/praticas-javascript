let crearItem = document.getElementById("save");

let articulos = [];

crearItem.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("click");


    let item = document.querySelectorAll("form-items input");
    console.log(item)
    
    let itemObject = {};
    item.forEach((item)=> {
        let property = item.name;

        let value = item.value;

        itemObject[property] = value;
    })
      
    articulos = [...articulos, itemObject]


    printArticulositem(articulos, "persons-list")



});
const createPersonItem = (itemObject) => {
    let { Producto, descript, precio, Categoria, url } = itemObject;
    let artiulosItem = document.createElement("div");
    artiulosItem.classList.add("card");
    let articulText = document.createTextNode(`${Producto} ${descript} ${precio} ${Categoria} ${url} `);
    artiulosItem.append(articulText);
    return artiulosItem;
  };
  
  const printArticulositem = (dataArray, wrapperId) => {
    let wrapper = document.getElementById(wrapperId);
  
    while (wrapper.firstChild) {
      wrapper.removeChild(wrapper.firstChild);
    }
  
    dataArray.forEach((articulo) => wrapper.append(createPersonItem(articulo)));
  };
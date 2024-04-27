const names = ["sky", "milton", "boris", "milo"]

const filtro = (dognames) => {
let result = dognames.filter ((item,indx,arr) => {
return item.lenght > 3;
})
return result
};

console.log (filtro(names));
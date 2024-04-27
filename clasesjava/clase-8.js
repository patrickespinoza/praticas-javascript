let kodersObjects = [
    {
        name: "yair",
        lastname:"guadarrama",
    },
    {
        name: "kevin",
        lastname:"monterrosa",
    },
    {
        name: "patrick",
        lastname:"espinoza",
    }
]; 
const getKoderFullName = (KodersArry) => {
    let kodersFullName = []; 
    KodersArry.forEach((koder,) => {
    
        let fullName = `${koder.name} ${koder.lastname}`;
        kodersFullName.push(fullName)
        
    });
    return kodersFullName;
}
let test = getKoderFullName (kodersObjects);
console.log(test)


//  map 

 
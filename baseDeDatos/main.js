const getKoders = async () => {
    let respose = await fetch ("https://primer-proyecto-4ea8b-default-rtdb.firebaseio.com/.json")


let koders = await respose.json();
console.log(koders)

};
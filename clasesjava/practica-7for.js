const users = [
    {
      name: "Alice",
      lastname: "Johnson",
      age: 28,
      gender: "Female",
      country: "USA",
    },
    {
      name: "Bob",
      lastname: "Smith",
      age: 32,
      gender: "Male",
      country: "Canada",
    },
    {
      name: "Carlos",
      lastname: "Gomez",
      age: 24,
      gender: "Male",
      country: "Mexico",
    },
    {
      name: "Daniela",
      lastname: "Martinez",
      age: 30,
      gender: "Female",
      country: "Colombia",
    },
    {
      name: "Erik",
      lastname: "Svensson",
      age: 29,
      gender: "Male",
      country: "Sweden",
    },
    {
      name: "Fiona",
      lastname: "O'Donnell",
      age: 35,
      gender: "Female",
      country: "Ireland",
    },
    {
      name: "Gautam",
      lastname: "Patel",
      age: 27,
      gender: "Male",
      country: "India",
    },
    {
      name: "Hana",
      lastname: "Kim",
      age: 22,
      gender: "Female",
      country: "South Korea",
    },
    {
      name: "Ivan",
      lastname: "Petrov",
      age: 34,
      gender: "Male",
      country: "Russia",
    },
    {
      name: "Julia",
      lastname: "Santos",
      age: 25,
      gender: "Female",
      country: "Brazil",
    },
  ];
  

    //   1.- Necesitamos una lista con únicamente los nombres completos de cada usuario
    function extraerNombresYApellidos(listaUsuarios) {
        let nombresYApellidos = []; // Lista vacía para almacenar los resultados
    
        // Bucle for para iterar sobre cada usuario en la lista
        for (let i = 0; i < listaUsuarios.length; i++) {
            let usuario = listaUsuarios[i];
            let namess = usuario.name;
            let lastenames = usuario.lastname;
            nombresYApellidos.push(namess,lastenames); // Añadir el nombre y apellido al nuevo arreglo
        }
    
        return nombresYApellidos;
    }
    

    const resultado = extraerNombresYApellidos(users);
    console.log(resultado);
    //   2.- Necesitamos una lista con únicamente aquellos usuarios con género "Male"

    function males (listadeGeneros) {
        let genero = [];

        for (let i = 0; i < listadeGeneros.length; i++) {
            let usuarios = listadeGeneros[i];
            let genders = usuarios.gender;
            let usernames = usuarios.name;

            genero.push(usernames, genders)
        }
        return genero;
    }  
    const result = males(users);
    console.log(resultado);
    //   3.- Necesitamos una lista con únicamente aquellos usuarios con género "Female"
    //   4.- Necesitamos saber la edad promedio de los usuarios
    //   5.- Necesitamos saber la mayor edad
    //   6.- Necesitamos saber la menor edad

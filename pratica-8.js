let perros = [
    {
      nombre: "Max",
      tipo: "Perro",
      edad: 4,
      vacunado: true,
      direccion: {
        calle: "Calle del Parque",
        numero: 23,
        colonia: "San José",
        codigoPostal: 78900,
      },
    },
    {
      nombre: "Dona",
      tipo: "Perro",
      edad: 6,
      vacunado: true,
      direccion: {
        calle: "Avenida Libertad",
        numero: 56,
        colonia: "El Bosque",
        codigoPostal: 78500,
      },
    },
    {
      nombre: "Ken",
      tipo: "Perro",
      edad: 3,
      vacunado: false,
      direccion: {
        calle: "Callejón del Puente",
        numero: 12,
        colonia: "Villa Hermosa",
        codigoPostal: 78850,
      },
    },
    {
      nombre: "Rocky",
      tipo: "Perro",
      edad: 2,
      vacunado: false,
      direccion: {
        calle: "Camino Real",
        numero: 34,
        colonia: "Las Palmas",
        codigoPostal: 78600,
      },
    },
  ];
  
   //   1.- Necesitamos una nueva lista con únicamente el nombre de cada can


   const Newlist = (perros) => {
    let name = [];
    perros.forEach ((names) => {

        let fullName = `${names.nombre}`;
        name.push(fullName)

        

    });
    return name

}


const NewListDog = Newlist(perros)
console.log ("Names:",NewListDog)

    //   2.- Necesitamos obtener una lista con los objetos de todos los canes, pero su edad debe mostrarse en años perrunos ( 1 año humano = 7 años perrunos )
    //         cambiamos la información de edad, localizar en cada objeto el elemento "edad" para modificarlo, para eso multiplicaremos por 7
    //         creamos la lista con el elemento modificado

const edadperro = (perros) => perros.map((perros) => perros.edad* 7)

let edadEnPerro = edadperro(perros)

console.log ("Edades en años de perro:",edadEnPerro)




    //   3.- Necesitamos conocer la cantidad de canes que ya estan vacunados
    //         buscar en cada objeto el elemento que indique la información requerida
    //         se compara si el elemento indica false o true para saber si está vacunado o 
    //         guardar en un total aquellos que sí están vacunados
    //         mostrar el total de perros vacunados


    const perrosVacunados = (perros) => {
        let vacunados = []
        perros.forEach((vacuna) => {

        if (vacuna.vacunado === true) { vacunados ++

        }

        });

        return vacunados;
    }

    let trueofalse = perrosVacunados (perros)
    console.log ("perros vacunados:",trueofalse)

    //   4.- Necesitamos una lista que contenga el nombre y la dirección completa de cada perro, en el siguiente formato:
    //       "{nombre}: {calle} #{numero}, {colonia}, {codigoPostal} "

const informationDogs = (perros) => {
    let fullInformation = []
    perros.forEach((info) => {
       

        let infocomplete = `${info.nombre} ${info.direccion.calle} ${info.direccion.numero} ${info.direccion.colonia} ${info.direccion.codigoPostal}`
        fullInformation.push(infocomplete);
    });

    return fullInformation
}

const complete = informationDogs(perros)
console.log("full information:",complete)




    //   5.- Necesitamos saber la edad promedio en años humanos de los canes de la lista
    //         buscar en cada objeto la propiedad de edades
    //         sumar las edades hasta obtener un total
    //         sacar promedio de edad
    //         imprimir el promedio de la edad

    const edadPromedio = (perros) => {
           let total = perros.reduce((suma, obejeto) => {
               
           return suma + obejeto.edad

           }, 0);

         

      const promedio = total /perros.length;
      return promedio

    }

    const promedioPerros = edadPromedio (perros);
    console.log ("Promedio de edades:",promedioPerros)

    //   6.- Necesitamos una nueva lista con todos los objetos de los canes, pero cambiando el valor de la propiedad "vacunado" a "si || no" ( si el valor viene en true, cambiarlo a "Si", si el valor viene en false, cambiarlo a "No")
    //         se busca en cada objeto el elemento "vacunado"
    //         se comprueba si dice false o true
    //         si dice true, se cambia el valor a Sí
    //         si dice false, se cambia el valor a No
    //         retornar a una nueva lista
    //         imprimir la nueva lista con el valor de vacunado actualizado

const Modifc = perros.map(perros => {

   return {
    ...perros,
        vacunado: perros.vacunado ? "si" : "no"
   }


});


console.log ("Lista modeificada:",Modifc)



   
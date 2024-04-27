let data = [
    ["Israel", "Salinas", 34],
    ["Charles", "Silva", 27],
    ["Naomi", "Lopez", 27],
    ["David", "Moranchel", 28],
  ];
  
  
    //   1. Necesitamos una lista con los nombres completos de las personas que se encuentran en la data
   const completeName = (names) => {
    return names.reduce ((acumm,[firstName, LastName]) => {
        let nameslastnames = `${firstName} ${LastName} `;
        acumm.push (nameslastnames);
        return acumm
        
        
    }, []);
    
     
   }

   console.log (completeName(data))
    


    //   2.- Necesitamos saber cual es la mayor y la menor edad de las personas en la lista
    
    const age = (edades) => {
        return edades.filter = ((mayoria, objeto) => {
            const [, , age] = objeto

            if (age > mayoria.max) ++ age;
           if (age < mayoria.min)  ++ age;
           return mayoria
        }, {min: 1, max: -100})
    }

  const mayoria = age(data)
    console.log (`La edad menor es ${mayoria.min} y la mayor es ${mayoria.max}.`);






    //   3.- Necesitamos reestructurar la data para que quede de la siguiente forma:
  
    //   let restructuredData = [
    //       {
    //           name:
    //           lastname:
    //           age
    //       }
    //   ]
  
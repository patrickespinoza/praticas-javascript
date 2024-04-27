
//   1.- Activar el formulario, de tal forma que al dar click en el botón "crear usuario" se genere un objeto con la siguiente forma:
//   person = {
//     name:"...",
//     email:"...",
//     password:"..."
//   }

document.getElementById('crearUsuario').addEventListener('click', function() {
    // Obtener los valores del formulario
    console.log("click")
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Crear el objeto 'person'
    var person = {
      name: name,
      email: email,
      password: password
    };
  
    // Mostrar el objeto 'person' en la consola
    return person
  });

  console.log(person)

  
  









//   2.- Agregar a la funcionalidad, una lista "persons", de tal forma que al dar click en el boton, la persona creada en el paso anterior, se agregue a esa lista "persons"

//    persons = []
//   person -> persons

//   3.- Agregar la funcionalidad para que cada que agregue una persona nueva, esta se vea reflejada junto con las anteriores en la interfaz de usuario



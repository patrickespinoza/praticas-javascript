let inputs = document.querySelectorAll("#koder-form input");

const saveEntry = async (entryObject) => {
  let response = await fetch(
    `https://pratica-autores-default-rtdb.firebaseio.com/post/.json`,
    {
      /*Qué método voy a usar?*/
      method: "POST",
      /*Qué es lo que voy a enviar*/
      body: JSON.stringify(entryObject),
    }
  );

  /*Aquí desempaquetamos la respuesta para poder usarla*/
  let data = await response.json();

  console.log(data);
};

let saveEntryButton = document.getElementById("save-koder-btn");

saveEntryButton.addEventListener("click", () => {
  let blogEntry = {};

  inputs.forEach((input) => {
    blogEntry[input.name] = input.value;
  });

  console.log(blogEntry);
  saveEntry(blogEntry);
});

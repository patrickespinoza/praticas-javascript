//let products = [];

let savedData = JSON.parse(localStorage.getItem("shoppingCart"));

let products = savedData ? savedData.products : [];

let cartAlert = document.getElementById("cart-alert");
let form = document.getElementById("form-user");
// savedProducts
//   ? (cartAlert.style.display = "block")
//   : (cartAlert.style.display = "none");

if (savedData) {
  message = cartAlert.style.display = "block";
  message = form.style.display = "none";
} else {
  message = cartAlert.style.display = "none";
  message = form.style.display = "block";
}
document
  .getElementById("guardar-producto")
  .addEventListener("click", (event) => {
    event.preventDefault();
    let productName = document.getElementById("product-name").value;
    products = [...products, productName];
    printProducts(products);

    localStorage.setItem("shoppingCart", JSON.stringify({ products }));
  });

const printProducts = (productsArray) => {
  let list = document.getElementById("products-list");
  list.innerHTML = "";

  productsArray.forEach((product) => {
    let currentContent = list.innerHTML;
    list.innerHTML = currentContent + `<li>${product}</li>`;
  });
};

printProducts(products);

const addToCartButton = document.getElementById("add-to-cart");
const cartItemsList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

let total = 0;

addToCartButton.addEventListener("click", function() {
  const productName = this.parentNode.getElementsByTagName("h3")[0].innerHTML;
  const productPrice = parseInt(this.parentNode.getElementsByTagName("p")[0].innerHTML.substring(1));

  const item = `<li>${productName} - $${productPrice}</li>`;
  cartItemsList.insertAdjacentHTML("beforeend", item);

  total += productPrice;
  cartTotal.innerHTML = `Total: $${total}`;
});


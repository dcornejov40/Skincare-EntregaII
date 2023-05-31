document.addEventListener('DOMContentLoaded', function () {
  var addToCartButtons = document.getElementsByClassName('add-to-cart');
  for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', addToCart);
  }

  var cartItems = localStorage.getItem('cartItems');
  if (cartItems) {
    var cart = JSON.parse(cartItems);
    for (var j = 0; j < cart.length; j++) {
      showCartItem(cart[j]);
    }
  }
});

function addToCart() {
  var productId = this.dataset.id;
  var productName = this.parentNode.getElementsByTagName('p')[0].textContent;
  var productPrice = this.parentNode.getElementsByTagName('p')[1].textContent;
  var cartItem = {
    id: productId,
    name: productName,
    price: productPrice
  };

  var cartItems = localStorage.getItem('cartItems');
  var cart = cartItems ? JSON.parse(cartItems) : [];
  cart.push(cartItem);
  localStorage.setItem('cartItems', JSON.stringify(cart));

  showCartItem(cartItem);
}

function showCartItem(item) {
  var cart = document.getElementById('cart');
  var li = document.createElement('li');
  li.textContent = item.name + ' - ' + item.price;
  cart.appendChild(li);
}

function calcularTotal(carrito) {
  var total = 0;
  for (var i = 0; i < carrito.length; i++) {
    total += carrito[i].precio;
  }
  return total;
}
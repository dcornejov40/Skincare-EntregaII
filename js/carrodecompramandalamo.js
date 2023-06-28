document.addEventListener('DOMContentLoaded', function () {
  var addToCartButtons = document.getElementsByClassName('add-to-cart');
  for (var i = 0; i < addToCartButtons.length; i++) {
      addToCartButtons[i].addEventListener('click', addToCart);
  }

  var cartItems = localStorage.getItem('cartItems');
  if (cartItems) {
      var cart = JSON.parse(cartItems);
      cart.forEach(function (item) {
          showCartItem(item);
      });
  }

  var updateCartButton = document.getElementById('update-cart');
  updateCartButton.addEventListener('click', updateCart);

  var clearCartButton = document.getElementById('clear-cart');
  clearCartButton.addEventListener('click', clearCart);
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

function updateCart() {
  var cartItems = localStorage.getItem('cartItems');
  var cart = cartItems ? JSON.parse(cartItems) : [];
  var total = calcularTotal(cart);

  var totalElement = document.getElementById('cart-total');
  totalElement.textContent = 'Total: $' + total.toFixed(2);
}

function clearCart() {
  localStorage.removeItem('cartItems');
  var cart = document.getElementById('cart');
  while (cart.firstChild) {
      cart.removeChild(cart.firstChild);
  }
  var totalElement = document.getElementById('cart-total');
  totalElement.textContent = 'Total: $0.00';
}

function calcularTotal(carrito) {
  var total = 0;
  for (var i = 0; i < carrito.length; i++) {
      total += parseFloat(carrito[i].price);
  }
  return total;
}

Toastify({
  text: '¡No te pierdas esta promo!',
  duration: 3000,
}).showToast();

let cartCount = 0;

function addToCart(productName) {
  cartCount++;
  document.getElementById('cart').textContent =
    `Cart: ${cartCount} item${cartCount > 1 ? 's' : ''}`;
  console.log(`${productName} added to cart`);
}




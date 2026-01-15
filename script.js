let count = 0;

function addToCart() {
    count++;
    document.getElementById("cart").textContent = "Cart: " + count + " items";
}

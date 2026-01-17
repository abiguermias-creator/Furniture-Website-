let cartCount = 0;

function addToCart(productName) {
  cartCount++;
  document.getElementById('cart').textContent =
    `Cart: ${cartCount} item${cartCount > 1 ? 's' : ''}`;
  console.log(`${productName} added to cart`);
}
<script>
document.getElementById("year").textContent = new Date().getFullYear();
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "Back to Top";
scrollBtn.style.marginTop = "1rem";
document.querySelector(".footer-center").appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
</script>





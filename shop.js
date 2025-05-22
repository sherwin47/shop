const cart = [];
const cartSidebar = document.getElementById("cartSidebar");
const cartBtn = document.getElementById("cartBtn");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

cartBtn.addEventListener("click", () => {
  cartSidebar.classList.toggle("hidden");
});

document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", (e) => {
    const card = e.target.closest("div");
    const name = card.dataset.name;
    const price = Number(card.dataset.price);

    cart.push({ name, price });
    updateCart();
  });
});

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement("div");
    div.className = "flex justify-between items-center";
    div.innerHTML = `
      <span>${item.name} - ₹${item.price}</span>
      <button onclick="removeItem(${index})" class="text-red-500">Remove</button>
    `;
    cartItems.appendChild(div);
  });
  cartTotal.textContent = `₹${total}`;


}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}
const checkoutBtn = document.querySelector(".checkout-btn");

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert("✅ Order placed successfully!");
  cart.length = 0; // Clear the cart
  updateCart();
  cartSidebar.classList.add("hidden"); // Optionally hide the cart
});


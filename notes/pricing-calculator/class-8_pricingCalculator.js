const priceInput = document.querySelector("#price");
const quantityInput = document.querySelector("#quantity");
const quantityDisplay = document.querySelector("#quantity-display")
const totalDisplay = document.querySelector(".total-price");

priceInput.addEventListener("input", calculateTotal)
quantityInput.addEventListener("input", calculateTotal)
quantityDisplay.innerText = quantityInput.value;

function calculateTotal() {
    quantityDisplay.innerText = quantityInput.value;
    const totalPrice = (priceInput.value * quantityInput.value).toFixed(2);
    totalDisplay.innerText = "$" + totalPrice
}
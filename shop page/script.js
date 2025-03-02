document.addEventListener("DOMContentLoaded", function () {
    const cartCount = document.querySelector(".sepet-sayisi");
    const addToCartButtons = document.querySelectorAll(".sepete-ekleme");

    let count = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            count++;
            cartCount.textContent = count;

            if (count >= 9) {
                cartCount.classList.add("red");
            } else {
                cartCount.classList.remove("red");
            }
        });
    });
});

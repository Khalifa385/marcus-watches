<script>
    let cart = [];
    let total = 0;

    function addToCart(name, price) {
        cart.push({name, price });
        total += price;
        updateCart();
    }

    function updateCart() {
        const cartItems = document.getElementById("cart-items");
        const cartTotal = document.getElementById("cart-total");

        cartItems.innerHTML = ""; // Clear previous list
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price}`;
            cartItems.appendChild(li);
        });

        cartTotal.textContent = total.toFixed(2);
    }
</script>

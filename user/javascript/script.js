let cart = [];

// Hàm lưu giỏ hàng vào Local Storage
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Hàm tải giỏ hàng từ Local Storage
function loadCart() {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    renderCart();
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(product, price) {
    const existingItem = cart.find(item => item.product === product);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        const item = {
            product: product,
            price: price,
            quantity: 1
        };
        cart.push(item);
    }

    saveCart();
    renderCart();
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(product) {
    cart = cart.filter(item => item.product !== product);
    saveCart();
    renderCart();
}

// Hàm hiển thị giỏ hàng
function renderCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    let totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `${item.product}: ${item.price} VNĐ x ${item.quantity} 
                        <button onclick="removeFromCart('${item.product}')">Xóa</button>`;
        cartItems.appendChild(li);
        totalPrice += item.price * item.quantity;
    });

    document.getElementById("total-price").textContent = totalPrice;
}

// Hàm thanh toán
document.getElementById("checkout").addEventListener("click", () => {
    if (cart.length > 0) {
        alert("Cảm ơn bạn đã thanh toán!");
        cart = [];
        saveCart(); // Lưu lại giỏ hàng sau khi thanh toán
        renderCart();
    } else {
        alert("Giỏ hàng của bạn trống!");
    }
});

// Gọi hàm loadCart khi trang được tải
loadCart();

// Thêm sản phẩm mẫu vào giỏ hàng
addToCart("Sản phẩm A", 100000);
addToCart("Sản phẩm B", 200000);

document.addEventListener('DOMContentLoaded', function () {

    function loadProducts() {
        fetch('products.php')
            .then(response => response.json())
            .then(products => {
                const productsGrid = document.querySelector('.products-grid');
                productsGrid.innerHTML = '';

                products.forEach(product => {
                    const productCard = document.createElement('div');
                    productCard.className = 'product-card';
                    productCard.setAttribute('data-category', product.category);
                    productCard.setAttribute('data-price', product.price);

                    // Format price with commas
                    const formattedPrice = new Intl.NumberFormat('en-IN').format(product.price) + ' Rs';

                    productCard.innerHTML = `
                    <img src="${product.image_url}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${formattedPrice}</p>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                `;

                    productsGrid.appendChild(productCard);
                });

                // Reattach event listeners to new buttons
                const addToCartButtons = document.querySelectorAll('.add-to-cart');
                addToCartButtons.forEach(button => {
                    button.addEventListener('click', addToCart);
                });
            })
            .catch(error => console.error('Error loading products:', error));
    }

    if (document.querySelector('.products-page')) {
        loadProducts();
    }



    // Cart functionality
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartCount();

    // Add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            alert(`Thank you for subscribing with ${email}!`);
            this.reset();
        });
    }

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Filter functionality on products page
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');

    if (categoryFilter && priceFilter) {
        categoryFilter.addEventListener('change', filterProducts);
        priceFilter.addEventListener('change', filterProducts);
    }

    function addToCart(e) {
        const productId = e.target.getAttribute('data-id');
        const productCard = e.target.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.replace(/[^0-9.]/g, ''));
        const productImage = productCard.querySelector('img').src;

        // Check if product already in cart
        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: productId,
                name: productName,
                price: productPrice,
                image: productImage,
                quantity: 1
            });
        }

        // Update cart in localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();

        // Show feedback
        const feedback = document.createElement('div');
        feedback.textContent = 'Added to cart!';
        feedback.style.position = 'fixed';
        feedback.style.bottom = '20px';
        feedback.style.right = '20px';
        feedback.style.backgroundColor = 'var(--primary-color)';
        feedback.style.color = 'white';
        feedback.style.padding = '10px 20px';
        feedback.style.borderRadius = '5px';
        feedback.style.zIndex = '1000';
        document.body.appendChild(feedback);

        setTimeout(() => {
            feedback.style.opacity = '0';
            setTimeout(() => feedback.remove(), 500);
        }, 2000);
    }

    function updateCartCount() {
        const cartCountElements = document.querySelectorAll('.cart-count');
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

        cartCountElements.forEach(element => {
            element.textContent = totalItems;
        });
    }

    function filterProducts() {
        const selectedCategory = categoryFilter.value;
        const selectedPrice = priceFilter.value;
        const products = document.querySelectorAll('.product-card');

        products.forEach(product => {
            const productCategory = product.getAttribute('data-category');
            const productPrice = parseFloat(product.getAttribute('data-price'));

            let categoryMatch = selectedCategory === 'all' || productCategory === selectedCategory;
            let priceMatch = selectedPrice === 'all' ||
                (selectedPrice === '0-2000' && productPrice <= 2000) ||
                (selectedPrice === '2000-3000' && productPrice > 2000 && productPrice <= 3000) ||
                (selectedPrice === '3000-5000' && productPrice > 3000 && productPrice <= 5000);

            if (categoryMatch && priceMatch) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const cartCount = document.getElementById('cart-count');
    const miniCart = document.getElementById('miniCart');
    const miniCartItems = document.getElementById('miniCartItems');
    const miniCartTotal = document.getElementById('miniCartTotal');
    const viewFullCartBtn = document.getElementById('viewFullCart');
    
    // Set home as active by default
    document.getElementById('home').style.display = 'block';
    
    // Navigation click handler
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href');
            showSection(sectionId);
        });
    });
    
    // Show specific section
    function showSection(sectionId) {
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        document.querySelector(`a[href="${sectionId}"]`).classList.add('active');
        
        // Hide all sections
        sections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Show the corresponding section
        document.querySelector(sectionId).style.display = 'block';
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
    
    // Shop button in hero section
    document.getElementById('shopBtn').addEventListener('click', function() {
        showSection('#shop');
    });
    
    // Collections button in hero section
    document.getElementById('collectionsBtn').addEventListener('click', function() {
        showSection('#collections');
    });
    
    // Continue shopping button in cart
    document.getElementById('continueShopping').addEventListener('click', function() {
        showSection('#shop');
    });
    
    // View full cart button in mini cart
    viewFullCartBtn.addEventListener('click', function() {
        showSection('#cart');
    });
    
    // Checkout button in cart
    document.getElementById('checkoutBtn').addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Your cart is empty. Please add some flowers first.');
            return;
        }
        
        // Validate checkout form
        const inputs = document.querySelectorAll('#checkoutForm input, #checkoutForm textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#ff6b6b';
            } else {
                input.style.borderColor = 'rgba(248, 244, 233, 0.3)';
            }
        });
        
        if (!isValid) {
            alert('Please fill in all required fields.');
            return;
        }
        
        const total = cart.reduce((sum, item) => {
            const price = parseInt(item.price.replace(/[^0-9]/g, ''));
            return sum + (price * item.quantity);
        }, 0);
        
        alert(`Your order is on its way! Total amount: PKR ${total.toLocaleString()}\n\nThank you for shopping with Blossom Haven!`);
        cart = [];
        updateCartCount();
        updateCartDisplay();
        updateMiniCart();
        showSection('#home');
    });
    
    // Flower data with PKR prices
    const flowers = [
        {
            id: 1,
            name: "Roses",
            price: "PKR 6,500",
            description: "A luxurious arrangement of garden roses in blush and cream tones, accented with delicate baby's breath and eucalyptus. Perfect for romantic occasions or as a special treat for yourself.",
            image: "images/rose.jpeg",
            season: "Year-round",
            size: "Medium (12-14\" diameter)",
            type: "bouquet"
        },
        {
            id: 2,
            name: "Sunflowers",
            price: "PKR 7,500",
            description: "Lush peonies in shades of coral and ivory, mixed with ranunculus and delicate greenery. These voluminous blooms create a stunning centerpiece that embodies the essence of spring.",
            image: "images/sunflower.jpeg",
            season: "Spring",
            size: "Large (16-18\" diameter)",
            type: "bouquet"
        },
        {
            id: 3,
            name: "Lilies",
            price: "PKR 4,200",
            description: "12 premium long-stemmed red roses, hand-tied with satin ribbon. The classic symbol of love and passion, perfect for anniversaries and romantic gestures.",
            image: "images/lilies.jpeg",
            season: "Year-round",
            size: "10 stems",
            type: "premium"
        },
        {
            id: 4,
            name: "Tulips",
            price: "PKR 5,800",
            description: "Fragrant oriental lilies in pink and white with lush greenery. Known for their intoxicating fragrance and large, showy blooms that make a dramatic statement.",
            image: "images/tulip.jpeg",
            season: "Summer",
            size: "Large (15-18\" diameter)",
            type: "bouquet"
        },
        {
            id: 5,
            name: "Daffodil",
            price: "PKR 3,800",
            description: "Vibrant mix of pink, yellow and purple tulips from Holland. These cheerful spring blooms bring color and happiness to any space.",
            image: "images/deffodils.jpeg",
            season: "Winter-Spring",
            size: "15 stems",
            type: "seasonal"
        },
        {
            id: 6,
            name: "Peony",
            price: "PKR 8,200",
            description: "Exotic phalaenopsis orchids in a ceramic vase. A sophisticated gift that lasts for weeks, perfect for corporate gifts or special occasions.",
            image: "images/peony.jpeg",
            season: "Year-round",
            size: "3 stems in vase",
            type: "premium"
        },
        {
            id: 7,
            name: "Carnation",
            price: "PKR 4,500",
            description: "Rustic bouquet featuring seasonal wildflowers, lavender sprigs, and textured foliage. This arrangement brings the charm of an English garden to your home.",
            image: "images/Carnation.jpeg",
            season: "Summer",
            size: "Medium (12-14\" diameter)",
            type: "premium"
        },
        {
            id: 8,
            name: "Orchid",
            price: "PKR 5,500",
            description: "24 premium roses in mixed colors with baby's breath. A generous bouquet that makes a grand gesture for birthdays, anniversaries or just because.",
            image: "images/orchids.jpeg",
            season: "Year-round",
            size: "24 stems",
            type: "premium"
        },
        {
            id: 9,
            name: "Lotus",
            price: "PKR 6,800",
            description: "Exotic tropical flowers including birds of paradise, anthurium, and tropical foliage. Brings a touch of the tropics to your home or office.",
            image: "images/lotus.jpeg",
            season: "Year-round",
            size: "Large (18-20\" diameter)",
            type: ""
        },
        {
            id: 10,
            name: "Dahlia",
            price: "PKR 7,200",
            description: "Lush white hydrangeas with eucalyptus in a glass vase. Elegant and timeless, perfect for weddings, formal events, or as a sophisticated centerpiece.",
            image: "images/Dahlia.jpeg",
            season: "Spring-Fall",
            size: "Large centerpiece",
            type: "seasonal"
        },
        {
            id: 11,
            name: "Dasises",
            price: "PKR 4,800",
            description: "Bright sunflowers with seasonal greens. These happy blooms bring warmth and cheer to any space, perfect for birthdays or to brighten someone's day.",
            image: "images/daisies.jpeg",
            season: "Summer-Fall",
            size: "Medium (12-14\" diameter)",
            type: "seasonal"
        },
        {
            id: 12,
            name: "Hydrangea",
            price: "PKR 3,500",
            description: "Vibrant carnations in mixed colors. Long-lasting and budget-friendly, these flowers are perfect for everyday occasions or when you need something beautiful that lasts.",
            image: "images/Hydrangea.jpeg",
            season: "Year-round",
            size: "20 stems",
            type: "seasonal"
        }
    ];

    // Collections data with PKR prices and local images
const collections = [
    {
        id: 101,
        name: "Wedding Collection",
        price: "Starting from PKR 12,000",
        image: "images/wedding.jpeg",
        description: "Elegant bridal bouquets and centerpieces for your special day. Our wedding collection features premium blooms arranged by our expert florists to create your dream wedding aesthetic.",
        season: "Year-round",
        size: "Various sizes available"
    },
    {
        id: 102,
        name: "Birthday Specials",
        price: "Starting from PKR 4,500",
        image: "images/birthday.jpeg",
        description: "Bright and cheerful arrangements perfect for celebrations. From fun and colorful to sophisticated and elegant, we have the perfect bouquet for every birthday.",
        season: "Year-round",
        size: "Medium to Large"
    },
    {
        id: 103,
        name: "Romantic Collection",
        price: "Starting from PKR 6,500",
        image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Perfect for anniversaries and special moments. Our romantic collection features lush roses, peonies, and other romantic blooms arranged to express your deepest feelings.",
        season: "Year-round",
        size: "Medium to Large"
    },
    {
        id: 104,
        name: "Corporate Gifts",
        price: "Starting from PKR 7,000",
        image: "images/coorporate.jpeg",
        description: "Sophisticated arrangements for business occasions. Impress clients and colleagues with our premium corporate floral arrangements, perfect for office decor or as executive gifts.",
        season: "Year-round",
        size: "Medium to Large"
    },
    {
        id: 105,
        name: "Sympathy Collection",
        price: "Starting from PKR 5,000",
        image: "images/sympathay.jpeg",
        description: "Thoughtful arrangements to express your condolences. Our sympathy flowers are designed to bring comfort during difficult times with serene and peaceful designs.",
        season: "Year-round",
        size: "Medium to Large"
    },
    {
        id: 106,
        name: "Get Well Soon",
        price: "Starting from PKR 4,500",
        image: "images/get well soon.jpeg",
        description: "Cheerful arrangements to brighten someone's recovery. Bright colors and happy blooms to lift spirits and bring warmth to hospital rooms or homes.",
        season: "Year-round",
        size: "Medium to Large"
    }
];

// Rest of the JavaScript remains exactly the same...

    // Cart system with quantities and total
    let cart = [];

    // DOM elements
    const flowersGrid = document.getElementById('flowersGrid');
    const collectionsGrid = document.getElementById('collectionsGrid');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalContent = document.getElementById('modalContent');
    const closeModal = document.getElementById('closeModal');
    const categoryButtons = document.querySelectorAll('.category-btn');

    // Policy modal elements
    const deliveryInfoBtn = document.getElementById('deliveryInfo');
    const returnPolicyBtn = document.getElementById('returnPolicy');
    const privacyPolicyBtn = document.getElementById('privacyPolicy');
    const termsConditionsBtn = document.getElementById('termsConditions');
    const deliveryInfoModal = document.getElementById('deliveryInfoModal');
    const returnPolicyModal = document.getElementById('returnPolicyModal');
    const privacyPolicyModal = document.getElementById('privacyPolicyModal');
    const termsConditionsModal = document.getElementById('termsConditionsModal');
    const closePolicyButtons = document.querySelectorAll('.close-policy');

    // Filter flowers by category
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            loadFlowers(category);
        });
    });

    // Load flowers with optional category filter
    function loadFlowers(category = 'all') {
        flowersGrid.innerHTML = '';
        
        const filteredFlowers = category === 'all' 
            ? flowers 
            : flowers.filter(flower => flower.type === category);
        
        filteredFlowers.forEach(flower => {
            const flowerCard = document.createElement('div');
            flowerCard.className = 'flower-card';
            flowerCard.innerHTML = `
                <div class="flower-img-container">
                    <img src="${flower.image}" alt="${flower.name}" class="flower-img">
                </div>
                <div class="flower-info">
                    <h3 class="flower-name">${flower.name}</h3>
                    <p class="flower-price">${flower.price}</p>
                    <span class="flower-type">${flower.type.charAt(0).toUpperCase() + flower.type.slice(1)}</span>
                    <button class="btn view-details">View Details</button>
                </div>
            `;
            
            flowerCard.addEventListener('click', function() {
                openModal(flower);
            });
            
            flowersGrid.appendChild(flowerCard);
        });
    }

    // Load collections
    function loadCollections() {
        collectionsGrid.innerHTML = '';
        collections.forEach(collection => {
            const collectionCard = document.createElement('div');
            collectionCard.className = 'collection-card';
            collectionCard.innerHTML = `
                <div class="collection-img-container">
                    <img src="${collection.image}" alt="${collection.name}" class="collection-img">
                </div>
                <div class="collection-info">
                    <h3 class="collection-name">${collection.name}</h3>
                    <p class="collection-price">${collection.price}</p>
                    <p>${collection.description}</p>
                    <button class="btn view-details">View Details</button>
                </div>
            `;
            
            collectionCard.addEventListener('click', function() {
                openModal(collection);
            });
            
            collectionsGrid.appendChild(collectionCard);
        });
    }

    // Open modal
    function openModal(product) {
        modalContent.innerHTML = `
            <div class="modal-img-container">
                <img src="${product.image}" alt="${product.name}" class="modal-img">
            </div>
            <div class="modal-info">
                <h3 class="modal-title">${product.name}</h3>
                <p class="modal-price">${product.price}</p>
                <p class="modal-desc">${product.description}</p>
                <div class="modal-details">
                    ${product.season ? `<p><strong>Season:</strong> ${product.season}</p>` : ''}
                    ${product.size ? `<p><strong>Size:</strong> ${product.size}</p>` : ''}
                    ${product.type ? `<p><strong>Type:</strong> ${product.type.charAt(0).toUpperCase() + product.type.slice(1)}</p>` : ''}
                </div>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        `;
        
        modalOverlay.classList.add('active');
        
        // Add to cart button in modal
        const addToCartBtn = modalContent.querySelector('.add-to-cart');
        addToCartBtn.addEventListener('click', function() {
            addToCart(product);
        });
    }

    // Add to cart
    function addToCart(product) {
        const existingItem = cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        updateCartCount();
        updateCartDisplay();
        updateMiniCart();
        
        // Visual feedback
        const addToCartBtn = modalContent.querySelector('.add-to-cart');
        addToCartBtn.textContent = 'Added to Cart!';
        addToCartBtn.style.background = 'linear-gradient(135deg, var(--sage-green), var(--peach-blush))';
        
        setTimeout(() => {
            addToCartBtn.textContent = 'Add to Cart';
            addToCartBtn.style.background = 'linear-gradient(135deg, var(--dusty-rose), var(--soft-lavender))';
        }, 2000);
    }

    // Update mini cart
    function updateMiniCart() {
        if (cart.length === 0) {
            miniCartItems.innerHTML = '<p>Your cart is empty</p>';
            miniCartTotal.textContent = 'PKR 0';
            return;
        }
        
        miniCartItems.innerHTML = '';
        let total = 0;
        
        cart.forEach((item, index) => {
            const priceNumber = parseInt(item.price.replace(/[^0-9]/g, ''));
            total += priceNumber * item.quantity;
            
            const miniItem = document.createElement('div');
            miniItem.className = 'mini-cart-item';
            miniItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" width="40" height="40">
                <div class="mini-cart-item-details">
                    <p>${item.name}</p>
                    <p class="mini-cart-item-price">${item.price} × ${item.quantity}</p>
                </div>
                <button class="remove-mini-item" data-index="${index}"><i class="fas fa-times"></i></button>
            `;
            
            miniCartItems.appendChild(miniItem);
        });
        
        miniCartTotal.textContent = `PKR ${total.toLocaleString()}`;
        
        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-mini-item').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const index = parseInt(this.getAttribute('data-index'));
                cart.splice(index, 1);
                updateCartCount();
                updateCartDisplay();
                updateMiniCart();
            });
        });
    }

    // Update cart count
    function updateCartCount() {
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = count;
    }

    // Update cart display
    function updateCartDisplay() {
        const cartItemsContainer = document.getElementById('cartItems');
        const cartTotalElement = document.getElementById('cartTotal');
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
            if (cartTotalElement) cartTotalElement.textContent = 'PKR 0';
            return;
        }

        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const priceNumber = parseInt(item.price.replace(/[^0-9]/g, ''));
            total += priceNumber * item.quantity;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">${item.price}</p>
                    <div class="quantity-controls">
                        <button class="quantity-btn minus" data-index="${index}">−</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn plus" data-index="${index}">+</button>
                    </div>
                </div>
                <button class="remove-item" data-index="${index}"><i class="fas fa-times"></i></button>
            `;
            
            cartItemsContainer.appendChild(cartItem);
        });

        if (cartTotalElement) {
            cartTotalElement.textContent = `PKR ${total.toLocaleString()}`;
        }

        // Add event listeners to cart controls
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                cart.splice(index, 1);
                updateCartDisplay();
                updateCartCount();
                updateMiniCart();
            });
        });

        document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                if (cart[index].quantity > 1) {
                    cart[index].quantity--;
                } else {
                    cart.splice(index, 1);
                }
                updateCartDisplay();
                updateCartCount();
                updateMiniCart();
            });
        });

        document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                cart[index].quantity++;
                updateCartDisplay();
                updateCartCount();
                updateMiniCart();
            });
        });
    }

    // Close modal
    closeModal.addEventListener('click', function() {
        modalOverlay.classList.remove('active');
    });

    // Close modal when clicking outside
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    });

    // Policy modal handlers
    deliveryInfoBtn.addEventListener('click', function(e) {
        e.preventDefault();
        deliveryInfoModal.classList.add('active');
    });

    returnPolicyBtn.addEventListener('click', function(e) {
        e.preventDefault();
        returnPolicyModal.classList.add('active');
    });

    privacyPolicyBtn.addEventListener('click', function(e) {
        e.preventDefault();
        privacyPolicyModal.classList.add('active');
    });

    termsConditionsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        termsConditionsModal.classList.add('active');
    });

    // Close policy modals
    closePolicyButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.policy-modal').forEach(modal => {
                modal.classList.remove('active');
            });
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will contact you soon.');
            this.reset();
        });
    }

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = '1rem 5%';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.4)';
        } else {
            header.style.padding = '1.5rem 5%';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        }
    });

    // Initialize
    loadFlowers();
    loadCollections();
    updateCartDisplay();
    updateMiniCart();
});
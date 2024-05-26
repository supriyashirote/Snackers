
// JavaScript
const gallery = document.getElementById('gallery');

// Sample data for images and their categories
const images = [
    { id: 1, name: 'Margherita Pizza', price: 10.00, src: './images/Pizza/Margherita_Pizza.png', category: 'pizza' },
    { id: 2, name: 'Spicy Chicken Sausage Pizza', price: 20.00, src: './images/Pizza/Spicy_Chicken_Sausage_Pizza.png', category: 'pizza' },
    { id: 3, name: 'Chicken Alfredo Pizza', price: 30.00, src: './images/Pizza/Chicken_Alfredo_Pizza.png', category: 'pizza' },
    { id: 4, name: 'Cheesy Chicken Pizza', price: 30.00, src: './images/Pizza/Cheesy_Chicken_Pizza.png', category: 'pizza' },
    { id: 5, name: 'Chicken Peri Peri Pizza', price: 30.00, src: './images/Pizza/Chicken_Peri_Peri_Pizza.png', category: 'pizza' },
    { id: 6, name: 'Chicken Supreme Pizza', price: 30.00, src: './images/Pizza/Chicken_Supreme_Pizza.png', category: 'pizza' },

    { id: 7, name: 'Pineapple Classic Cake', price: 10.00, src: './images/cake/Pineapple_Classic_Cake.png', category: 'cake' },
    { id: 8, name: 'Black Forest Classic Cake', price: 20.00, src: './images/cake/Black_Forest_Classic_Cake.png', category: 'cake' },
    { id: 9, name: 'Butterscotch Classic Cake', price: 20.00, src: './images/cake/Butterscotch_Classic_Cake.png', category: 'cake' },
    { id: 10, name: 'Blue Berry Premium Cake', price: 20.00, src: './images/cake/Blue_Berry_Premium_Cake.png', category: 'cake' },
    { id: 11, name: 'Chocolate Fantasy Premium Cake', price: 20.00, src: './images/cake/Chocolate_Fantasy_Premium_Cake.png', category: 'cake' },
    { id: 12, name: 'Chocolate Truffle Premium Cake', price: 20.00, src: './images/cake/Chocolate_Truffle_Premium_Cake.png', category: 'cake' },

    { id: 13, name: 'Paneer Parantha Thali', price: 325.00, src: './images/thali/Paneer_Parantha_Thali.png', category: 'thali' },
    { id: 14, name: 'Paneer Bhurji Parantha Thali', price: 345.00, src: './images/thali/Paneer_Parantha_Thali.png', category: 'thali' },
    { id: 15, name: 'Amritsari Naan Thali', price: 255.00, src: './images/thali/Amritsari_Naan_Thali.png', category: 'thali' },
    { id: 16, name: 'Shahjis Special Thali', price: 385.00, src: './images/thali/Shahjis_Special_Thali.png', category: 'thali' },
    { id: 17, name: 'Veg Dilliwala Parantha Thali', price: 255.00, src: './images/thali/Veg_Dilliwala_Parantha_Thali.png', category: 'thali' },
    { id: 18, name: 'Deluxe Thali', price: 250.00, src: './images/thali/Deluxe_Thali.png' },

    { id: 19, name: 'Chicken Handi', price: 756.00, src: './images/chicken/Chicken_Handi.png', category: 'chicken' },
    { id: 20, name: 'Chicken Curry', price: 353.00, src: './images/chicken/Chicken_Curry.png', category: 'chicken' },
    { id: 21, name: 'Chicken Rassa Handi', price: 756.00, src: './images/chicken/Chicken_Rassa_Handi.png', category: 'chicken' },
    { id: 22, name: 'Chicken Roast', price: 150.00, src: './images/chicken/Chicken_Roast.png', category: 'chicken' },
    { id: 23, name: 'Chicken Tandoori', price: 333.00, src: './images/chicken/Chicken_Tandoori.png', category: 'chicken' },
    { id: 24, name: 'Chicken Pahadi', price: 305.00, src: './images/chicken/Chicken_Pahadi.png', category: 'chicken' },

    // Add more image data as needed
];

// Function to create gallery items
function createGalleryItem(image) {
    const item = document.createElement('div');
    item.classList.add('item', 'col-12', 'col-md-3', 'col-lg-4', image.category);
    const productCard = `
  <div class="col">
      <div class="card">
          <img src=${image.src} class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${image.name}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div class="card-footer mb-2">
                  $ ${image.price}
              </div>
              <div class="d-flex">
              <a href="./wishlist.html" class="wishlist-btn"  onclick="addToWishlist(${image.id})">Add Wishlist</a>
               <a href="./cart.html" class="add-to-cart-btn" onclick="addToCart(${image.id})">Add to Cart</a>
               
              </div>
          </div>
      </div>
  </div>
`;
    item.innerHTML += productCard;
    //   item.innerHTML = `<div class="card"><img src="${image.src}" class="card-img-top" alt="${image.name}"> <button class="wishlist-btn">Add Wishlist</button>
    //                  <button class="add-to-cart-btn">Add to Cart</button></div>`;
    gallery.appendChild(item);
}

// Function to filter items
function filterItems(filter) {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Populate gallery with images
images.forEach(image => {
    createGalleryItem(image);
});

// Add event listener to filter buttons
const buttons = document.querySelectorAll('.filter-btn');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
        const filterValue = this.getAttribute('data-filter');
        filterItems(filterValue);
    });
});
// JavaScript
let wishlist = document.getElementById('wishlist');
function addToWishlist(productId) {
    // Check if the product already exists in the wishlist
    // Retrieve wishlist items from sessionStorage
    var storedJsonStr = sessionStorage.getItem('wishlist');

    // Parse JSON string back to array
    wishlist = storedJsonStr ? JSON.parse(storedJsonStr) : [];

    // Find the product from the product array
    const product = images.find(prod => prod.id === productId);
    if (product) {
        var storedJsonStr = sessionStorage.getItem('wishlist');
        console.log(storedJsonStr);
        wishlist = sessionStorage.getItem('wishlist') ? wishlist = JSON.parse(storedJsonStr) : [];

        if (!wishlist.find(item => item.id === productId)) {
            wishlist.push(product);
            sessionStorage.setItem('wishlist', JSON.stringify(wishlist));
        }

        var storedJsonStr = sessionStorage.getItem('wishlist');
        console.log(JSON.parse(storedJsonStr));


    }
}
function removeFromWishlist(productId) {

    // Retrieve wishlist items from sessionStorage
    var storedJsonStr = sessionStorage.getItem('wishlist');

    // Parse JSON string back to array
    var wishlist = storedJsonStr ? JSON.parse(storedJsonStr) : [];
    console.log(wishlist)
    // Find index of product with given productId in wishlist array
    const index = wishlist.findIndex(item => item.id === productId);
    // Check if the product exists in the wishlist
    if (index !== -1) {
        // Remove the product from the wishlist array
        wishlist.splice(index, 1);
        // Update sessionStorage with the modified wishlist array
        sessionStorage.setItem('wishlist', JSON.stringify(wishlist));
    }

    var storedJsonStr = sessionStorage.getItem('wishlist');
    console.log(JSON.parse(storedJsonStr));
    displayWishlist();

}
function displayWishlist() {
    console.log('hi')
    // Get the container for the cart items
    const wishListItems = document.getElementById('wishlist');
    // Clear previous content
    wishListItems.innerHTML = '';

    // Retrieve cart items from sessionStorage
    let storedJsonStr = sessionStorage.getItem('wishlist');
    // Parse JSON string back to array
    // If sessionStorage contains 'cartItems', it means there are items in the cart stored as JSON string.
    // We use JSON.parse() to convert the JSON string back into a JavaScript array.

    let wishlist1 = JSON.parse(storedJsonStr);
    console.log('wishlist1', wishlist1);

    // Loop through each item in the cartItems array
    wishlist1.forEach(item => {
        const wishlistCard = `
        <div class="col-12 col-md-3 col-lg-4">
            <div class="col">
                <div class="card">
                    <!-- Product title and description -->
                    <img src=${item.src} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="card-footer mb-2">
                         $ ${item.price}
                        </div>
                        <div class="d-flex">
                            <a href="./cart.html" class="add-to-cart-btn" onclick="addToCart(${item.id})">Add to cart</a>
                            <a href="./wishlist.html" class="remove-from-wishlist" onclick="removeFromWishlist(${item.id})">Remove Wishlist</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        // Append the HTML markup to the container
        wishListItems.innerHTML += wishlistCard;
    });

}

function searchProduct(event){   
    event.preventDefault(); // Prevent the default form submission behavior

    const searchInput = document.getElementById("searchItem");
    const searchItem = searchInput.value.trim().toLowerCase();

    matchedProducts = images.filter(product => product.name.toLowerCase() === searchItem);
    console.log(matchedProducts);
    displaySearchedProducts(matchedProducts);
    
}

function displaySearchedProducts(matchedProducts){
   
    const productList = document.getElementById('gallery');
    console.log('productList', productList);
    productList.innerHTML = '';
    
    matchedProducts.forEach(product => {
        // Check if the product is in the wishlist    
       console.log('test');
        const productCard = `
        <div class="item col-12 col-md-3 col-lg-4 ${product.category}">
            <div class="col">
                <div class="card">
                    <img src=${product.src} class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="card-footer mb-2">
                            $ ${product.price}
                        </div>
                        <div class="d-flex">
                            <a href="#" class="btn btn-primary" onclick="addToCart(${product.id})">Add to cart</a>
                            <a href="#" class="btn btn-secondary" onclick="addToWishlist(${product.id})">Wishlist</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        `;
        productList.innerHTML += productCard;
    })


}


function addToCart(productId){
    let cartItems =[];
    const product = images.find(prod => prod.id === productId);
        if (product) {
            var storedJsonStr  = sessionStorage.getItem('cartItems');
            console.log(storedJsonStr);
            if(storedJsonStr===null){
                cartItems = []; 
            }
            else{
                cartItems = JSON.parse(storedJsonStr);               
            }

            // Check if the product already exists in cartItems
        const existingProductIndex = cartItems.findIndex(item => item.id === productId);
        if (existingProductIndex !== -1) {
            // If the product already exists, increase its quantity
            cartItems[existingProductIndex].quantity++;
        } else {
            // If the product is being added for the first time, set its quantity to 1
            const newCartItem = {
                ...product, // Spread operator to copy existing product properties
                quantity: 1 // Add quantity property
            };
            // Push the new cart item object into the cartItems array
            cartItems.push(newCartItem);
        }
    
            // Update sessionStorage with the modified cartItems array
            // Convert the cartItems array to JSON string
        var jsonCartItems = JSON.stringify(cartItems);
        sessionStorage.setItem('cartItems', jsonCartItems);

        // Log the updated cartItems array
        console.log(cartItems);
           
        }

        
}

function displayCart(){
   // Get the container for the cart items
    const cartList = document.getElementById("cart-items");
    // Clear previous content
    cartList.innerHTML = '';

   // Retrieve cart items from sessionStorage
    let storedJsonStr  = sessionStorage.getItem('cartItems');
    console.log('storedJsonStr',storedJsonStr);
    // Parse JSON string back to array
    // If sessionStorage contains 'cartItems', it means there are items in the cart stored as JSON string.
    // We use JSON.parse() to convert the JSON string back into a JavaScript array.

    let cartItems1 = JSON.parse(storedJsonStr);

    // Loop through each item in the cartItems array
    cartItems1.forEach(item =>{
        const cartCard = `
        <div class="card mb-3"> 
        <div class="row g-0">
            <div class="col-md-4">
                <img src=${item.src} class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">Description of the product goes here.</p>
                    <p class="card-text"><small class="text-muted">${item.price}</small></p>
                    <div class="btn-group" role="group" aria-label="Quantity">
                        <button type="button" class="btn btn-secondary" onclick="decreaseQuantity(${item.id})">-</button>
                        <span id="quantity-${item.id}">${item.quantity}</span>
                        <button type="button" class="btn btn-secondary" onclick="increaseQuantity(${item.id})">+</button>
                    </div>
                    <button class="btn btn-danger" onclick="removeItem(${item.id})">Remove</button>
                </div>
            </div>
        </div>
    </div>
        `;
        // Append the HTML markup to the container
        cartList.innerHTML += cartCard;
    });

    calculateCartTotal(cartItems1);
};

// Function to increase quantity
function increaseQuantity(itemId) {
    // Retrieve cart items from sessionStorage
    var storedJsonStr = sessionStorage.getItem('cartItems');
    if (storedJsonStr === null) {
        return; // Cart is empty, nothing to increase
    }

    // Parse JSON string back to array
    var cartItems = JSON.parse(storedJsonStr);

    // Find the index of the item in cartItems array
    const itemIndex = cartItems.findIndex(item => item.id === itemId);

    // If item not found, return
    if (itemIndex === -1) {
        return;
    }

    // Increase the quantity for the item with the given id
    cartItems[itemIndex].quantity++;

    // Update sessionStorage with the modified cartItems array
    var jsonCartItems = JSON.stringify(cartItems);
    sessionStorage.setItem('cartItems', jsonCartItems);    
    // Refresh the displayed cart
    displayCart();
   
}

// Function to decrease quantity
function decreaseQuantity(itemId) {
    // Retrieve cart items from sessionStorage
    var storedJsonStr = sessionStorage.getItem('cartItems');
    if (storedJsonStr === null) {
        return; // Cart is empty, nothing to decrease
    }

    // Parse JSON string back to array
    var cartItems = JSON.parse(storedJsonStr);

    // Find the index of the item in cartItems array
    const itemIndex = cartItems.findIndex(item => item.id === itemId);

    // If item not found, return
    if (itemIndex === -1) {
        return;
    }

    // Decrease the quantity for the item with the given id
    if (cartItems[itemIndex].quantity > 1) {
        cartItems[itemIndex].quantity--;
    }

    // Update sessionStorage with the modified cartItems array
    var jsonCartItems = JSON.stringify(cartItems);
    sessionStorage.setItem('cartItems', jsonCartItems);

   
    // Refresh the displayed cart
    displayCart();
    
}

function calculateCartTotal(cartItems){
    let totalprice = 0;
    cartItems.forEach(item =>{
        totalprice += item.price * item.quantity;
    })
    console.log(totalprice);

    document.getElementById('sub-total').innerText = '$' + totalprice;
    document.getElementById('total').innerText = '$' + totalprice;
}

function removeItem(productId) {
    // Retrieve cart items from sessionStorage
    var storedJsonStr = sessionStorage.getItem('cartItems');

    // Parse JSON string back to array
    var cartItems = storedJsonStr ? JSON.parse(storedJsonStr) : [];

    // Find index of product with given productId in cartItems array
    const index = cartItems.findIndex(item => item.id === productId);

    // If product with given productId is found, remove it from cartItems array
    if (index !== -1) {
        cartItems.splice(index, 1);

        // Update sessionStorage with the modified cartItems array
        var jsonCartItems = JSON.stringify(cartItems);
        sessionStorage.setItem('cartItems', jsonCartItems);

        // Log the updated cartItems array
        console.log(cartItems);
        calculateCartTotal(cartItems);
        displayCart();
    }
}

function displaycheckout(){
    // Get the container for the cart items
     const checkoutList = document.getElementById("checkout-items");
     // Clear previous content
     checkoutList.innerHTML = '';
 
    // Retrieve cart items from sessionStorage
     let storedJsonStr  = sessionStorage.getItem('cartItems');
     console.log('storedJsonStr',storedJsonStr);
     let checkoutItem = JSON.parse(storedJsonStr);
 
     // Loop through each item in the cartItems array
     checkoutItem.forEach(item =>{
         const checkoutCard = `
         <div class="checkout-details"> 
                 <img src=${item.src} class="img-fluid rounded-start" alt="...">
             
                 <div class="checkout-body">
                     <h5 class="card-title">${item.name} * ${item.quantity}</h5>
                     <span id="item-total-${item.name.replace(/\s+/g, '-')}">$${item.quantity * item.price}</span>
                     </div>
                 </div>
     </div>
         `;
         // Append the HTML markup to the container
         checkoutList.innerHTML += checkoutCard;
     });
 
     calculatecheckoutTotal(checkoutItem);
 };
 function calculatecheckoutTotal(checkoutItem){
    let totalprice = 0;
    checkoutItem.forEach(item =>{
        totalprice += item.price * item.quantity;
    })
    
    document.getElementById('sub-total').innerText = '$' + totalprice;
    document.getElementById('total').innerText = '$' + totalprice;
}
function validateForm() {
    showThankYouMessage();

    return false; // Prevent default form submission
  }
  function showThankYouMessage() {
    document.getElementById("checkoutForm").style.display = "none";
    document.getElementById("checkout-data").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";
  }

  function removeItemFromCart() {
    sessionStorage.clear();
  }

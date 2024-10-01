// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
    const cartCounter = document.getElementById('count_product')

    const desiredProduct = products.find((product) => {
        return product.id === id;
    })

    if(cart.some(product => product == desiredProduct)) {
        desiredProduct.quantity++;
        alert(`${desiredProduct.quantity} ${desiredProduct.name}`)
    } else {
        desiredProduct.quantity = 1
        cart.push(desiredProduct)
        alert(`Nuevo producto añadido!`)
    }
    
    cartCounter.innerText = parseInt(cartCounter.innerText) + 1 
    
}

// Exercise 2
function cleanCart() {
    cart = [];
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    cart.map(item => {
        total += item.price
    })
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    cart.map(item => {
        if(item.name == 'cooking oil' && item.quantity >= 3) {
            item.subtotalWithDiscount = (item.price) - (item.price * 0.2)
            console.log(item.subtotalWithDiscount)
        } else if (item.name == 'Instant cupcake mixture' && item.quantity >= 10){
            item.subtotalWithDiscount = (item.price) - (item.price * 0.3)
            console.log(item.price)
        }
    })

}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}
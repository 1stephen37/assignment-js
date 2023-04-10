var products = [
    {
        id: 1,
        name: "BERRY LACE DRESS BERRY LACE DRESS",
        quantity: 1,
        price: 29
    },
    {
        id: 2,
        name: "BERRY LACE DRESS BERRY LACE DRESS",
        quantity: 1,
        price: 19.00
    },
    {
        id: 3,
        name: "BERRY LACE DRESS BERRY LACE DRESS",
        quantity: 1,
        price: 39.00
    },
    {
        id: 4,
        name: "BERRY LACE DRESS BERRY LACE DRESS",
        quantity: 1,
        price: 49.00
    },
    {
        id: 5,
        name: "BERRY LACE DRESS BERRY LACE DRESS",
        quantity: 1,
        price: 59.00
    },
    {
        id: 6,
        name: "BERRY LACE DRESS BERRY LACE DRESS",
        quantity: 1,
        price: 9.00
    },
    {
        id: 7,
        name: "BERRY LACE DRESS BERRY LACE DRESS",
        quantity: 1,
        price: 70.00
    },
    {
        id: 8,
        name: "BERRY LACE DRESS BERRY LACE DRESS",
        quantity: 1,
        price: 79.00
    },
    {
        id: 9,
        name: "BERRY LACE DRESS BERRY LACE DRESS",
        quantity: 1,
        price: 100.00
    }

]

var cart = [];

function addToCart(index) {
    var check = true;
    var id = id(index);
    // console.log(id);
    if (cart.length > 0) {
        for (var i in cart) {
            if (cart[i].id == id) {
                cart[i].quantity += 1;
                check = false;
            }
        }
    }
    if (check) {
        cart.push(products[index]);
    }
    // document.getElementById("countCart").innerHTML = cart.length;
    //save my cart and var cart to localStorage in browser
    localStorage.setItem("saveCart", JSON.stringify(cart));
    // console.log(cart);


    function id(index) {
        return products[index].id;
    }
    function count() {
        if (cart.length > 0) {
            var count1 = document.querySelector("#header .nav .shop #count");
            count1.innerHTML = cart.length;
            console.log(cart.length);
        }
    }
    count();
}

function getlink() {
    var link = document.querySelector("#header .nav .shop i");
    link.action = "/assignment/shopping-cart.html";
}

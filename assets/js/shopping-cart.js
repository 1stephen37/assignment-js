var cart = JSON.parse(localStorage.getItem("saveCart"));

function inner() {
    var place = document.getElementById("write");
    console.log(place);
    var otp = "";
    for (var i in cart) {
        otp += `
        <div class="row">
    
                            <div class="col">
                                <div class="img-col">
                                    <img src="assets/img/product/model${cart[i].id}.jpg" alt="">
                                </div>
                            </div>
    
                            <div class="col">
                                <h4>	
                                    Cool green dress with red bell
                                </h4>
                                <p><a>Item 1</a> - Color: Green; Size: S 
                                    More info is here</p>
    
                            </div>
                            <div class="col">
                                <p>javc2133</p>
                            </div>
                            <div class="col">
                                <div class="count">
    
                                    <div class="right"> 
                                        <div id="number" class="number">${cart[i].quantity}</div>
                                    </div>
    
                                    <div class="left">
                                        <div class="on" onclick="up(${i});">
                                            <i class="ti-angle-up"></i>
                                        </div>
                                        <div class="in" onclick="down(${i});">
                                            <i class="ti-angle-down"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <p class="red-color">${cart[i].price} $</p>
                            </div>
                            <div class="col ">
                                <p class="red-color">${cart[i].price * cart[i].quantity}$</p>
                            </div>
                         
                           
    
                        </div> 

        `

        place.innerHTML = otp;
    }




}


function total1() {
    var sum = 0;
    for (var i in cart) {
        sum += cart[i].price * cart[i].quantity;
        
    }
    var total = document.getElementById('total');
    total.innerHTML = "Total: " + sum;
}

function down(index) {
    console.log(index);
    cart[index].quantity -= 1;
    if(cart[index].quantity == 0) {
        dele(index);
    }
    localStorage.setItem("saveCart", JSON.stringify(cart));
    location.reload();
}

function up(index) {
    cart[index].quantity += 1;
    localStorage.setItem("saveCart", JSON.stringify(cart));
    location.reload();
}

function dele(index) { 
    cart.splice(index,1);
    localStorage.setItem("saveCart", JSON.stringify(cart));
    location.reload();
}

function count() {
    if (cart.length > 0) {
        var count1 = document.querySelector("#header .nav .shop #count");
        count1.innerHTML = cart.length;
        console.log(cart.length);
    }
}


count();



total1();




inner();
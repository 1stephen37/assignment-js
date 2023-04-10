function link_to_cart() {
    var link = document.getElementById("cart");
    console.log(link);
}


var img = document.getElementById("img");
var img_1 = document.createElement("img-1");
var img_2 = document.createElement("img-2");
var img_3 = document.createElement("img-3");
var link = [];

for (var i = 1; i <= 5; i++) {
    link[i] = "assets/img/product/model" + i + ".jpg";
}

function anh1() {
    console.log(link[3]);
    document.getElementById("img").src = link[3];
}

function anh2() { 
    console.log(link[4]);
    document.getElementById("img").src = link[4];
}

function anh3() { 
    console.log(link[5]);
    document.getElementById("img").src = link[5];
}

function back_img() {
    document.getElementById("img").src = link[1];
}

setInterval(back_img, 20000);















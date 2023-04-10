var anh = [];

var index = 0;
function slider() {
  if (index == 0) {
    index++;
    document.getElementById("img").src = "assets/img/slider/slide2.jpg";
  } else if(index == 1) { 
    document.getElementById("img").src = "assets/img/slider/slide3.jpg";
    index++;
  } else {
    index = 0;
    document.getElementById("img").src = "assets/img/slider/slide1.jpg";
  }
}


setInterval(() => {
  slider();
}, 2000);

var nbg = 0;
function next() {
  if (nbg < 4) {
    document.getElementById("slider").src = "assets/img/slider/bg" + nbg + ".jpg";
    nbg++;
  }  else {
    nbg = 0;
    document.getElementById("slider").src = "assets/img/slider/bg0.jpg";
  }
}

var bbg = 4;
function back() {
  if(bbg > 0) {
    bbg--;
    document.getElementById("slider").src = "assets/img/slider/bg" + bbg + ".jpg";
  }
  else {
    bbg = 4;
    document.getElementById("slider").src = "assets/img/slider/bg0.jpg";
  }  
}

var show = document.querySelectorAll(".content-1 .box-5 .box .show ");
var img = document.querySelectorAll(".content-1 .box-5 .box img ");
for(var index in img) {
  img[index].addEventListener("hover",sub_show(index))
}
// function show() {
//     for(var index in img) {
//       console.log(index);
//       img[index].addEventListener("hover",sub_show(index))
//     }
// }
function sub_show(index) {
  // show[index].style.display = "block";
  console.log(show[index]);
}



// setInterval(show, 1000);


// function back() {
//   if (index > 0) {
//     index--;
//     document.getElementById("img").src = anh[index].src;
//   } else {
//     index = 3;
//     document.getElementById("img").src = anh[index].src;
//   }
// }


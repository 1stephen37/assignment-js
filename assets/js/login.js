var information = JSON.parse(localStorage.getItem("infor"));

var fname = document.getElementById("name");

fname.innerHTML = information[0].name;

var lname = document.getElementById("lname");

lname.innerHTML = information[0].lname;

var email = document.getElementById("email");

email.innerHTML = information[0].email;

var phone = document.getElementById("phone");

phone.innerHTML = information[0].phone;

var age = document.getElementById("age");

age.innerHTML = information[0].age;


var country = document.getElementById("country");

country.innerHTML = information[0].country;
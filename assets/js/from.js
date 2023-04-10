var array = [];
var user = {};

function submit() { 
    var checkName = document.forms["form-log"]["name"].value;
    var checklname = document.forms["form-log"]["lname"].value;
    var checkmail = document.forms["form-log"]["mail"].value;
    var checkphone = document.forms["form-log"]["numerPhone"].value;
    var checkgcountry = document.forms["form-log"]["country"].value;
    var checkage = document.forms["form-log"]["age"].value;
    var alet = document.querySelector(".items .box-item .form .noti");
    

    var check1 = false;
    var check2 = false;
    var check3 = false;
    var check4 = false;
    var check6 = false;

    if(checkName == "" ) {
        alert("first name cannot be left blank");
        check1 = false; 
    } else if(checkName > 0 || checkName < 0 ) {
        alert("first name must be character");
        check1 = false;
    } else {
        check1 = true;
    }

    if(checklname == "" ) {
        alert("The last name cannot be left blank");
        check2 = false; 
    } else if(checklname > 0 || checklname < 0 ) {
        alert("last name must be character");
        check2 = false;
    } else {
        check2 = true;
    }

    if(checkmail == "" ) { 
        alert("Email cannot be left blank");
        check3= false;
    } else if(checkmail > 0 || checkmail < 0 ) { 
        alert("Email must be character");
        check3= false;
    } else {
        if(checkmail.lastIndexOf("@") == -1) {
            alert("Email must be have @ character");
            check3= false;
        } else if(checkmail.lastIndexOf(".") == -1) {
            alert("Email must be have dot");
            check3= false;
        } 
        else {
            check3= true;
        }
    }

    if(checkphone == "" ) { 
        alert("Phone number information cannot be left blank");
        check4 = false;
    } else {
        check4 = true;
    }
    
    if(checkage == "" ) { 
        alert("age number information cannot be left blank");
        check6 = false;
    } else if(checkage < 0 || checkage > 120) {
        alert("age number must be between 0 and 120");
        check6 = false;
    } else {
        check6 = true;
    }

    if(check1 && check2 && check3 && check4 & check6 ) {
        alet.innerHTML = "<a href='login.html' >your account resgister</a>";
        user = {
            name: checkName,
            lname: checklname,
            email: checkmail,
            phone: checkphone,
            age: checkage,
            country: checkgcountry,
        }
        array.push(user);
        localStorage.setItem("infor", JSON.stringify(array));
    } else {
        alet.innerHTML = "<a>create account failed</a>"; 
    }
}



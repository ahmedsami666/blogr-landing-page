var product = document.getElementsByClassName("item1")[0];
var company = document.getElementsByClassName("item2")[0];
var connect = document.getElementsByClassName("item3")[0];

var productList = document.getElementsByClassName("Product")[0];
var companyList = document.getElementsByClassName("Company")[0];
var connectList = document.getElementsByClassName("Connect")[0];

var hamburger = document.querySelectorAll(".hamburger")[0]
var menu = document.querySelectorAll(".hidden-menu")[0]

var ProductMenu = document.querySelectorAll(".item1-menu")[0]
var CompanyMenu = document.querySelectorAll(".item2-menu")[0]
var ConnectMenu = document.querySelectorAll(".item3-menu")[0]

var productListHidden = document.querySelectorAll(".Product-menu")[0]
var CompanyListHidden = document.querySelectorAll(".Company-menu")[0]
var ConnectListHidden = document.querySelectorAll(".Connect-menu")[0]


product.addEventListener("click", function(){
    product.firstElementChild.classList.add("item-span1");
    product.getElementsByTagName("img")[0].classList.add("item-img1")
    productList.classList.add("found")
})

company.addEventListener("click", function(){
    company.firstElementChild.classList.add("item-span2");
    company.getElementsByTagName("img")[0].classList.add("item-img2")
    companyList.classList.add("found")
})

connect.addEventListener("click", function(){
    connect.firstElementChild.classList.add("item-span2");
    connect.getElementsByTagName("img")[0].classList.add("item-img2")
    connectList.classList.add("found")
})
var i = 0 
hamburger.addEventListener("click", function(){
    if (i % 2 === 0){
        menu.classList.add("menu")
        hamburger.src = "./images/icon-close.svg"
        i++
    }else {
        menu.classList.remove("menu")
        hamburger.src = "./images/icon-hamburger.svg"
        i++
    }
})
var x = 0
ProductMenu.addEventListener("click", function(){
    if (x % 2 === 0){
        productListHidden.classList.add("menu-list")
        x++
    }else{
        productListHidden.classList.remove("menu-list")
        x++
    }
})
var y = 0
CompanyMenu.addEventListener("click", function(){
    if (y % 2 === 0){
        CompanyListHidden.classList.add("menu-list")
        y++
    } else {
        CompanyListHidden.classList.remove("menu-list")
        y++
    }
})
var z = 0
ConnectMenu.addEventListener("click", function(){
    if (z % 2 === 0){
        ConnectListHidden.classList.add("menu-list")
        z++
    } else {
        ConnectListHidden.classList.remove("menu-list")
        z++
    }
})
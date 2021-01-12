const linkProduct = "http://localhost:8080/api/products?size=100";
const linkCategories = "http://localhost:8080/api/categories";
let menu = document.getElementById("menu");
let categories = document.getElementById("categories");
let products;
let cate;
var shoppingCartItems = [];
let total = 0;
let cart = document.getElementById("cart");
async function load() {
    let productsFetch = await fetch(linkProduct);
    let categooriesFetch = await fetch(linkCategories);

    products = await productsFetch.json();
    cate = await categooriesFetch.json();
    menu.innerHTML = "";
    menu.innerHTML = createProduct(products);
    categories.innerHTML = createCategories(cate);
    if (sessionStorage["shopping-cart-items"] != null) {
        shoppingCartItems = JSON.parse(sessionStorage["shopping-cart-items"].toString());
        if (shoppingCartItems.length > 0) {
            for (item of shoppingCartItems) {
                total += item.quantityOrder;
            }

        }
    }
    // console.log(createProduct(products));
}

function createProduct(listProduct) {
    let stringHTML = "";
    for (let ob of listProduct) {
        let image = "";
        if (ob.imageUrl) {
            image = ob.imageUrl;
        } else {
            image = "https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/5ee86c4891ab1a0012829000_coffee-cf--Daknong-app.jpg";
        }
        stringHTML += "<div class=\"col-md-4 d-flex\">";
        stringHTML += "<div class=\"product ftco-animate\">";
        stringHTML += "<div class=\"img d-flex align-items-center justify-content-center\" style=\"background-image: url(\'" + image + "\')\">";
        // stringHTML += "<img class =\"img\" src=\"" + image + "\">";
        stringHTML += "<div class=\"desc\">";
        stringHTML += "<p class=\"meta-prod d-flex\">";
        stringHTML += "                <button type=\"button\" class=\"btn btn-primary d-flex align-items-center justify-content-center\" data-toggle=\"modal\" data-target=\"#staticBackdrop\"><span class=\"flaticon-shopping-bag\"></span></button>";
        stringHTML += "      <button type=\"button\" class=\"btn btn-primary d-flex align-items-center justify-content-center\" data-toggle=\"modal\" data-target=\"#staticBackdrop\"><span class=\"flaticon-heart\"></span></button>";
        stringHTML += "<button type=\"button\" class=\"btn btn-primary d-flex align-items-center justify-content-center\" onclick=\"showmodal(" + ob.id + ")\" data-toggle=\"modal\" data-target=\"#staticBackdrop\"><span class=\"flaticon-visibility\"></span></button>";
        stringHTML += " </p>";
        stringHTML += "</div>";
        stringHTML += "</div>";
        stringHTML += "<div class=\"text text-center\">";

        // stringHTML += "<span class=\"" + ob.cagories[0].name + "\">Brandy</span>";
        stringHTML += "<h2>" + ob.name + "</h2>";
        stringHTML += "<p class=\"mb-0\"> <span class=\"price\">" + ob.price + "</span></p>";
        stringHTML += "</div>";
        stringHTML += "</div>";
        stringHTML += "</div>";
    }

    return stringHTML;
}

function createCategories(listCategories) {
    let stringHTML = "";
    for (let ob of listCategories) {
        stringHTML += "<li><a href=\"\">" + ob.name + "  <span class=\"fa fa-chevron-right\"></span></a></li>";
    }
    return stringHTML;
}

function showmodal(id) {

    for (const ob of products) {
        // console.log(ob);
        if (ob.id == id) {
            console.log(ob);
            document.getElementById("modalimg").setAttribute("src", ob.imageUrl);
            document.getElementById("staticBackdropLabel").innerHTML = ob.name;
            document.getElementById("description").innerHTML = ob.description;
            document.getElementById("modalprice").innerHTML = ob.price;
            break;
        }
    }
}
var productOrder = {
    id: "",
    name: "",
    image: "",
    priceBase: 0,
    size: "",
    indexSize: -1,
    priceSize: 0,
    topping: [],
    note: "",
    quantityOrder: 1,



};

function add_to_cart() {
    let isExist = false;

    for (index in shoppingCartItems) {

        if (productOrder.id == shoppingCartItems[index].id) {
            let item = {};
            isExist = true;
            total -= shoppingCartItems[index].quantityOrder;
            item = JSON.parse(JSON.stringify(productOrder));
            total += productOrder.quantityOrder;
            shoppingCartItems.slice(index, 1, item);
            break;
        }
    }

    if (isExist == false) {

        shoppingCartItems.push(JSON.parse(JSON.stringify(productOrder)));
        for (item of shoppingCartItems) {
            console.log(item.name);
        }
        total += productOrder.quantityOrder;
    }
    // Lưu thông tin vào sessionStorage
    sessionStorage["shopping-cart-items"] = JSON.stringify(shoppingCartItems); // Chuyển thông tin mảng shoppingCartItems sang JSON trước khi lưu vào sessionStorage

    // Gọi hàm hiển thị giỏ hàng
    modal.style.display = "none";
    displayShoppingCartItems();
}

function displayShoppingCartItems() {

    cart.innerHTML = total;



}
load();
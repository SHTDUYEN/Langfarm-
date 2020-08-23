const linkProduct = "http://localhost:8080/api/products?size=100";
const linkCategories = "http://localhost:8080/api/categories";
let menu = document.getElementById("menu");
let categories = document.getElementById("categories");
async function load() {
    let productsFetch = await fetch(linkProduct);
    let categooriesFetch = await fetch(linkCategories);

    let products = await productsFetch.json();
    let cate = await categooriesFetch.json();
    menu.innerHTML = "";
    menu.innerHTML = createProduct(products);
    categories.innerHTML = createCategories(cate);
    console.log(createProduct(products));
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
        stringHTML += "                <a href=\"\" class=\"d-flex align-items-center justify-content-center\"><span class=\"flaticon-shopping-bag\"></span></a>";
        stringHTML += "      <a href=\"\" class=\"d-flex align-items-center justify-content-center\"><span class=\"flaticon-heart\"></span></a>";
        stringHTML += "     <a href=\"\" class=\"d-flex align-items-center justify-content-center\"><span class=\"flaticon-visibility\"></span></a>";
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
load();
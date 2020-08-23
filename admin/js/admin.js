import { renderProducts } from './product.js'
import { renderCategories } from './category.js'
import { getFormProduct } from './getFormProduct.js'
import { getFormCategory } from './getFormCategory.js'
const linkProducts = "http://localhost:8080/api/products?size=100";
const linkCategories = "http://localhost:8080/api/categories";
let dataTable = document.getElementById("dataTable");
let categoryButton = document.getElementById("categoryButton");
let productButton = document.getElementById("productButton");
let listButtonDelete;
let listButtonViewEdit;
let modalWrapper = document.getElementsByClassName("modal_wrapper")[0];
let modal = document.getElementById("modal");
let buttonCancel = document.getElementById("cancel");
let buttonSave = document.getElementById("save-product");

let buttonCreate = document.getElementById("btn_create");

let listCategories;

async function load(type) {
    let link;
    if (type == "products") {
        link = linkProducts;
    } else {
        link = linkCategories;
    }
    let resultFetch = await fetch(link, {
        "headers": {
            "accept": "*/*",
            "accept-language": "vi,vi-VN;q=0.9,en-US;q=0.8,en;q=0.7",
            "Content-Type": "application/json"

        },
        "body": null,
        "method": "GET",

    });
    let result = await resultFetch.json();
    if (type == "products") {
        dataTable.innerHTML = renderProducts(result);

    } else {
        // console.log(result);
        dataTable.innerHTML = renderCategories(result);



    }
    listButtonDelete = document.getElementsByClassName("btn-danger");
    listButtonViewEdit = document.getElementsByClassName("btnViewEdit");
    setActionBtnDanger(listButtonDelete);
    setActionBtnViewEdit(listButtonViewEdit);
    buttonSave.setAttribute("data-type", type);
    buttonCreate.setAttribute("data-type", type);

}



categoryButton.onclick = function() {
    load("categories");
};


productButton.onclick = function() {

    load("products");


}






//xoa san pham




function setActionBtnDanger(listButtonDelete) {
    for (let index = 0; index < listButtonDelete.length; index++) {
        listButtonDelete[index].onclick = function() {
            let type = listButtonDelete[index].getAttribute("data-type");
            let id = listButtonDelete[index].getAttribute("data-id");

            deleteData(type, id);
        };


    }

}

async function deleteData(type, id) {
    let isDelete = confirm("Bạn thật sự muốn xoá ");

    if (isDelete) {
        let url = "http://localhost:8080/api/" + type + "/" + id;
        let result = await fetch(url, { "method": "DELETE" });


        load(type);

    }
}














function setActionBtnViewEdit(listButtonViewEdit) {
    for (let index = 0; index < listButtonViewEdit.length; index++) {
        listButtonViewEdit[index].onclick = function() {
            let type = listButtonViewEdit[index].getAttribute("data-type");
            let id = listButtonViewEdit[index].getAttribute("data-id");

            let url;
            if (type == "products") {
                if (id != 0) {
                    url = "http://localhost:8080/api/" + type + "/" + id;
                    fetchGetOne(url, id);
                    async function fetchGetOne(url, id) {
                        let resultFetch = await fetch(url);
                        let result = await resultFetch.json();

                        showModalProduct(result, id);
                        buttonSave.setAttribute("data-method", "PUT");

                    }
                } else {
                    showModalProduct({
                        name: "",
                        description: "",
                        imageUrl: "",
                        price: 0
                    }, id);

                    buttonSave.setAttribute("data-method", "POST");
                }

            } else {
                if (id != 0) {
                    url = "http://localhost:8080/api/" + type + "/" + id;
                    async function fetchGetOne(url, id) {
                        let resultFetch = await fetch(url);
                        let result = await resultFetch.json();
                        showModalCategory(result, id);

                        buttonSave.setAttribute("data-method", "PUT");
                    }
                    fetchGetOne(url, id);
                } else {
                    showModalCategory({
                        name: "",
                        description: "",
                        imageUrl: "",
                        price: 0
                    }, id);

                    buttonSave.setAttribute("data-method", "POST");
                }
            }
        }
    }
}












buttonCancel.onclick = function() {
    modalWrapper.style.display = "none";
}
buttonSave.onclick = function() {
    let typeButton = buttonSave.getAttribute("data-type");
    let methodButton = buttonSave.getAttribute("data-method");
    let listCate = [];
    if (typeButton == "products") {
        for (let option of productCategorysInput.options) {
            if (option.selected == true) {
                listCate.push({ "id": option.value });

            }
        }
    }
    let product = {};
    if (typeButton == "products") {
        product = {
            id: productIdInput,
            name: productNameInput.value,
            description: productDescriptionInput.value,
            price: productPriceInput.value,
            imageUrl: productImageInput.value,
            categories: listCate
        }
    } else {
        product = {
            id: productIdInput,
            name: productNameInput.value,
            description: productDescriptionInput.value,
            imageUrl: productImageInput.value
        }
    }
    let url = "http://localhost:8080/api/" + typeButton;
    if (methodButton == "PUT") {

        sendRequest(url, product, methodButton);
        load(typeButton);

    } else {

        let body = {};
        if (typeButton == "products") {
            body = {
                name: productNameInput.value,
                description: productDescriptionInput.value,
                price: productPriceInput.value,
                imageUrl: productImageInput.value,
                categories: listCate
            }
        } else {

            body = {
                name: productNameInput.value,
                description: productDescriptionInput.value,
                imageUrl: productImageInput.value
            }

        }
        sendRequest(url, body, methodButton);
        load(typeButton);

    }

    modalWrapper.style.display = "none";

}

let productNameInput;
let productDescriptionInput;
let productPriceInput;
let productImageInput;
let productCategorysInput;
let productIdInput;
async function sendRequest(url, product, method) {

    let result = await fetch(url, {
        "headers": {
            "accept": "application/json",
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "http://ogani.com/admin/dist/index.html"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": JSON.stringify(product),
        "method": method

    });


}














function showModalProduct(result, id) {
    modal.innerHTML = getFormProduct(result);
    modalWrapper.style.display = "block";
    productIdInput = id;
    productNameInput = document.getElementById("product-name");
    productDescriptionInput = document.getElementById("product-description");
    productPriceInput = document.getElementById("product-price");
    productImageInput = document.getElementById("product-imageUrl");
    productCategorysInput = document.getElementById("product-category");

    getCate(result.categories);
}
async function getCate(categoriesProduct) {
    let ct = await fetch(linkCategories);
    listCategories = await ct.json();
    createCategoriesProduct(listCategories, categoriesProduct);
}


function createCategoriesProduct(listCategories, categoriesProduct) {
    let stringCate = "";
    stringCate += " <option value=\"\"></option>";
    let result = listCategories;
    for (let index = 0; index < result.length; index++) {
        stringCate += " <option value=\"" + result[index].id + "\">" + result[index].name + "</option>";
    }
    productCategorysInput.innerHTML = stringCate;
    for (let index in categoriesProduct) {
        for (let option of productCategorysInput.options) {
            if (option.value == categoriesProduct[index].id) {
                option.selected = true;
            }
        }
    }
}


function showModalCategory(result, id) {
    modal.innerHTML = getFormCategory(result);
    modalWrapper.style.display = "block";
    productIdInput = id;
    productNameInput = document.getElementById("product-name");
    productDescriptionInput = document.getElementById("product-description");
    productImageInput = document.getElementById("product-imageUrl");
}





load("products");
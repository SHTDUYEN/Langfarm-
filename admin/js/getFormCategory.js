export const getFormCategory = function getFormCategory(result) {
    let product;
    if (result) {
        product = result;
    } else {
        product = {
            name: "",
            description: "",
            imageUrl: ""
        }
    }


    let stringHTML = "";
    stringHTML += "<div class=\"form-group\">";
    stringHTML += "<label for=\"product-name\" id=\"nameLabel\" class=\"\">Name</label>";
    stringHTML += "<div class=\"form-group\">";
    stringHTML += "<input name=\"name\" required=\"\" id=\"product-name\" type=\"text\" class=\"is-untouched is-pristine av-invalid form-control\" value=\"" + product.name + "\">";
    stringHTML += "</div>";
    stringHTML += "</div>";

    stringHTML += "<div class=\"form-group\">";
    stringHTML += "<label for=\"product-description\" id=\"descriptionLabel\" class=\"\">Description</label>";
    stringHTML += "<div class=\"form-group\">";
    stringHTML += "<input name=\"description\" id=\"product-description\" type=\"text\" class=\"is-untouched is-pristine av-valid form-control\" value=\"" + product.description + "\">";
    stringHTML += "</div>";
    stringHTML += "</div>";
    stringHTML += "<div class=\"form-group\">";
    stringHTML += "<label for=\"product-imageUrl\" id=\"imageUrlLabel\" class=\"\">Image Url</label>";
    stringHTML += "<div class=\"form-group\">";
    stringHTML += "<input name=\"imageUrl\" id=\"product-imageUrl\" type=\"text\" class=\"is-touched is-pristine av-valid form-control\" value=\"" + product.imageUrl + "\">";
    stringHTML += "</div>";
    stringHTML += "</div>";

    // stringHTML += "<button id=\"cancel\" class=\"btn btn-info\">"
    // stringHTML += "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"arrow-left\" class=\"svg-inline--fa fa-arrow-left fa-w-14 \" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\">";
    // stringHTML += "<path fill=\"currentColor\" d=\"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z\"></path>";
    // stringHTML += "</svg>&nbsp;<span class=\"d-none d-md-inline\">Back</span>";
    // stringHTML += "</button>&nbsp;";
    // stringHTML += "<button id=\"save-product\" class=\"btn btn-primary\">";
    // stringHTML += "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"save\" class=\"svg-inline--fa fa-save fa-w-14 \" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\">";
    // stringHTML += "<path fill=\"currentColor\" d=\"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z\"></path>";
    // stringHTML += "</svg>&nbsp; Save";
    // stringHTML += "</button>";
    return stringHTML;
}
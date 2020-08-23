export const renderProducts = function renderProducts(products) {
    let stringHTML = "";
    stringHTML += "                <thead>";
    stringHTML += "                    <tr>";
    stringHTML += "                       <th>Id</th>";
    stringHTML += "                       <th>Image</th>";
    stringHTML += "                        <th>Name</th>";
    stringHTML += "                       <th>Price</th>";
    stringHTML += "                       <th>Category</th>";
    stringHTML += "                       <th></th>";
    stringHTML += "                   </tr>";
    stringHTML += "               </thead>";
    for (let item of products) {
        let img = "";
        if (item.imageBase64) {
            img = "data:image/png;base64," + item.imageBase64;
        } else {
            img = item.imageUrl;
        }
        stringHTML += " <tr>";
        stringHTML += "<td>" + item.id + "</td>";
        stringHTML += "<td><img class\"img_row\" src= \"" + img + "\"></td>";
        stringHTML += "<td>" + item.name + "</td>";
        stringHTML += "<td>" + item.price + "</td>";
        stringHTML += "<td>";
        for (let itemmini of item.categories) {
            stringHTML += itemmini.name + "<br>";
        }

        stringHTML += "</td>";
        stringHTML += "<td>";
        stringHTML += "<div class=\"btn btnViewEdit btn-info btn-sm float-right\" data-type=\"products\" data-id=" + item.id + " >";
        stringHTML += "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"eye\" class=\"svg-inline--fa fa-eye fa-w-18 \" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\">";
        stringHTML += "<path fill=\"currentColor\" d=\"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z\"></path>";
        stringHTML += "</svg> <span class=\"d-none d-md-inline\">View</span>";
        stringHTML += "</div>";
        stringHTML += "<div class=\"btn btnViewEdit btn-primary btn-sm float-right\" data-type=\"products\" data-id=" + item.id + ">";
        stringHTML += "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"pencil-alt\" class=\"svg-inline--fa fa-pencil-alt fa-w-16 \" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">";
        stringHTML += "<path fill=\"currentColor\" d=\"M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z\"></path>";
        stringHTML += "</svg> <span class=\"d-none d-md-inline\">Edit</span>";
        stringHTML += "</div>";
        stringHTML += "<div id=" + item.id + " class=\"btn btn-danger btn-sm float-right\" data-type=\"products\" data-id=" + item.id + " >";
        stringHTML += "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"trash\" class=\"svg-inline--fa fa-trash fa-w-14 \" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\">";
        stringHTML += "<path fill=\"currentColor\" d=\"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z\"></path>";
        stringHTML += "</svg> <span class=\"d-none d-md-inline\">Delete</span>";
        stringHTML += "</div>";
        stringHTML += "</td>";
        stringHTML += "</tr>";
        // document.getElementById(item.id).onclick = function() {
        //     console.log(item.id);
        // }

    }

    return stringHTML;

}
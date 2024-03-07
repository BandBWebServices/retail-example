let examplesArray = [
    {
        "name":"Product 1",
        "image":"/images/examples/webnotfound.jpg",
        "link":"https://retail-example.netlify.app/",
        "price":"$499.99",
    },
    {
        "name":"Product 2",
        "image":"/images/examples/webnotfound.jpg",
        "link":"/html/examples/restaurant.html",
        "price":"$499.99",
    },
    {
        "name":"Product 3",
        "image":"/images/examples/webnotfound.jpg",
        "link":"/html/examples/mechanic.html",
        "price":"$499.99",
    },
    {
        "name":"Product 4",
        "image":"/images/examples/webnotfound.jpg",
        "link":"/html/examples/dealership.html",
        "price":"$499.99",
    },
    {
        "name":"Product 5",
        "image":"/images/examples/webnotfound.jpg",
        "link":"/html/examples/custom.html",
        "price":"$499.99",
    },
];

let containerDiv = document.getElementById("container");


    examplesArray.forEach((Name) => {

    let webDiv = document.createElement("div");
    let alink =  document.createElement("a");
    let namep = document.createElement("p");
    let img = document.createElement("img");

    

    namep.textContent = Name.name;
    alink.setAttribute("href", Name.link);
    alink.setAttribute("target", "_blank");
    img.setAttribute("src", Name.image);

    alink.className = "alink";
    webDiv.className = "webDiv";
    namep.className = "namep";
    img.className = "examplesimages";


    containerDiv.appendChild(alink);
    alink.appendChild(webDiv);
    webDiv.appendChild(namep);
    webDiv.appendChild(img);

    


    });

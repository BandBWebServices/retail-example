let hamBtn;
let iconImg;
let home;
let about;
let pricing;
let examples;
let contact;
let navul;
let navdiv;
let main;


// Hamburger Function
function hamburger() {

    hamBtn = document.getElementById("ham");
    iconImg = document.getElementById("iconimg");
    navul = document.getElementById("navulmobile");
    navdiv = document.getElementById("navdivmobile");
    main = document.getElementById("main");

    navdiv.className = "navdivmobileadded";
    //main.className = "mainadded";
    // navul.className = "navulmobileadded";

    iconImg.setAttribute("src", "/images/icons/x.png");
    hamBtn.setAttribute("onclick", "exit()");

    home = document.createElement("a");
    about = document.createElement("a");
    pricing = document.createElement("a");
    examples = document.createElement("a");
    contact = document.createElement("a");

    home.className = "navamobile";
    about.className = "navamobile";
    pricing.className = "navamobile";
    examples.className = "navamobile";
    contact.className = "navamobile";

    home.textContent = "B and B Web Services";
    about.textContent = "About Us";
    pricing.textContent = "Pricing";
    examples.textContent = "Example Websites";
    contact.textContent = "Contact Us";

    home.setAttribute("href", "");
    about.setAttribute("href", "");
    pricing.setAttribute("href", "");
    examples.setAttribute("href", "");
    contact.setAttribute("href", "");

    // navul.appendChild(home);
    // navul.appendChild(about);
    // navul.appendChild(pricing);
    // navul.appendChild(examples);
    // navul.appendChild(contact);

}



// Exit Funciton
function exit() {
    hamBtn = document.getElementById("ham");
    iconImg = document.getElementById("iconimg");

    // navul.className = "navulmobileexit";
    navdiv.className = "navdivmobileexit";
    //main.className = "main";

    iconImg.setAttribute("src", "/images/icons/ham.png");
    hamBtn.setAttribute("onclick", "hamburger()");


    // navul.removeChild(home);
    // navul.removeChild(about);
    // navul.removeChild(pricing);
    // navul.removeChild(examples);
    // navul.removeChild(contact);
    
}

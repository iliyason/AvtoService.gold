opening = false;
elem = document.getElementById("menu");

function MenuOpCl(){
    if(opening == true){
        elem.style.display="none";
        opening = !opening;
    }
    else{
        elem.style.display="flex";
        opening = !opening;
    }
}

el1 = document.getElementById("full-list-serv");
el2 = document.getElementById("about");
el3 = document.getElementById("contacts");
function servise() {
    el1.scrollIntoView({block: "start", behavior: "smooth"});
}
function about() {
    el2.scrollIntoView({block: "start", behavior: "smooth"});
}
function aboutUs() {
    el3.scrollIntoView({block: "start", behavior: "smooth"});
}

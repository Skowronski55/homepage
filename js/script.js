{
    const welcome = () => {
console.log("Cześć! Witam wszystkich!");
}
welcome();

    const removeHeading = () => {
        const button1 = document.querySelector(".js-header__buttonHeading");
        const header__heading = document.querySelector(".js-header__heading");
        header__heading.remove();
    })



let button2 = document.querySelector(".js-header__buttonImage");
let img  = document.querySelector(".js-header__image");
let button3 = document.querySelector(".js-header__buttonColor");
let body = document.querySelector(".js-body");
let themeName = document.querySelector(".themeName");


button1.addEventListener("click", (removeHeading) 

button2.addEventListener("click", () => {
    img .remove();
})

button3.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        themeName.innerText = "jasny";
} else {
         themeName.innerText = "ciemny";
}


})
}
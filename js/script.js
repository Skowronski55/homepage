console.log("Cześć!");

let button1 = document.querySelector(".js-header__buttonHeading");
let header__heading = document.querySelector(".js-header__heading");
let button2 = document.querySelector(".js-header__buttonImage");
let img  = document.querySelector(".js-header__image");
let button3 = document.querySelector(".js-header__buttonColor");
let body = document.querySelector(".js-body");
let themeName = document.querySelector(".themeName");


button1.addEventListener("click", () => {
    header__heading.remove();
})

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
<<<<<<< HEAD
})
=======

 welcome();
    const removeHeading = () => {
        const button1 = document.querySelector(".js-header__buttonHeading");
        const header__heading = document.querySelector(".js-header__heading");
        header__heading.remove();
    };

    const removeImage = () => {
        const button2 = document.querySelector(".js-header__buttonImage");
        const img = document.querySelector(".js-header__image");
        img.remove();
    }

    const toggleColor = () => {
        const button3 = document.querySelector(".js-header__buttonColor");
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".themeName");
        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
            themeName.innerText = "jasny";
        } else {
            themeName.innerText = "ciemny";
        };

       

        button1.addEventListener(removeHeading);

        button2.addEventListener(removeImage);

        button3.addEventListener(toggleColor);


    }
}
>>>>>>> a70339666f780a247cd2ef2f373344394bb35202

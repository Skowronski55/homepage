{
    const welcome = () => {
console.log("Cześć! Witam wszystkich!");
}


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

        welcome();

        button1.addEventListener(removeHeading);

        button2.addEventListener(removeImage);

        button3.addEventListener(toggleColor);


    }
}
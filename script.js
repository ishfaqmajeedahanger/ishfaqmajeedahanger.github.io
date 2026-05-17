const menuIcon = document.getElementById("menuIcon");

const sideMenu = document.getElementById("sideMenu");

const moon = document.getElementById("moon");

/* OPEN MENU */

menuIcon.onclick = function () {

    if (sideMenu.style.left === "0px") {

        sideMenu.style.left = "-250px";

    }

    else {

        sideMenu.style.left = "0px";

    }

};

/* LIGHT MODE */

moon.onclick = function () {

    document.body.classList.toggle("light-mode");

};const button = document.getElementById("theme-button");

button.onclick = function () {

    document.body.classList.toggle("light-mode");

};

const menuIcon = document.getElementById("menuIcon");

const sideMenu = document.getElementById("sideMenu");

const moon = document.getElementById("moon");

/* MENU */

menuIcon.onclick = function () {

    if (sideMenu.style.left === "0px") {

        sideMenu.style.left = "-250px";

    }

    else {

        sideMenu.style.left = "0px";

    }

};

/* CLOSE MENU WHEN LINK CLICKED */

const links = document.querySelectorAll(".side-menu a");

links.forEach(link => {

    link.onclick = function () {

        sideMenu.style.left = "-250px";

    };

});

/* LIGHT MODE */

moon.onclick = function () {

    document.body.classList.toggle("light-mode");

};

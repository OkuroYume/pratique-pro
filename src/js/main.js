function toggleMenu(event) {
  event.stopPropagation();
  var menuItems = document.getElementById("menuItems");
  var burgerMenu = document.querySelector(".burger-menu");

  menuItems.classList.toggle("show");
  burgerMenu.classList.toggle("change");
}

document.querySelector(".burger-menu").addEventListener("click", toggleMenu);

document
  .querySelector(".burger-menu")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

function toggleMenu(event) {
  event.stopPropagation();
  var menuItems = document.getElementById("menuItems");
  var burgerMenu = document.querySelector(".burger-menu");
  var hideOnMenu = document.getElementById("hideOnMenu");
  var hideLogo = document.getElementById("hideLogo");

  menuItems.classList.toggle("show");
  hideOnMenu.classList.toggle("hide");
  hideLogo.classList.toggle("hide");
}

document.querySelector(".burger-menu").addEventListener("click", toggleMenu);

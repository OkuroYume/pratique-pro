function toggleMenu(event) {
  event.stopPropagation();
  var menuItems = document.getElementById("menuItems");
  var burgerMenu = document.querySelector(".burger-menu");
  var hideOnMenu = document.getElementById("hideOnMenu");
  var hideLogo = document.getElementById("hideLogo");
  var header = document.getElementById("header");

  menuItems.classList.toggle("show");
  burgerMenu.classList.toggle("change");
  hideOnMenu.classList.toggle("hide");
  hideLogo.classList.toggle("hide");
  header.classList.toggle("header-blur");
}

document.querySelector(".burger-menu").addEventListener("click", toggleMenu);

var menuItems = document.querySelectorAll(".menu-items a");

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", function () {
    toggleMenu();
  });
});

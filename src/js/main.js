function toggleMenu(event) {
  event.stopPropagation();
  var menuItems = document.getElementById("menuItems");
  var burgerMenu = document.querySelector(".burger-menu");
  var hideOnMenu = document.getElementById("hideOnMenu");
  var hideLogo = document.getElementById("hideLogo");

  menuItems.classList.toggle("show");
  burgerMenu.classList.toggle("change");
  hideOnMenu.classList.toggle("hide");
  hideLogo.classList.toggle("hide");
}

document.querySelector(".burger-menu").addEventListener("click", toggleMenu);

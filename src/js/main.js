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

var menuItems = document.querySelectorAll(".burger-menu-items a");

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", function () {
    toggleMenu();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var products = [
    { imageId: "productImage1", infoId: "productInfo1" },
    { imageId: "productImage2", infoId: "productInfo2" },
    { imageId: "productImage3", infoId: "productInfo3" },
  ];

  var currentProductIndex = 0;

  function showProduct(index) {
    products.forEach((product, idx) => {
      const productImage = document.getElementById(product.imageId);
      const productInfo = document.getElementById(product.infoId);
      const isActive = idx === index;
      productImage.classList.toggle("active", isActive);
      productInfo.classList.toggle("active", isActive);
      const glutenFreeSymbol = document.querySelector(
        ".shop-gluten-free-symbol"
      );
      if (product.imageId === "productImage2") {
        glutenFreeSymbol.style.display = isActive ? "block" : "none";
      }
    });
  }

  document.getElementById("prevProduct").addEventListener("click", function () {
    currentProductIndex =
      currentProductIndex > 0 ? currentProductIndex - 1 : products.length - 1;
    showProduct(currentProductIndex);
  });

  document.getElementById("nextProduct").addEventListener("click", function () {
    currentProductIndex =
      currentProductIndex < products.length - 1 ? currentProductIndex + 1 : 0;
    showProduct(currentProductIndex);
  });

  // Initial display
  showProduct(currentProductIndex);
});

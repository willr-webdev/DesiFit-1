function openMobileNav() {
  document.querySelector(".fa-bars").style.display = "none";
  document.querySelector(".open-nav").style.display = "flex";
}

function closeMobileNav() {
  document.querySelector(".open-nav").style.display = "none";
  document.querySelector(".fa-bars").style.display = "flex";
}
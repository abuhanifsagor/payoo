// Nav Bar
AOS.init();
window.addEventListener("scroll", function (e) {
  let navBar = document.getElementById("navBar");
  if (window.scrollY > 0) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
  let herobg = document.querySelector(".heroBg");
  if (window.scrollY > 0) {
    herobg.style.height = " 80%";
  } else {
    herobg.style.height = " 60%";
  }
});

window.addEventListener("load", function () {
  let navBar = document.getElementsByClassName("navBar")[0];
  let hero = document.getElementById("hero");
  let content = document.querySelector(".ani");

  hero.style.transform = "scale(1)";
  content.style.opacity = "1";
  content.style.transform = "translateY(0)";
  navBar.style.opacity = "1";
});

document.getElementById("singIn").addEventListener("click", function (e) {
  e.preventDefault();
  let username  = document.getElementById("username").value;
  localStorage.setItem("username", username)
  let pin = document.getElementById("pin");
  if (pin.value !== "12345" ) {
    pin.classList.add("error");
  } else {
    pin.classList.remove("error");
    window.location.href = "/app.html";
  }
});


// INFO: The main pages

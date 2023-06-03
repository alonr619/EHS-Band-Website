/*!
 * Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
//

import { CountUp } from "./countUp.min.js";

let finishedCount = false;

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  //  Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

window.addEventListener("scroll", function () {
  var position = document.getElementById("about").getBoundingClientRect();

  if (
    !finishedCount &&
    position.top >= 0 &&
    position.bottom <= window.innerHeight
  ) {
    let demo1 = new CountUp("countUp1", 200, {
      suffix: " People",
    });
    if (!demo1.error) {
      demo1.start();
    } else {
      console.error(demo1.error);
    }
    let demo2 = new CountUp("countUp2", 12, {
      suffix: " Instruments",
      useEasing: false,
    });
    if (!demo2.error) {
      demo2.start();
    } else {
      console.error(demo2.error);
    }
    let demo3 = new CountUp("countUp3", 3, {
      suffix: " Bands",
      useEasing: false,
    });
    if (!demo3.error) {
      demo3.start();
    } else {
      console.error(demo3.error);
    }
    finishedCount = true;
  }
});

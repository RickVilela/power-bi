/*!
* Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
$(document).ready(function () {
    $(".expand-image").click(function (e) {
        e.preventDefault();
        var imageUrl = $(this).data("image-src");
        $(".gallery-image").attr("src", imageUrl);
        $(".gallery-container").fadeIn();
    });

    $(".gallery-container").click(function (e) {
        // Verifica se o alvo do clique é a própria área de fundo
        if ($(e.target).hasClass("gallery-container")) {
            $(".gallery-container").fadeOut();
        }
    });

    $(".close-btn").click(function () {
        $(".gallery-container").fadeOut();
    });

    $(document).keyup(function (e) {
        if (e.key === "Escape") {
            $(".gallery-container").fadeOut();
        }
    });
});


const carousel = document.getElementById("carouselExampleControls");
const items = carousel.querySelectorAll(".carousel-item");
let currentItem = 0;
let isActive = true;

function setCurrentItem(index) {
  currentItem = (index + items.length) % items.length;
}

function hideItem(direction) {
  isActive = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener("animationend", function() {
    this.classList.remove("active", direction);
  });
}

function showItem(direction) {
  items[currentItem].classList.add("next", direction);
  items[currentItem].addEventListener("animationend", function() {
    this.classList.remove("next", direction);
    this.classList.add("active");
    isActive = true;
  });
}

document.getElementById("carouselPrev").addEventListener("click", function(e) {
  e.preventDefault();
  if (isActive) {
    hideItem("to-right");
    setCurrentItem(currentItem - 1);
    showItem("from-left");
  }
});

document.getElementById("carouselNext").addEventListener("click", function(e) {
  e.preventDefault();
  if (isActive) {
    hideItem("to-left");
    setCurrentItem(currentItem + 1);
    showItem("from-right");
  }
});

$('input').on('change', function() {
  $('body').toggleClass('blue');
});

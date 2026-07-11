const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});
// close menu when the close button is clicked
menuCloseButton.addEventListener("click", () =>
    menuOpenButton.click()
);

// close menu when the nav link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click()); 
});
// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
        slidersPerView: 1
    },
    768: {
        slidersPerView: 2
    },
    1024: {
        slidersPerView: 3
    }
  }
});
fetch("menu.json")
  .then(response => response.json())
  .then(data => {
    const menuList = document.querySelector(".menu-list");

    data.forEach(item => {
      const menuItem = document.createElement("div");
      menuItem.className = "menu-item";

      menuItem.innerHTML = `
        <img src="${item.image}" alt="${item.alt}" class="menu-image">
        <h3 class="name">${item.name}</h3>
        <p class="text">${item.text}</p>
      `;

      menuList.appendChild(menuItem);
    });
  })
  .catch(error => console.error("Error loading JSON:", error));

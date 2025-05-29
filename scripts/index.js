import { headphones } from "../products/headphone.js";

const navbarElement = document.querySelector('.navbar');
const innerToggleButton = document.querySelector('.toggle-inner-container');
const bodyElement = document.querySelector('body');
const headPhoneContainer = document.querySelector('.head-phone-container-one');
const moveContainerElement = document.querySelector('.head-phone-container');
const moveContainerRight = document.querySelector('.move-right');
const moveContainerLeft = document.querySelector('.move-left');
const bannerSection = document.querySelector('.banner-section-details');

let headphonesHTML = '';
headphones.forEach((headphone) => {
  headphonesHTML += `   <div class="head-phone-container-one">
        <div class="product-head-phone-image">
          <img src="${headphone.image}" alt="" />
        </div>
        <div class="price-name-and-add-to-cart">
          <div class="name-price">
            <strong>${headphone.name}</strong>
            <p>$${headphone.price}</p>
          </div>

          <div class="add-to-cart-button">
            <button><img src="./images/add-to-bag.png" alt="" /></button>
          </div>
        </div>
      </div>`;

})

document.querySelector('.js-head-phone-container').innerHTML = headphonesHTML;
window.addEventListener('scroll', () => {
  let scrollYValue = window.scrollY;

  if (scrollYValue > 90) {
    navbarElement.classList.add('navbar-element-styles');

  } else if (scrollYValue < 100) {
    navbarElement.classList.remove('navbar-element-styles');
  }
});

innerToggleButton.addEventListener('click', () => {
  updateDarkModeToggle();
});

function updateDarkModeToggle() {
  const isLight = innerToggleButton.classList.contains('move-toggle-left');

  if (isLight) {
    innerToggleButton.classList.remove('move-toggle-left');
    innerToggleButton.classList.add('move-toggle-right');
    bodyElement.style.backgroundColor = 'rgb(53, 57, 53)';
    bodyElement.style.transition = 'all 0.5s ease-in-out';
    bodyElement.style.color = 'white';
    bannerSection.style.color = 'white';
    moveContainerLeft.style.backgroundColor = 'black';
    moveContainerRight.style.backgroundColor = 'black';
    // headPhoneContainer.style.boxShadow = '2px 10px 2px black';

  } else {
    innerToggleButton.classList.remove('move-toggle-right');
    innerToggleButton.classList.add('move-toggle-left');
    bodyElement.style.backgroundColor = 'whitesmoke';
    bodyElement.style.transition = 'all 0.5s ease-in-out';
    bodyElement.style.color = 'black';
    bannerSection.style.color = 'black';
    moveContainerLeft.style.backgroundColor = 'white';
    moveContainerRight.style.backgroundColor = 'white';

    // headPhoneContainer.style.boxShadow = '2px 10px 2px black';
  }
}

moveContainerLeft.addEventListener('click', () => {
  moveContainer(500)

})
moveContainerRight.addEventListener('click', () => {
  moveContainer(-500)
})
function moveContainer(value) {
  moveContainerElement.scrollBy({
    left: value,
    behavior: 'smooth'
  })
}





const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-nav');
const primaryHeader = document.querySelector('.primary-header');

mobileNavToggleBtn.addEventListener('click', () => {
  primaryNav.hasAttribute('data-visible')
    ? mobileNavToggleBtn.setAttribute('aria-expanded', false)
    : mobileNavToggleBtn.setAttribute('aria-expanded', true);
  primaryNav.toggleAttribute('data-visible');
  primaryHeader.toggleAttribute('data-overlay');
});

// CAROUSEL

const slider = new A11YSlider(document.querySelector('.slider'), {
  adaptiveHeight: false,
  dots: true,
  centerMode: true,
  arrows: false,
  responsive: {
    480: {
      dots: false,
    },
  },
});

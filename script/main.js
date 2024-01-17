import '../scss/style.scss';

const main = document.querySelector('main');

const buttonOpen = document.querySelector('#menu-button-open');
const buttonClose = document.querySelector('#menu-button-close');

const navContent = document.querySelector('.nav__content');
const navOverlay = document.querySelector('.nav__overlay');

const media = window.matchMedia('(width < 69.375em)');

const openMobileMenu = () => {
  buttonOpen.setAttribute('aria-expanded', 'true');
  document.body.classList.add('noscroll');
  navContent.removeAttribute('inert');
  main.setAttribute('inert', '');
  buttonClose.focus();
};
const closeMobileMenu = () => {
  buttonOpen.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('noscroll');
  navContent.setAttribute('inert', '');
  main.removeAttribute('inert');
  buttonOpen.focus();
};

const setupNav = (e) => {
  if (e.matches) {
    navContent.setAttribute('inert', '');
    main.setAttribute('inert', '');

    setTimeout(() => {
      navContent.style.display = 'block';
      navOverlay.style.display = 'block';
    }, 500);
    
  } else {
    navContent.removeAttribute('inert');
    main.removeAttribute('inert');
    navContent.style.display = '';
    navOverlay.style.display = '';
  }
};

buttonOpen.addEventListener('click', openMobileMenu);
buttonClose.addEventListener('click', closeMobileMenu);

media.addEventListener('change', (e) => setupNav(e));

setupNav(media);

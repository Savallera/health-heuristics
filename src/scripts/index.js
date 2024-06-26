// Модальное окно
const BODY = document.body;

// Прелодер
const mainPreloader = document.querySelector('.preloader');
const hideMainPreloader = () => {
  mainPreloader.classList.add('preloader_hidden');
};

// Модальное окно
const modalContainer = document.querySelector('.popup_content_monitoring');
const modalContent = modalContainer.querySelector('.popup__body');
const companyCards = document.querySelectorAll('.company-card');
const openModalContainer = function () {
  let windowScroll = window.innerWidth - document.documentElement.clientWidth;
  if (windowScroll != 0)
    document.documentElement.style.paddingRight = windowScroll + 'px';
  BODY.style.overflow = 'hidden';
  modalContainer.classList.add('popup_opened');
};
const closeModalContainer = function () {
  document.documentElement.style.paddingRight = '';
  BODY.style.overflow = '';
  modalContainer.classList.remove('popup_opened');
};
const hideTableContent = function () {
  Array.from(modalContent.children).map((children) => {
    children.classList.add('--hide');
  });
};
const openPopupTableContent = function (element) {
  hideTableContent();
  document
    .getElementById(element.dataset.id + '_table')
    ?.classList.remove('--hide');
  openModalContainer();
};

companyCards.forEach((element) =>
  element.addEventListener('click', () => {
    openPopupTableContent(element);
  })
);

modalContainer.addEventListener('click', (evt) => {
  if (
    evt.target.classList.contains('popup_content_monitoring') ||
    evt.target.classList.contains('popup__close-button')
  ) {
    closeModalContainer();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  hideMainPreloader();
});

import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('div.gallery');

galleryRef.insertAdjacentHTML(
  'afterbegin',
  galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
                <a class="gallery__link" href="${original}"> 
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>`;
    })
    .join('')
);

galleryRef.addEventListener('click', getModal);

let modal;

function getModal(event) {
  event.preventDefault();
  modal = basicLightbox.create(`<img src="${event.target.dataset.source}">`, {
    onShow: () => window.addEventListener('keydown', closeModalOnEscKey),
    onClose: () => window.removeEventListener('keydown', closeModalOnEscKey),
  });
  modal.show();
}

function closeModalOnEscKey(event) {
  if (event.code === 'Escape') {
    modal.close();
  }
}

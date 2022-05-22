import { galleryItems } from './gallery-items.js';
// Change code below this line

document.querySelector('div.gallery').insertAdjacentHTML(
  'afterbegin',
  galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>`;
    })
    .join('')
);

new SimpleLightbox('div.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

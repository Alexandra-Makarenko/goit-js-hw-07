import { galleryItems } from './gallery-items.js';

// Change code below this line
const markup = galleryItems
    .map((item) => 
  `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`)
  .join("");
// console.log(markup);

const gallery = document.querySelector('.gallery');

gallery.innerHTML += markup;

 const handler = (event) => {
    event.preventDefault();
    console.log(event.target.dataset.source);
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)
instance.show()
}

gallery.addEventListener('click',handler);



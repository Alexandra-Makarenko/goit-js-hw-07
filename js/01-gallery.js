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

gallery.insertAdjacentHTML('beforeend', markup);

gallery.addEventListener('click', handler);

const instance = basicLightbox.create(`
    <img src="" width="800" height="600">
`,
  {
    onShow: instance => { window.addEventListener('keydown', onEscape) },
   
    onClose: instance => { window.removeEventListener('keydown', onEscape) }
  }
);

 function handler(e) {
   e.preventDefault();
   if (e.target.nodeName !== 'IMG') {
     return
   }
   instance.element().querySelector('img').src = e.target.dataset.source;
  instance.show()
};

function onEscape(e) {
  if (e.key === 'Escape') {
    instance.close();
    return;
  }
};




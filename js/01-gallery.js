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

gallery.insertAdjacentHTML('beforeend',markup)

 const handler = (event) => {
    event.preventDefault();
    console.log(event.target.dataset.source);
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`,
     {
	/*
	 * Prevents the lightbox from closing when clicking its background.
	 */
	closable: true,
	/*
	 * One or more space separated classes to be added to the basicLightbox element.
	 */
	className: '',
	/*
	 * Function that gets executed before the lightbox will be shown.
	 * Returning false will prevent the lightbox from showing.
	 */
	onShow: (instance) => {document.addEventListener('keypress', (e) => {
  if (e.code === "Escape") instance.close()
})},
	/*
	 * Function that gets executed before the lightbox closes.
	 * Returning false will prevent the lightbox from closing.
	 */
	onClose: (instance) => {}
}
    )
 
 
  instance.show()
 }


gallery.addEventListener('click',handler);


import { galleryItems } from './gallery-items.js';
// Change code below this line
const ul = document.querySelector('.gallery');

function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a></li>`;}).join('');  
}


const markup = createGallery(galleryItems);

ul.insertAdjacentHTML('beforeend', markup);


let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});
gallery.on('show.simplelightbox', function () {
	
});
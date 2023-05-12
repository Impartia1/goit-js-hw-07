import { galleryItems } from './gallery-items.js';

// Change code below this line



const ul = document.querySelector('.gallery');

const markup = createGallery(galleryItems);

ul.insertAdjacentHTML('beforeend', markup);

ul.addEventListener('click', onUlClick)




function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></li>`;
    }).join('');  
}

function onUlClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    
    
    const originalImgSrc = evt.target.dataset.source;
    console.log(originalImgSrc);

    basicLightbox.create(`<img width="1400" height="900" src="${originalImgSrc}">`).show();
    return originalImgSrc;
    
    

}




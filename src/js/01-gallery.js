// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const ref = {
    galleryEl: document.querySelector('.gallery'),
}

function createMarkupGallery(items) {
    return items.map(photo => {
        console.log(photo.description);
        return `
            <a class="gallery__item" href="${photo.original}">
            <img class="gallery__image" src="${photo.preview}" alt="${photo.description}" />
            </a>`}).join('');
}

ref.galleryEl.innerHTML = createMarkupGallery(galleryItems);

let lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});
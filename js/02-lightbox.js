import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// ======= завдання ==========

const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

function createMarkup(items) {
    
    return items.map(item => {
        const { preview, original, description } = item;
        return `<li><a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a></li> `;
    }).join('');
    
}


// galleryEl.addEventListener('click', getGalleryImg)

// function getGalleryImg() {
// }

// const lightbox = new SimpleLightbox('.gallery a', { title = alt, nav });

const gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
    
    
    // captionsData = alt;

    // console.log(captionsData);
    // captionDelay = 250;

});

// gallery.on('error.simplelightbox', function (e) {
// 	console.log(e); // some usefull information
// });

// // with jQuery nearly the same
// let gallery = $('.gallery a').simpleLightbox();
// gallery.on('show.simplelightbox', function () {
// 	// do something…
// });




// galleryEl.addEventListener(getActiveImg);

// function getActiveImg(event) {
    
//     // event.target = document.querySelector('gallery__image');
    
//     console.log(event.target);

// }
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// ========= завдання ==========

const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

function createMarkup(items) {
    
    return items.map(item => {
        const { preview, original, description } = item;
        return `<div class="gallery__item">
                    <a class="gallery__link" href=${original}>
                        <img
                        class="gallery__image"
                        src=${preview}
                        data-source=${original}
                        alt=${description}
                        />
                    </a>
                </div> `;
    }).join('');
    
}

galleryEl.addEventListener('click', onGalleryElClick);

function onGalleryElClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    
    const originalImgLink = event.target.dataset.source;

    basicLightbox.create(`
		<img width="1400" height="900" src=${originalImgLink}>
	`).show();
}

document.addEventListener("keydown", closeModalFromKeyboard);

function closeModalFromKeyboard(event) {
    const openedModal = document.querySelector('.basicLightbox');
    
    if (event.code === "Escape") {
        openedModal.remove();

        // openedModal.close(); 
        // openedModal.close is not a function ERROR!!!!!!!!!
    }
}

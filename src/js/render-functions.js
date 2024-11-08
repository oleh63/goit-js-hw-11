import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export function renderGallery(images, galleryElement) {
    const markup = images.map(image => {
        return `
            <a href="${image.largeImageURL}" class="gallery-item">
                <img src="${image.webformatURL}" alt="${image.tags}" width="360" height="200" loading="lazy" />
                <div class="info">
                    <p>Likes: ${image.likes}</p>
                    <p>Views: ${image.views}</p>
                    <p>Comments: ${image.comments}</p>
                    <p>Downloads: ${image.downloads}</p>
                </div>
            </a>
        `;
    }).join('');
    
    galleryElement.innerHTML = markup;
}

export function showError(message) {
    iziToast.error({
        title: 'Error',
        message: message,
    });
}

export function showInfo(message) {
    iziToast.info({
        title: 'Info',
        message: message,
    });
}


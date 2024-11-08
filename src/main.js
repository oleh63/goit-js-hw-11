import { fetchImages } from './js/pixabay-api';
import { renderGallery, showError, showInfo } from './js/render-functions';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('#form-js');
const galleryElement = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
let lightbox;

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const query = form.querySelector('input').value.trim();

    if (!query) {
        showInfo("Please enter a search term.");
        return;
    }

    galleryElement.innerHTML = '';
    showLoader();

    fetchImages(query)
        .then(images => {
            hideLoader();

            if (images.length === 0) {
                showError("Sorry, there are no images matching your search query. Please try again!");
            } else {
                renderGallery(images, galleryElement);

                if (!lightbox) {
                    lightbox = new SimpleLightbox('.gallery a');
                } else {
                    lightbox.refresh();
                }
            }
        })
        .catch(() => {
            hideLoader();
            showError("Something went wrong. Please try again later.");
        });
});

function showLoader() {
    loader.style.display = 'block';
}

function hideLoader() {
    loader.style.display = 'none';
    }
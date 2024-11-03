import { resetDomMarkup, domMarkup } from './js/render-functions';
import fetchImages from './js/pixabay-api';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const loader = document.querySelector('.loader');
const form = document.querySelector('#search-form');
let instanse = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(evt) {
  evt.preventDefault();

  let query = evt.currentTarget.searchQuery.value.trim();

  if (query === '') {
    return iziToast.info({
      position: 'topRight',
      title: 'Sorry',
      message: 'Please, type what you what to search!',
    });
  }

  resetDomMarkup();
  showLoader();

  fetchImages(query)
    .then(resp => {
      domMarkup(resp);
      instanse.refresh('show.simplelightbox');
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      iziToast.error({
        position: 'topRight',
        title: 'Error',
        message:
          'Something went wrong while fetching images. Please try again later!',
      });
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
}

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}

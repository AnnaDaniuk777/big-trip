import { createElement } from '../../render.js';
import PhotoView from './photo-view.js';

const DESTINATION_PHOTOS = {
  'Geneva': [
    'img/photos/1.jpg',
    'img/photos/2.jpg',
    'img/photos/3.jpg',
    'img/photos/4.jpg',
    'img/photos/5.jpg'
  ],
  'Chamonix': [
    'img/photos/chamonix1.jpg',
    'img/photos/chamonix2.jpg',
    'img/photos/chamonix3.jpg'
  ],
  'Amsterdam': [
    'img/photos/amsterdam1.jpg',
    'img/photos/amsterdam2.jpg',
    'img/photos/amsterdam3.jpg'
  ]
};

const createPhotosContainerTemplate = (destination = 'Geneva') => {
  const photos = DESTINATION_PHOTOS[destination] || DESTINATION_PHOTOS.Geneva;

  const photoViews = photos.map((photoSrc, index) =>
    new PhotoView(photoSrc, 'Event photo', index).getTemplate()
  ).join('');

  return `
    <div class="event__photos-container">
      <div class="event__photos-tape">
        ${photoViews}
      </div>
    </div>
  `;
};

export default class PhotosContainerView {
  constructor(destination = 'Geneva') {
    this.destination = destination;
  }

  getTemplate() {
    return createPhotosContainerTemplate(this.destination);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

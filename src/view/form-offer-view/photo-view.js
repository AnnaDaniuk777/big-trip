import { createElement } from '../../render.js';

const createPhotoTemplate = (src, alt = 'Event photo', index = 0) => `
  <img class="event__photo" src="${src}" alt="${alt} ${index + 1}">
`;

export default class PhotoView {
  constructor(src, alt = 'Event photo', index = 0) {
    this.src = src;
    this.alt = alt;
    this.index = index;
  }

  getTemplate() {
    return createPhotoTemplate(this.src, this.alt, this.index);
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

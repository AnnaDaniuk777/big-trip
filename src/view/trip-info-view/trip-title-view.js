import { createElement } from '../../render.js';

const createTripTitleTemplate = (title) => `
  <h1 class="trip-info__title">${title}</h1>
`;

export default class TripTitleView {
  constructor(title) {
    this.title = title;
  }

  getTemplate() {
    return createTripTitleTemplate(this.title);
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

import { createElement } from '../../render.js';

const createEventPriceTemplate = (price) => `
  <p class="event__price">
    &euro;&nbsp;<span class="event__price-value">${price}</span>
  </p>
`;

export default class EventPriceView {
  constructor(price) {
    this.price = price;
  }

  getTemplate() {
    return createEventPriceTemplate(this.price);
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

import { createElement } from '../../render.js';

const EVENT_PRICES = [
  { price: 20 },
  { price: 160 },
  { price: 160 },
  { price: 600 },
  { price: 50 },
  { price: 20 },
  { price: 20 }
];


const createEventPriceTemplate = (price) => `
  <p class="event__price">
    &euro;&nbsp;<span class="event__price-value">${price}</span>
  </p>
`;

export default class EventPriceView {
  constructor(index = 0) {
    const priceData = EVENT_PRICES[index];
    this.price = priceData.price;
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

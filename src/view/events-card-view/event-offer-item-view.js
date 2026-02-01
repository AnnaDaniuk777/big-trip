import { createElement } from '../../render.js';

const EVENT_OFFER_ITEMS = [
  { title: 'Order Uber', price: 20 },
  { title: 'Add luggage', price: 50 },
  { title: 'Switch to comfort', price: 80 },
  { title: 'Rent a car', price: 200 },
  { title: 'Add breakfast', price: 50 },
  { title: 'Book tickets', price: 40 },
  { title: 'Lunch in city', price: 30 },
  { title: 'Add luggage', price: 30 },
  { title: 'Switch to comfort', price: 100 }
];

const createEventOfferItemTemplate = (title, price) => `
  <li class="event__offer">
    <span class="event__offer-title">${title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${price}</span>
  </li>
`;

export default class EventOfferItemView {
  constructor(index = 0) {
    const eventData = EVENT_OFFER_ITEMS[index];
    this.title = eventData.title;
    this.price = eventData.price;
  }

  getTemplate() {
    return createEventOfferItemTemplate(this.title, this.price);
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

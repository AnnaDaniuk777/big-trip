import { createElement } from '../../render.js';

const createEventOfferListTemplate = (offers = []) => {
  if (!offers || offers.length === 0) {
    return '';
  }

  const offerItems = offers.map((offer) => `
    <li class="event__offer">
      <span class="event__offer-title">${offer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.price}</span>
    </li>
  `).join('');

  return `
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      ${offerItems}
    </ul>
  `;
};

export default class EventOfferListView {
  constructor(offers = []) {
    this.offers = offers;
  }

  getTemplate() {
    return createEventOfferListTemplate(this.offers);
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

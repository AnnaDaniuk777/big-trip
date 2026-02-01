import { createElement } from '../../render.js';
import EventOfferItemView from './event-offer-item-view.js';

const createEventOfferListTemplate = (offers) => `
  <h4 class="visually-hidden">Offers:</h4>
  <ul class="event__selected-offers">
    ${offers.map((offer) => new EventOfferItemView(offer.title, offer.price).getTemplate()).join('')}
  </ul>
`;

export default class EventOfferListView {
  constructor(offers) {
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

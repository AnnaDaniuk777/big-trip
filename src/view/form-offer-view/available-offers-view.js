import { createElement } from '../../render.js';
import OfferSelectorView from './offer-selector-view.js';

const OFFERS_DATA = [
  { id: 'luggage-1', title: 'Add luggage', price: 30, checked: true },
  { id: 'comfort-1', title: 'Switch to comfort class', price: 100, checked: true },
  { id: 'meal-1', title: 'Add meal', price: 15, checked: false },
  { id: 'seats-1', title: 'Choose seats', price: 5, checked: false },
  { id: 'train-1', title: 'Travel by train', price: 40, checked: false }
];

const createAvailableOffersTemplate = () => {
  const offerSelectors = OFFERS_DATA.map((offer) => new OfferSelectorView(offer).getTemplate()).join('');

  return `
    <div class="event__available-offers">
      ${offerSelectors}
    </div>
  `;
};

export default class AvailableOffersView {
  getTemplate() {
    return createAvailableOffersTemplate();
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

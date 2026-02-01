import { createElement } from '../../render.js';

const createOfferSelectorTemplate = (offer) => `
  <div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.id}" type="checkbox" name="event-offer-${offer.id}" ${offer.checked ? 'checked' : ''}>
    <label class="event__offer-label" for="event-offer-${offer.id}">
      <span class="event__offer-title">${offer.title}</span>
      +€&nbsp;
      <span class="event__offer-price">${offer.price}</span>
    </label>
  </div>
`;

export default class OfferSelectorView {
  constructor(offer) {
    this.offer = offer;
  }

  getTemplate() {
    return createOfferSelectorTemplate(this.offer);
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

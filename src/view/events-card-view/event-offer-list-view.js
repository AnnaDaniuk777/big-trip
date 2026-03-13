import AbstractView from '../../framework/view/abstract-view.js';

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

export default class EventOfferListView extends AbstractView {
  #offers = null;

  constructor({offers = []}) {
    super();
    this.#offers = offers;
  }

  get template() {
    return createEventOfferListTemplate(this.#offers);
  }
}

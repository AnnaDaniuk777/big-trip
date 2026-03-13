import AbstractView from '../../../framework/view/abstract-view.js';

const createOffersListTemplate = (selectedOffers = []) => {
  const offers = [
    { id: 'luggage', title: 'Add luggage', price: 30, checked: selectedOffers.includes('luggage') },
    { id: 'comfort', title: 'Switch to comfort class', price: 100, checked: selectedOffers.includes('comfort') },
    { id: 'meal', title: 'Add meal', price: 15, checked: selectedOffers.includes('meal') },
    { id: 'seats', title: 'Choose seats', price: 5, checked: selectedOffers.includes('seats') },
    { id: 'train', title: 'Travel by train', price: 40, checked: selectedOffers.includes('train') }
  ];

  const offerSelectors = offers.map((offer) => `
    <div class="event__offer-selector">
      <input
        class="event__offer-checkbox visually-hidden"
        id="event-offer-${offer.id}-1"
        type="checkbox"
        name="event-offer-${offer.id}"
        ${offer.checked ? 'checked' : ''}
      >
      <label class="event__offer-label" for="event-offer-${offer.id}-1">
        <span class="event__offer-title">${offer.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </label>
    </div>
  `).join('');

  return `
    <section class="event__section event__section--offers">
      <h3 class="event__section-title event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
        ${offerSelectors}
      </div>
    </section>
  `;
};

export default class OffersListView extends AbstractView {
  #selectedOffers = null;

  constructor({selectedOffers = []}) {
    super();
    this.#selectedOffers = selectedOffers;
  }

  get template() {
    return createOffersListTemplate(this.#selectedOffers);
  }
}

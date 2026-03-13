import AbstractView from '../../framework/view/abstract-view.js';

const createEventPriceTemplate = (price) => `
  <p class="event__price">
    &euro;&nbsp;<span class="event__price-value">${price}</span>
  </p>
`;

export default class EventPriceView extends AbstractView {
  #price = null;

  constructor({price}) {
    super();
    this.#price = price;
  }

  get template() {
    return createEventPriceTemplate(this.#price);
  }
}

import AbstractView from '../../../framework/view/abstract-view.js';

const createPriceInputTemplate = (price = '') => `
  <div class="event__field-group event__field-group--price">
    <label class="event__label" for="event-price-1">
      <span class="visually-hidden">Price</span>
      &euro;
    </label>
    <input
      class="event__input event__input--price"
      id="event-price-1"
      type="number"
      name="event-price"
      value="${price}"
      min="0"
      required
    >
  </div>
`;

export default class PriceInputView extends AbstractView {
  #price = null;

  constructor({price = ''}) {
    super();
    this.#price = price;
  }

  get template() {
    return createPriceInputTemplate(this.#price);
  }
}

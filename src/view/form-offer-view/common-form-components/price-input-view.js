import { createElement } from '../../../render.js';

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

export default class PriceInputView {
  constructor(price = '') {
    this.price = price;
  }

  getTemplate() {
    return createPriceInputTemplate(this.price);
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

import { createElement } from '../../render.js';

const createTripCostTemplate = (cost) => `
  <p class="trip-info__cost">
    Total: €&nbsp;<span class="trip-info__cost-value">${cost}</span>
  </p>
`;

export default class TripCostView {
  constructor(cost) {
    this.cost = cost;
  }

  getTemplate() {
    return createTripCostTemplate(this.cost);
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

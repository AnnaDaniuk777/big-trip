import { createElement } from '../../render.js';

const createTripDatesTemplate = (dates) => `
  <p class="trip-info__dates">${dates}</p>
`;

export default class TripDatesView {
  constructor(dates) {
    this.dates = dates;
  }

  getTemplate() {
    return createTripDatesTemplate(this.dates);
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

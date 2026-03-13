import AbstractView from '../../framework/view/abstract-view.js';

const createTripDatesTemplate = (dates) => `
  <p class="trip-info__dates">${dates}</p>
`;

export default class TripDatesView extends AbstractView {
  #dates = null;

  constructor({dates}) {
    super();
    this.#dates = dates;
  }

  get template() {
    return createTripDatesTemplate(this.#dates);
  }
}

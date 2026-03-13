import AbstractView from '../../framework/view/abstract-view.js';
import TripTitleView from './trip-title-view.js';
import TripDatesView from './trip-dates-view.js';
import TripCostView from './trip-cost-view.js';

const createTripInfoTemplate = (title, dates, cost) => {
  const titleView = new TripTitleView(title);
  const datesView = new TripDatesView(dates);
  const costView = new TripCostView(cost);

  return `
    <section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        ${titleView.template}
        ${datesView.template}
      </div>
      ${costView.template}
    </section>
  `;
};

export default class TripInfoView extends AbstractView {
  #title = null;
  #dates = null;
  #cost = null;

  constructor({title, dates, cost}) {
    super();
    this.#title = title;
    this.#dates = dates;
    this.#cost = cost;
  }

  get template() {
    return createTripInfoTemplate(this.#title, this.#dates, this.#cost);
  }
}

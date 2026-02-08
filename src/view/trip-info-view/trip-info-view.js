import { createElement } from '../../render.js';
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
        ${titleView.getTemplate()}
        ${datesView.getTemplate()}
      </div>
      ${costView.getTemplate()}
    </section>
  `;
};

export default class TripInfoView {
  constructor(title, dates, cost) {
    this.title = title;
    this.dates = dates;
    this.cost = cost;
  }

  getTemplate() {
    return createTripInfoTemplate(this.title, this.dates, this.cost);
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

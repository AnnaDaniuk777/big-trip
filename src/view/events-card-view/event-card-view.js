import { createElement } from '../../render.js';
import EventDateView from './event-date-view.js';
import EventTypeView from './event-type-view.js';
import EventTitleView from './event-title-view.js';
import EventScheduleView from './event-schedule-view.js';
import EventPriceView from './event-price-view.js';
import EventOfferListView from './event-offer-list-view.js';
import FavoriteButtonView from './favorite-button-view.js';
import RollupButtonView from './rollup-button-view.js';

const createTripEventTemplate = (index = 0, offers = [], isFavorite = false) => {
  const dateView = new EventDateView(index);
  const typeView = new EventTypeView(index);
  const titleView = new EventTitleView(index);
  const scheduleView = new EventScheduleView(index);
  const priceView = new EventPriceView(index);
  const offersView = new EventOfferListView(offers);
  const favoriteButtonView = new FavoriteButtonView(isFavorite);
  const rollupButtonView = new RollupButtonView();

  return `
    <li class="trip-events__item">
      <div class="event">
        ${dateView.getTemplate()}
        ${typeView.getTemplate()}
        ${titleView.getTemplate()}
        ${scheduleView.getTemplate()}
        ${priceView.getTemplate()}
        ${offersView.getTemplate()}
        ${favoriteButtonView.getTemplate()}
        ${rollupButtonView.getTemplate()}
      </div>
    </li>
  `;
};

export default class EventCardView {
  constructor(index = 0, offers = [], isFavorite = false) {
    this.index = index;
    this.offers = offers;
    this.isFavorite = isFavorite;
  }

  getTemplate() {
    return createTripEventTemplate(this.index, this.offers, this.isFavorite);
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

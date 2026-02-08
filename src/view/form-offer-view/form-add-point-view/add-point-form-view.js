import { createElement } from '../../../render.js';
import EventTypeListView from '../common-form-components/event-type-list-view.js';
import DestinationInputView from '../common-form-components/destination-input-view.js';
import TimeInputsView from '../common-form-components/time-inputs-view.js';
import PriceInputView from '../common-form-components/price-input-view.js';
import OffersListView from '../common-form-components/offers-list-view.js';
import DestinationDescriptionView from '../common-form-components/destination-description-view.js';

const createAddPointFormTemplate = () => {
  const typeListView = new EventTypeListView();
  const destinationInputView = new DestinationInputView('', 'flight');
  const timeInputsView = new TimeInputsView();
  const priceInputView = new PriceInputView();
  const offersListView = new OffersListView();
  const destinationDescriptionView = new DestinationDescriptionView();

  return `
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle visually-hidden" id="event-type-toggle-1" type="checkbox">

            ${typeListView.getTemplate()}
          </div>

          ${destinationInputView.getTemplate()}
          ${timeInputsView.getTemplate()}
          ${priceInputView.getTemplate()}

          <button class="event__save-btn btn btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Cancel</button>
        </header>

        <section class="event__details">
          ${offersListView.getTemplate()}
          ${destinationDescriptionView.getTemplate()}
        </section>
      </form>
    </li>
  `;
};

export default class AddPointFormView {
  getTemplate() {
    return createAddPointFormTemplate();
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

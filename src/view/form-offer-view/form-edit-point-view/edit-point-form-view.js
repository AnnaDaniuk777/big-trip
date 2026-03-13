import AbstractView from '../../../framework/view/abstract-view.js';
import EventTypeListView from '../common-form-components/event-type-list-view.js';
import DestinationInputView from '../common-form-components/destination-input-view.js';
import TimeInputsView from '../common-form-components/time-inputs-view.js';
import PriceInputView from '../common-form-components/price-input-view.js';
import OffersListView from '../common-form-components/offers-list-view.js';
import DestinationDescriptionView from '../common-form-components/destination-description-view.js';

const createEditPointFormTemplate = (eventData = {}) => {
  const data = {
    type: eventData.type || 'flight',
    destination: eventData.destination || 'Geneva',
    startTime: eventData.startTime || '19/03/19 00:00',
    endTime: eventData.endTime || '19/03/19 00:00',
    price: eventData.price || '',
    offers: eventData.offers || [],
    isNew: eventData.isNew || false
  };

  const typeListView = new EventTypeListView(data.type);
  const destinationInputView = new DestinationInputView(data.destination, data.type);
  const timeInputsView = new TimeInputsView(data.startTime, data.endTime);
  const priceInputView = new PriceInputView(data.price);
  const offersListView = new OffersListView(data.offers);
  const destinationDescriptionView = new DestinationDescriptionView(data.destination);

  const resetButtonText = data.isNew ? 'Cancel' : 'Delete';

  return `
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${data.type}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle visually-hidden" id="event-type-toggle-1" type="checkbox">

            ${typeListView.template}
          </div>

          ${destinationInputView.template}
          ${timeInputsView.template}
          ${priceInputView.template}

          <button class="event__save-btn btn btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">${resetButtonText}</button>
          ${!data.isNew ? '<button class="event__rollup-btn" type="button"><span class="visually-hidden">Open event</span></button>' : ''}
        </header>

        <section class="event__details">
          ${offersListView.template}
          ${destinationDescriptionView.template}
        </section>
      </form>
    </li>
  `;
};

export default class EditPointFormView extends AbstractView {
  #eventData = null;

  constructor({eventData = {}}) {
    super();
    this.#eventData = eventData;
  }

  get template() {
    return createEditPointFormTemplate(this.#eventData);
  }
}

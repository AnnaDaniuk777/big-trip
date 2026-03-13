import AbstractView from '../../../framework/view/abstract-view.js';

const createEventTypeListTemplate = (selectedType = 'flight') => {
  const types = [
    { value: 'taxi', label: 'Taxi' },
    { value: 'bus', label: 'Bus' },
    { value: 'train', label: 'Train' },
    { value: 'ship', label: 'Ship' },
    { value: 'drive', label: 'Drive' },
    { value: 'flight', label: 'Flight' },
    { value: 'check-in', label: 'Check-in' },
    { value: 'sightseeing', label: 'Sightseeing' },
    { value: 'restaurant', label: 'Restaurant' }
  ];

  const typeItems = types.map((type) => `
    <div class="event__type-item">
      <input
        id="event-type-${type.value}-1"
        class="event__type-input visually-hidden"
        type="radio"
        name="event-type"
        value="${type.value}"
        ${type.value === selectedType ? 'checked' : ''}
      >
      <label class="event__type-label event__type-label--${type.value}" for="event-type-${type.value}-1">
        ${type.label}
      </label>
    </div>
  `).join('');

  return `
    <div class="event__type-list">
      <fieldset class="event__type-group">
        <legend class="visually-hidden">Event type</legend>
        ${typeItems}
      </fieldset>
    </div>
  `;
};

export default class EventTypeListView extends AbstractView {
  #selectedType = null;

  constructor({selectedType = 'flight'}) {
    super();
    this.#selectedType = selectedType;
  }

  get template() {
    return createEventTypeListTemplate(this.#selectedType);
  }
}

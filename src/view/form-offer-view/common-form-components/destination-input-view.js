import AbstractView from '../../../framework/view/abstract-view.js';
import { capitalizeFirstLetter } from '../../../utils/util.js';

const createDestinationInputTemplate = (destination = '', selectedType = 'flight') => {
  const destinations = ['Amsterdam', 'Geneva', 'Chamonix'];

  const options = destinations.map((dest) =>
    `<option value="${dest}"></option>`
  ).join('');

  return `
    <div class="event__field-group event__field-group--destination">
      <label class="event__label event__type-output" for="event-destination-1">
        ${capitalizeFirstLetter(selectedType)}
      </label>
      <input
        class="event__input event__input--destination"
        id="event-destination-1"
        type="text"
        name="event-destination"
        value="${capitalizeFirstLetter(destination)}"
        list="destination-list-1"
        required
      >
      <datalist id="destination-list-1">
        ${options}
      </datalist>
    </div>
  `;
};

export default class DestinationInputView extends AbstractView {
  #destination = null;
  #selectedType = null;

  constructor({destination = '', selectedType = 'flight'}) {
    super();
    this.#destination = destination;
    this.#selectedType = selectedType;
  }

  get template() {
    return createDestinationInputTemplate(this.#destination, this.#selectedType);
  }
}

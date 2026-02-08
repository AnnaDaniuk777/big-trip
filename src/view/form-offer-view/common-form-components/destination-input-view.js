import { createElement } from '../../../render.js';

const createDestinationInputTemplate = (destination = '', selectedType = 'flight') => {
  const destinations = ['Amsterdam', 'Geneva', 'Chamonix'];

  const options = destinations.map((dest) =>
    `<option value="${dest}"></option>`
  ).join('');

  return `
    <div class="event__field-group event__field-group--destination">
      <label class="event__label event__type-output" for="event-destination-1">
        ${selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}
      </label>
      <input
        class="event__input event__input--destination"
        id="event-destination-1"
        type="text"
        name="event-destination"
        value="${destination}"
        list="destination-list-1"
        required
      >
      <datalist id="destination-list-1">
        ${options}
      </datalist>
    </div>
  `;
};

export default class DestinationInputView {
  constructor(destination = '', selectedType = 'flight') {
    this.destination = destination;
    this.selectedType = selectedType;
  }

  getTemplate() {
    return createDestinationInputTemplate(this.destination, this.selectedType);
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

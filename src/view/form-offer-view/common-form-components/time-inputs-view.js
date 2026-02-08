import { createElement } from '../../../render.js';

const createTimeInputsTemplate = (startTime = '19/03/19 00:00', endTime = '19/03/19 00:00') => `
  <div class="event__field-group event__field-group--time">
    <label class="visually-hidden" for="event-start-time-1">From</label>
    <input
      class="event__input event__input--time"
      id="event-start-time-1"
      type="text"
      name="event-start-time"
      value="${startTime}"
      required
    >
    &mdash;
    <label class="visually-hidden" for="event-end-time-1">To</label>
    <input
      class="event__input event__input--time"
      id="event-end-time-1"
      type="text"
      name="event-end-time"
      value="${endTime}"
      required
    >
  </div>
`;

export default class TimeInputsView {
  constructor(startTime = '19/03/19 00:00', endTime = '19/03/19 00:00') {
    this.startTime = startTime;
    this.endTime = endTime;
  }

  getTemplate() {
    return createTimeInputsTemplate(this.startTime, this.endTime);
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

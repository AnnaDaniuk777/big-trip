import { createElement } from '../../render.js';

const EVENT_TYPES = [
  { type: 'taxi' },
  { type: 'flight' },
  { type: 'drive' },
  { type: 'check-in' },
  { type: 'sightseeing' },
  { type: 'drive' },
  { type: 'flight' }
];


const createEventTypeTemplate = (type) => `
  <div class="event__type">
    <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
  </div>
`;

export default class EventTypeView {
  constructor(index = 0) {
    const typeData = EVENT_TYPES[index];
    this.type = typeData.type;
  }

  getTemplate() {
    return createEventTypeTemplate(this.type);
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

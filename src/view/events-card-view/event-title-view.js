import { createElement } from '../../render.js';

const EVENT_TITLES = [
  {
    type: 'Taxi',
    destination: 'Amsterdam'
  },
  {
    type: 'Flight',
    destination: 'Chamonix'
  },
  {
    type: 'Drive',
    destination: 'Chamonix'
  },
  {
    type: 'Check-in',
    destination: 'Chamonix'
  },
  {
    type: 'Sightseeing',
    destination: 'Chamonix'
  },
  {
    type: 'Drive',
    destination: 'Geneva'
  },
  {
    type: 'Flight',
    destination: 'Geneva'
  }
];

const createEventTitleTemplate = (type, destination) => `
  <h3 class="event__title">${type} ${destination}</h3>
`;

export default class EventTitleView {
  constructor(index = 0) {
    const titleData = EVENT_TITLES[index];
    this.type = titleData.type;
    this.destination = titleData.destination;
  }

  getTemplate() {
    return createEventTitleTemplate(this.type, this.destination);
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

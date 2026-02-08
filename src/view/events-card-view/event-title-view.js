import { createElement } from '../../render.js';

const createEventTitleTemplate = (type, destinationName) => `
  <h3 class="event__title">${type.charAt(0).toUpperCase() + type.slice(1)} ${destinationName}</h3>
`;

export default class EventTitleView {
  constructor(type, destinationName) {
    this.type = type;
    this.destinationName = destinationName;
  }

  getTemplate() {
    return createEventTitleTemplate(this.type, this.destinationName);
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

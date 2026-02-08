import { createElement } from '../../render.js';

const createEventDateTemplate = (dateString) => {
  if (!dateString) {
    return '<time class="event__date" datetime=""></time>';
  }

  const date = new Date(dateString);
  const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
  const day = date.getDate();

  return `
      <time class="event__date" datetime="${dateString}">${month} ${day}</time>
    `;
};

export default class EventDateView {
  constructor(dateString) {
    this.dateString = dateString;
  }

  getTemplate() {
    return createEventDateTemplate(this.dateString);
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

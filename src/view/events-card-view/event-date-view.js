import AbstractView from '../../framework/view/abstract-view.js';

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

export default class EventDateView extends AbstractView {
  #dateString = null;

  constructor({dateString}) {
    super();
    this.#dateString = dateString;
  }

  get template() {
    return createEventDateTemplate(this.#dateString);
  }
}

import { createElement } from '../../render.js';

const EVENT_DATE = [
  { date: 'MAR 18', datetime: '2019-03-18' },
  { date: 'MAR 18', datetime: '2019-03-18' },
  { date: 'MAR 18', datetime: '2019-03-18' },
  { date: 'MAR 18', datetime: '2019-03-18' },
  { date: 'MAR 19', datetime: '2019-03-19' },
  { date: 'MAR 19', datetime: '2019-03-19' },
  { date: 'MAR 19', datetime: '2019-03-19' }
];

const createEventDateTemplate = (date, datetime) => `
  <time class="event__date" datetime="${datetime}">${date}</time>
`;

export default class EventDateView {
  constructor(index = 0) {
    const dateData = EVENT_DATE[index];
    this.date = dateData.date;
    this.datetime = dateData.datetime;
  }

  getTemplate() {
    return createEventDateTemplate(this.date, this.datetime);
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

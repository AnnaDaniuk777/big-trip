import { createElement } from '../../render.js';

const formatTime = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
};

const calculateDuration = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const diffMs = endDate - startDate;

  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  if (hours > 0) {
    return `${hours}H ${minutes}M`;
  }
  return `${minutes}M`;
};

const createEventScheduleTemplate = (dateFrom, dateTo) => `
  <div class="event__schedule">
    <p class="event__time">
      <time class="event__start-time" datetime="${dateFrom}">${formatTime(dateFrom)}</time>
      &mdash;
      <time class="event__end-time" datetime="${dateTo}">${formatTime(dateTo)}</time>
    </p>
    <p class="event__duration">${calculateDuration(dateFrom, dateTo)}</p>
  </div>
`;

export default class EventScheduleView {
  constructor(dateFrom, dateTo) {
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
  }

  getTemplate() {
    return createEventScheduleTemplate(this.dateFrom, this.dateTo);
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

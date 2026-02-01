import { createElement } from '../../render.js';

const EVENT_SCHEDULES = [
  {
    startTime: '2019-03-18T10:30',
    endTime: '2019-03-18T11:00',
    duration: '30M'
  },
  {
    startTime: '2019-03-18T12:25',
    endTime: '2019-03-18T13:35',
    duration: '01H 10M'
  },
  {
    startTime: '2019-03-18T14:30',
    endTime: '2019-03-18T16:05',
    duration: '01H 35M'
  },
  {
    startTime: '2019-03-18T16:20',
    endTime: '2019-03-18T17:00',
    duration: '40M'
  },
  {
    startTime: '2019-03-19T14:20',
    endTime: '2019-03-19T13:00',
    duration: '01H 20M'
  },
  {
    startTime: '2019-03-19T16:00',
    endTime: '2019-03-19T17:00',
    duration: '01H 00M'
  },
  {
    startTime: '2019-03-19T18:00',
    endTime: '2019-03-19T19:00',
    duration: '01H 00M'
  }
];

const createEventScheduleTemplate = (startTime, endTime, duration) => {
  const formatTime = (isoTime) => isoTime ? isoTime.split('T')[1] : '';

  return `
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${startTime}">${formatTime(startTime)}</time>
        &mdash;
        <time class="event__end-time" datetime="${endTime}">${formatTime(endTime)}</time>
      </p>
      <p class="event__duration">${duration}</p>
    </div>
  `;
};

export default class EventScheduleView {
  constructor(index = 0) {
    const scheduleData = EVENT_SCHEDULES[index];
    this.startTime = scheduleData.startTime;
    this.endTime = scheduleData.endTime;
    this.duration = scheduleData.duration;
  }

  getTemplate() {
    return createEventScheduleTemplate(this.startTime, this.endTime, this.duration);
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

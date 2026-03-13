import AbstractView from '../../framework/view/abstract-view.js';

const createEventTypeTemplate = (type) => `
  <div class="event__type">
    <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
  </div>
`;

export default class EventTypeView extends AbstractView {
  #type = null;

  constructor({type}) {
    super();
    this.#type = type;
  }

  get template() {
    return createEventTypeTemplate(this.#type);
  }
}

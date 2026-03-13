import AbstractView from '../../framework/view/abstract-view.js';

const createEventTitleTemplate = (type, destinationName) => `
  <h3 class="event__title">${type.charAt(0).toUpperCase() + type.slice(1)} ${destinationName}</h3>
`;

export default class EventTitleView extends AbstractView {
  #type = null;
  #destinationName = null;

  constructor({type, destinationName}) {
    super();
    this.#type = type;
    this.#destinationName = destinationName;
  }

  get template() {
    return createEventTitleTemplate(this.#type, this.#destinationName);
  }
}

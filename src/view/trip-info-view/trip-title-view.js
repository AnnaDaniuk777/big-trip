import AbstractView from '../../framework/view/abstract-view.js';

const createTripTitleTemplate = (title) => `
  <h1 class="trip-info__title">${title}</h1>
`;

export default class TripTitleView extends AbstractView {
  #title = null;

  constructor({ title }) {
    super();
    this.#title = title;
  }

  get template() {
    return createTripTitleTemplate(this.#title);
  }
}

import { createElement } from '../../render.js';

const createEventSectionTemplate = (content, modifier = '') => `
  <section class="event__section ${modifier ? `event__section--${modifier}` : ''}">
    ${content}
  </section>
`;

export default class EventSectionView {
  constructor(content, modifier = '') {
    this.content = content;
    this.modifier = modifier;
  }

  getTemplate() {
    return createEventSectionTemplate(this.content, this.modifier);
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

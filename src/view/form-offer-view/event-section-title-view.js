import { createElement } from '../../render.js';

const createEventSectionTitleTemplate = (text, modifier = '') => {
  const modifierClass = modifier ? ` event__section-title--${modifier}` : '';

  return `
    <h3 class="event__section-title${modifierClass}">
      ${text}
    </h3>
  `;
};

export default class EventSectionTitleView {
  constructor(text, modifier = '') {
    this.text = text;
    this.modifier = modifier;
  }

  getTemplate() {
    return createEventSectionTitleTemplate(this.text, this.modifier);
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

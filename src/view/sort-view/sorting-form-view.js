import { createElement } from '../../render.js';
import { formatLabelText } from '../../utils/util.js';

const SORT_TYPES = [
  { type: 'day', isChecked: true, isDisabled: false },
  { type: 'event', isChecked: false, isDisabled: true },
  { type: 'time', isChecked: false, isDisabled: false },
  { type: 'price', isChecked: false, isDisabled: false },
  { type: 'offers', isChecked: false, isDisabled: true }
];

const createSortingItemTemplate = (item) => `
  <div class="trip-sort__item  trip-sort__item--${item.type}">
    <input id="sort-${item.type}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${item.type}"  ${item.isChecked ? 'checked' : ''} ${item.isDisabled ? 'disabled' : ''}>
    <label class="trip-sort__btn" for="sort-${item.type}">${formatLabelText(item.type)}</label>
  </div>
`;

const createSortingTemplate = () =>
  `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${SORT_TYPES.map((item) => createSortingItemTemplate(item)).join('')}
  </form>`;

export default class SortingFormView {
  getTemplate() {
    return createSortingTemplate();
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

import AbstractView from '../../framework/view/abstract-view.js';
import { capitalizeFirstLetter } from '../../utils/util.js';

const FILTER_TYPES = [
  { type: 'everything', isChecked: true },
  { type: 'future', isChecked: false },
  { type: 'present', isChecked: false },
  { type: 'past', isChecked: false }
];

const createFilterItemTemplate = (item) => `
  <div class="trip-filters__filter">
    <input id="filter-${item.type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${item.type}" ${item.isChecked ? 'checked' : ''}>
      <label class="trip-filters__filter-label" for="filter-${item.type}">${capitalizeFirstLetter(item.type)}</label>
  </div>
`;


function createFilterTemplate() {
  return (
    `<form class="trip-filters" action="#" method="get">
    ${FILTER_TYPES.map((item) => createFilterItemTemplate(item)).join('')}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
}

export default class FilterFormView extends AbstractView {
  get template() {
    return createFilterTemplate();
  }
}

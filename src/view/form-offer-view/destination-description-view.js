import { createElement } from '../../render.js';

const DESTINATION_DESCRIPTIONS = {
  'Geneva': 'Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.',
  'Chamonix': 'Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it\'s renowned for its skiing.',
  'Amsterdam': 'Amsterdam is the capital and most populous city of the Netherlands. It is known for its artistic heritage, elaborate canal system and narrow houses with gabled facades.'
};

const createDestinationDescriptionTemplate = (destination = 'Geneva') => `
  <p class="event__destination-description">
    ${DESTINATION_DESCRIPTIONS[destination] || DESTINATION_DESCRIPTIONS.Geneva}
  </p>
`;

export default class DestinationDescriptionView {
  constructor(destination = 'Geneva') {
    this.destination = destination;
  }

  getTemplate() {
    return createDestinationDescriptionTemplate(this.destination);
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

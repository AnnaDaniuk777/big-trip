import { createElement } from '../../../render.js';

const createDestinationDescriptionTemplate = (destination = 'Geneva') => {
  const descriptions = {
    'Geneva': 'Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.',
    'Chamonix': 'Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it\'s renowned for its skiing.',
    'Amsterdam': 'Amsterdam is the Netherlands\' capital, known for its artistic heritage, elaborate canal system and narrow houses with gabled facades, legacies of the city\'s 17th-century Golden Age.'
  };

  const photos = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
  const photoTags = photos.map((photo) =>
    `<img class="event__photo" src="img/photos/${photo}" alt="Event photo">`
  ).join('');

  return `
    <section class="event__section event__section--destination">
      <h3 class="event__section-title event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${descriptions[destination] || descriptions.Geneva}</p>
      <div class="event__photos-container">
        <div class="event__photos-tape">
          ${photoTags}
        </div>
      </div>
    </section>
  `;
};

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

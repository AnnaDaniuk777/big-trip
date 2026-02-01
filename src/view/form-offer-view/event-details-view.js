import { createElement } from '../../render.js';
import OffersSectionView from './offers-section-view.js';
import DestinationSectionView from './destination-section-view.js';

const createEventDetailsTemplate = (hasOffers = true, hasDestination = true, destination = 'Geneva') => {
  const offersSection = new OffersSectionView();
  const destinationSection = new DestinationSectionView(destination);

  return `
    <section class="event__details">
      ${hasOffers ? offersSection.getTemplate() : ''}
      ${hasDestination ? destinationSection.getTemplate() : ''}
    </section>
  `;
};

export default class EventDetailsView {
  constructor(hasOffers = true, hasDestination = true, destination = 'Geneva') {
    this.hasOffers = hasOffers;
    this.hasDestination = hasDestination;
    this.destination = destination;
  }

  getTemplate() {
    return createEventDetailsTemplate(this.hasOffers, this.hasDestination, this.destination);
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

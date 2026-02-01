import { createElement } from '../../render.js';
import EventSectionTitleView from './event-section-title-view.js';
import DestinationDescriptionView from './destination-description-view.js';
import PhotosContainerView from './photos-container-view.js';
import EventSectionView from './event-section-view.js';

const createDestinationSectionTemplate = (destination = 'Geneva') => {
  const titleView = new EventSectionTitleView('Destination', 'destination');
  const descriptionView = new DestinationDescriptionView(destination);
  const photosView = new PhotosContainerView(destination);

  const content = `
    ${titleView.getTemplate()}
    ${descriptionView.getTemplate()}
    ${photosView.getTemplate()}
  `;

  const sectionView = new EventSectionView(content, 'destination');

  return sectionView.getTemplate();
};

export default class DestinationSectionView {
  constructor(destination = 'Geneva') {
    this.destination = destination;
  }

  getTemplate() {
    return createDestinationSectionTemplate(this.destination);
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

import { createElement } from '../../render.js';
import EventSectionTitleView from './event-section-title-view.js';
import AvailableOffersView from './available-offers-view.js';
import EventSectionView from './event-section-view.js';

const createOffersSectionTemplate = () => {
  const titleView = new EventSectionTitleView('Offers', 'offers');
  const offersView = new AvailableOffersView();

  const content = `
    ${titleView.getTemplate()}
    ${offersView.getTemplate()}
  `;

  const sectionView = new EventSectionView(content, 'offers');

  return sectionView.getTemplate();
};

export default class OffersSectionView {
  getTemplate() {
    return createOffersSectionTemplate();
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

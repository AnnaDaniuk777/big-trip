import SortingFormView from '../view/sort-view/sorting-form-view.js';
import EventCardView from '../view/events-card-view/event-card-view.js';
// import AddPointFormView from '../view/form-offer-view/form-add-point-view/add-point-form-view.js';
import EditPointFormView from '../view/form-offer-view/form-edit-point-view/edit-point-form-view.js';
import EventListView from '../view/events-card-view/event-list-view.js';
import { render } from '../render.js';
import {
  getPoints,
  getBlankPoint,
  getDestinationById,
  getOffersForType
} from '../model/mock/mock-data-generation.js';

export default class TripPresenter {
  constructor(tripEventsContainer) {
    this.tripEventsContainer = tripEventsContainer;

    this.sortingComponent = new SortingFormView();
    this.eventListComponent = new EventListView();
    this.eventCards = [];
  }

  init() {
    const points = getPoints();
    render(this.sortingComponent, this.tripEventsContainer);
    render(this.eventListComponent, this.tripEventsContainer);
    const listElement = this.eventListComponent.getElement();

    if (points.length > 0) {
      const firstPoint = points[0];
      const firstDestination = getDestinationById(firstPoint.destination);
      const firstOffers = getOffersForType(firstPoint.type);
      const editForm = new EditPointFormView(firstPoint, firstDestination, firstOffers, false);
      render(editForm, listElement);

      for (let i = 1; i < points.length; i++) {
        const point = points[i];
        const destination = getDestinationById(point.destination);
        const offers = getOffersForType(point.type).filter((offer) =>
          point.offers.includes(offer.id)
        );

        const card = new EventCardView(point, destination, offers);
        this.eventCards.push(card);

        render(card, listElement);
      }
    } else {
      const blankPoint = getBlankPoint();
      const newForm = new EditPointFormView(blankPoint, {}, [], true);
      render(newForm, listElement);
    }

    this.setupNewEventButtonHandler();
  }

  setupNewEventButtonHandler() {
    const newEventButton = document.querySelector('.trip-main__event-add-btn');

    if (!newEventButton) {
      return;
    }

    newEventButton.addEventListener('click', () => {
      const blankPoint = getBlankPoint();
      const listElement = this.eventListComponent.getElement();
      const existingForm = listElement.querySelector('.event--edit');

      if (existingForm) {
        existingForm.remove();
      }

      const newForm = new EditPointFormView(blankPoint, {}, [], true);

      render(newForm, listElement, 'afterbegin');

      newEventButton.disabled = true;
    });
  }
}

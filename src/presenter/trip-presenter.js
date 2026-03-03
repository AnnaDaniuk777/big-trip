import SortingFormView from '../view/sort-view/sorting-form-view.js';
import EventCardView from '../view/events-card-view/event-card-view.js';
import EditPointFormView from '../view/form-offer-view/form-edit-point-view/edit-point-form-view.js';
import EventListView from '../view/events-card-view/event-list-view.js';
import { render } from '../render.js';

export default class TripPresenter {
  constructor(tripEventsContainer, pointsModel, destinationsModel, offersModel) {
    this.tripEventsContainer = tripEventsContainer;
    this.pointsModel = pointsModel;
    this.destinationsModel = destinationsModel;
    this.offersModel = offersModel;

    this.sortingComponent = new SortingFormView();
    this.eventListComponent = new EventListView();
    this.eventCards = [];
  }

  init() {
    const points = this.pointsModel.getPoints();

    render(this.sortingComponent, this.tripEventsContainer);
    render(this.eventListComponent, this.tripEventsContainer);

    const listElement = this.eventListComponent.getElement();

    const firstPoint = points[0];
    const firstDestination = this.destinationsModel.getDestinationById(firstPoint.destination);
    const firstOffers = this.offersModel.getOffersByType(firstPoint.type);
    const editForm = new EditPointFormView(firstPoint, firstDestination, firstOffers, false);
    render(editForm, listElement);

    for (let i = 1; i < points.length; i++) {
      const point = points[i];
      const destination = this.destinationsModel.getDestinationById(point.destination);
      const offers = this.offersModel.getOffersByType(point.type).filter((offer) =>
        point.offers.includes(offer.id)
      );

      const card = new EventCardView(point, destination, offers);
      this.eventCards.push(card);

      render(card, listElement);
    }

    this.setupNewEventButtonHandler();
  }

  setupNewEventButtonHandler() {
    const newEventButton = document.querySelector('.trip-main__event-add-btn');

    if (!newEventButton) {
      return;
    }

    newEventButton.addEventListener('click', () => {
      const listElement = this.eventListComponent.getElement();
      const existingForm = listElement.querySelector('.event--edit');

      if (existingForm) {
        existingForm.remove();
      }

      const newForm = new EditPointFormView({}, [], true);
      render(newForm, listElement, 'afterbegin');

      newEventButton.disabled = true;
    });
  }

  updatePoints() {
    this.eventCards = [];
    const listElement = this.eventListComponent.getElement();
    listElement.innerHTML = '';

    this.init();
  }
}

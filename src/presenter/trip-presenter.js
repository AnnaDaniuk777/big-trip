import SortingFormView from '../view/sort-view/sorting-form-view.js';
import EventCardView from '../view/events-card-view/event-card-view.js';
import AddPointFormView from '../view/form-offer-view/form-add-point-view/add-point-form-view.js';
import EditPointFormView from '../view/form-offer-view/form-edit-point-view/edit-point-form-view.js';
import EventListView from '../view/events-card-view/event-list-view.js';
import { render } from '../render.js';
import { POINT_ROUTE_COUNT } from '../const.js';

export default class TripPresenter {
  constructor() {
    this.sortingComponent = new SortingFormView();
    this.listComponent = new EventListView();
    this.isEditMode = false;
  }

  init = (sortingContainer) => {
    this.sortingContainer = sortingContainer;

    render(this.sortingComponent, this.sortingContainer, 'afterbegin');
    render(this.listComponent, this.sortingContainer);

    const editFormData = {
      type: 'flight',
      destination: 'Geneva',
      startTime: '19/03/19 00:00',
      endTime: '19/03/19 00:00',
      price: '',
      offers: [],
      isNew: true
    };

    const editForm = new EditPointFormView(editFormData);
    render(editForm, this.listComponent.getElement(), 'afterbegin');

    for (let i = 1; i < POINT_ROUTE_COUNT; i++) {
      render(new EventCardView(), this.listComponent.getElement());
    }

    this.setNewEventButtonHandler();
  };

  setNewEventButtonHandler = () => {
    const newEventButton = document.querySelector('.trip-main__event-add-btn');

    if (newEventButton) {
      newEventButton.addEventListener('click', () => {
        if (!this.isEditMode) {
          const addForm = new AddPointFormView();
          render(addForm, this.listComponent.getElement(), 'afterbegin');
          this.isEditMode = true;
          newEventButton.disabled = true;
        }
      });
    }
  };
}

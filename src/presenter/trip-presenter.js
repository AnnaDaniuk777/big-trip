import SortingFormView from '../view/sort-view/sorting-form-view.js';
import EventCardView from '../view/events-card-view/event-card-view.js';
import EventListView from '../view/events-card-view/event-list-view.js';
import { render } from '../render.js';
import { POINT_ROUTE_COUNT } from '../const.js';

export default class TripPresenter {
  sortingComponent = new SortingFormView();
  listComponent = new EventListView();

  init = (container) => {
    this.container = container;

    render(this.sortingComponent, this.container);
    render(this.listComponent, this.container);

    for (let i = 0; i < POINT_ROUTE_COUNT; i++) {
      render(new EventCardView(), this.listComponent.getElement());
    }
  };
}

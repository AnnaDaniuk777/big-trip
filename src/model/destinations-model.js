import { DESTINATIONS } from '../mock/mock-destinations.js';

export default class DestinationsModel {
  constructor(destinations = DESTINATIONS) {
    this.destinations = destinations;
  }

  getDestinations() {
    return this.destinations;
  }

  getDestinationById(id) {
    return this.destinations.find((dest) => dest.id === id);
  }

  getDestinationByName(name) {
    return this.destinations.find((dest) => dest.name === name);
  }
}

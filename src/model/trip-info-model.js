import { POINTS } from '../mock/mock-points.js';
import { getDestinationById } from '../mock/mock-destinations.js';
import { getOfferById } from '../mock/mock-offers.js';

export default class TripInfoModel {
  constructor(points = POINTS) {
    this.points = points;
  }

  getTripTitle() {
    if (this.points.length === 0) {
      return '';
    }

    const destinations = this.points
      .map((point) => getDestinationById(point.destination)?.name)
      .filter(Boolean);

    const uniqueDestinations = destinations.filter((dest, index, array) =>
      index === 0 || dest !== array[index - 1]
    );

    if (uniqueDestinations.length > 3) {
      return `${uniqueDestinations[0]} — ... — ${uniqueDestinations[uniqueDestinations.length - 1]}`;
    }

    return uniqueDestinations.join(' — ') || '';
  }

  getTripDates() {
    if (this.points.length === 0) {
      return '';
    }

    const dates = this.points.map((point) => new Date(point.dateFrom));
    const startDate = dates[0];
    const endDate = dates[dates.length - 1];

    const formatDate = (date) => {
      const day = date.getDate();
      const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
      return `${day} ${month}`;
    };

    return `${formatDate(startDate)} — ${formatDate(endDate)}`;
  }

  getTotalCost() {
    return this.points.reduce((total, point) => {
      const pointCost = point.basePrice;
      const offersCost = point.offers.reduce((sum, offerId) => {
        const offer = getOfferById(point.type, offerId);
        return sum + (offer?.price || 0);
      }, 0);

      return total + pointCost + offersCost;
    }, 0);
  }

  setPoints(points) {
    this.points = points;
  }
}

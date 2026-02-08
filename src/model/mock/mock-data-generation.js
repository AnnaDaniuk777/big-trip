import { DESTINATIONS } from './mock-destinations.js';
import { OFFERS_BY_TYPE } from './mock-offers.js';
import { POINTS, BLANK_POINT } from './mock-points.js';
import { getRandomArrayElement } from '../../utils/util.js';

export const getDestinations = () => [...DESTINATIONS];

export const getDestinationById = (id) =>
  DESTINATIONS.find((destination) => destination.id === id);

export const getRandomDestination = () =>
  getRandomArrayElement(DESTINATIONS);

export const getOffersByType = () => [...OFFERS_BY_TYPE];

export const getOffersForType = (type) => {
  const typeOffers = OFFERS_BY_TYPE.find((offer) => offer.type === type);
  return typeOffers ? typeOffers.offers : [];
};

export const getOfferById = (type, offerId) => {
  const offers = getOffersForType(type);
  return offers.find((offer) => offer.id === offerId);
};

export const getPoints = () => [...POINTS];

export const getPointById = (id) =>
  POINTS.find((point) => point.id === id);

export const getRandomPoint = () =>
  getRandomArrayElement(POINTS);

export const getRandomPoints = (count) => {
  const shuffled = [...POINTS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getBlankPoint = () => ({ ...BLANK_POINT });

export const getTripTitle = () => {
  if (POINTS.length === 0) {
    return '';
  }

  const destinations = POINTS
    .map((point) => getDestinationById(point.destination)?.name)
    .filter(Boolean);

  const uniqueDestinations = destinations.filter((dest, index, array) =>
    index === 0 || dest !== array[index - 1]
  );

  if (uniqueDestinations.length > 3) {
    return `${uniqueDestinations[0]} — ... — ${uniqueDestinations[uniqueDestinations.length - 1]}`;
  }

  return uniqueDestinations.join(' — ') || '';
};

export const getTripDates = () => {
  if (POINTS.length === 0) {
    return '';
  }

  const dates = POINTS.map((point) => new Date(point.dateFrom));
  const startDate = dates[0];
  const endDate = dates[dates.length - 1];

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    return `${day} ${month}`;
  };

  return `${formatDate(startDate)} — ${formatDate(endDate)}`;
};

export const getTotalCost = () => POINTS.reduce((total, point) => {
  const pointCost = point.basePrice;
  const offersCost = point.offers.reduce((sum, offerId) => {
    const offer = getOfferById(point.type, offerId);
    return sum + (offer?.price || 0);
  }, 0);

  return total + pointCost + offersCost;
}, 0);

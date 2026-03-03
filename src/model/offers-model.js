import { OFFERS_BY_TYPE } from '../mock/mock-offers.js';

export default class OffersModel {
  constructor(offers = OFFERS_BY_TYPE) {
    this.offers = offers;
  }

  getOffers() {
    return this.offers;
  }

  getOffersByType(type) {
    return this.offers.find((offer) => offer.type === type)?.offers || [];
  }

  getOfferById(type, offerId) {
    const offersByType = this.getOffersByType(type);
    return offersByType.find((offer) => offer.id === offerId);
  }
}

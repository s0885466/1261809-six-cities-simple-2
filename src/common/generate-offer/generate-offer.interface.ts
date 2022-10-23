import { Offer } from '../../modules/offer/offer.type.js';
import { OfferSets } from '../../modules/offer/offerSets.type.js';

export interface GenerateOfferInterface {
  generateOffer(offerSet: OfferSets): Offer;
}

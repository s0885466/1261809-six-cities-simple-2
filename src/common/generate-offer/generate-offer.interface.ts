import { Offer } from '../../types/offer.type.js';
import { OfferSets } from '../../types/offerSets.type.js';

export interface GenerateOfferInterface {
  generateOffer(offerSet: OfferSets): Offer;
}

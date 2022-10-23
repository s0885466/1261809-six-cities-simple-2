import { OfferSets } from '../../modules/offer/offerSets.type.js';

export interface FetchSetsInterface {
  fetch(url: string): Promise<OfferSets | Error>;
}

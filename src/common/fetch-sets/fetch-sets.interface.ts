import { OfferSets } from '../../types/offerSets.type.js';

export interface FetchSetsInterface {
  fetch(url: string): Promise<OfferSets | Error>;
}

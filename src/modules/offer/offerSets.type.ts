import { CITIES } from '../../types/cities.enum.js';
import { ADVANTAGES } from '../../types/advantages.enum.js';
import { ACCOMMODATION_TYPE } from '../../types/accommodation-type.enum.js';

type CitiesSet = CITIES[];
type AdvantagesSet = ADVANTAGES[];
type AccommodationTypesSet = ACCOMMODATION_TYPE[];

export type OfferSets = {
  citiesSet: CitiesSet;
  advantagesSet: AdvantagesSet;
  accommodationTypesSet: AccommodationTypesSet;
};

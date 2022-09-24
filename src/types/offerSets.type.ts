import { Cities } from './cities.enum.js';
import { Advantages } from './advantages.enum.js';
import { AccommodationType } from './accomodation-type.enum.js';

type CitiesSet = Cities[];
type AdvantagesSet = Advantages[];
type AccommodationTypesSet = AccommodationType[];

export type OfferSets = {
  citiesSet: CitiesSet;
  advantagesSet: AdvantagesSet;
  accommodationTypesSet: AccommodationTypesSet;
};

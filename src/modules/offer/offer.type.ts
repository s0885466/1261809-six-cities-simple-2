import { Coordinates } from '../../types/coordinates.type.js';
import { ACCOMMODATION_TYPE } from '../../types/accommodation-type.enum.js';
import { ADVANTAGES } from '../../types/advantages.enum.js';
import { CITIES } from '../../types/cities.enum.js';
import { ImageAccommodation } from '../../types/image-accomodation.type.js';

export type Offer = {
  title: string;
  description: string;
  postDate: Date;
  city: CITIES;
  imagePreview: string;
  imageAccommodation: ImageAccommodation;
  isPremium: boolean;
  rating: number;
  accommodationType: ACCOMMODATION_TYPE;
  roomsAmount: number;
  guestsAmount: number;
  rentPrice: number;
  advantages: ADVANTAGES[];
  offerAuthor: string;
  commentsAmount: number;
  coordinates: Coordinates;
};

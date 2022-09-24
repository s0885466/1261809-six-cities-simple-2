import { Coordinates } from './coordinates.type.js';
import { AccommodationType } from './accomodation-type.enum.js';
import { Advantages } from './advantages.enum.js';
import { Cities } from './cities.enum.js';
import { ImageAccommodation } from './image-accomodation.type.js';

export type Offer = {
  title: string;
  description: string;
  postDate: Date;
  city: Cities;
  imagePreview: string;
  imageAccommodation: ImageAccommodation;
  isPremium: boolean;
  rating: number;
  accommodationType: AccommodationType;
  roomsAmount: number;
  guestsAmount: number;
  rentPrice: number;
  advantages: Advantages[];
  offerAuthor: string;
  commentsAmount: number;
  coordinates: Coordinates;
};

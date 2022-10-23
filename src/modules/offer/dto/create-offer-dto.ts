import { CITIES } from '../../../types/cities.enum.js';
import { ImageAccommodation } from '../../../types/image-accomodation.type.js';
import { ACCOMMODATION_TYPE } from '../../../types/accommodation-type.enum.js';
import { ADVANTAGES } from '../../../types/advantages.enum.js';
import { Coordinates } from '../../../types/coordinates.type.js';

export class CreateOfferDto {
  public title: string;
  public description: string;
  public postDate: Date;
  public city: CITIES;
  public imagePreview: string;
  public imageAccommodation: ImageAccommodation;
  public isPremium: boolean;
  public rating: number;
  public accommodationType: ACCOMMODATION_TYPE;
  public roomsAmount: number;
  public guestsAmount: number;
  public rentPrice: number;
  public advantages: ADVANTAGES[];
  public offerAuthor: string;
  public commentsAmount: number;
  public coordinates: Coordinates;
}

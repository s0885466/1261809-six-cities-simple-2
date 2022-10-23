import typegoose, { getModelForClass, defaultClasses } from '@typegoose/typegoose';
import { Offer } from './offer.type.js';
import { CITIES } from '../../types/cities.enum.js';
import { ImageAccommodation } from '../../types/image-accomodation.type.js';
import { ACCOMMODATION_TYPE } from '../../types/accommodation-type.enum.js';
import { ADVANTAGES } from '../../types/advantages.enum.js';
import { Coordinates } from '../../types/coordinates.type.js';

const { prop, modelOptions } = typegoose;

export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'users',
  },
})
export class OfferEntity extends defaultClasses.TimeStamps implements Offer {
  constructor(offer: Offer) {
    super();
    this.title = offer.title;
    this.description = offer.description;
    this.postDate = offer.postDate;
    this.city = offer.city;
    this.imagePreview = offer.imagePreview;
    this.imageAccommodation = offer.imageAccommodation;
    this.isPremium = offer.isPremium;
    this.rating = offer.rating;
    this.accommodationType = offer.accommodationType;
    this.roomsAmount = offer.roomsAmount;
    this.guestsAmount = offer.guestsAmount;
    this.rentPrice = offer.rentPrice;
    this.advantages = offer.advantages;
    this.offerAuthor = offer.offerAuthor;
    this.commentsAmount = offer.commentsAmount;
    this.coordinates = offer.coordinates;
  }

  @prop()
  public title: string;

  @prop()
  public description: string;

  @prop()
  public postDate: Date;

  @prop()
  public city: CITIES;

  @prop()
  public imagePreview: string;

  @prop()
  public imageAccommodation: ImageAccommodation;

  @prop()
  public isPremium: boolean;

  @prop()
  public rating: number;

  @prop()
  public accommodationType: ACCOMMODATION_TYPE;

  @prop()
  public roomsAmount: number;

  @prop()
  public guestsAmount: number;

  @prop()
  public rentPrice: number;

  @prop()
  public advantages: ADVANTAGES[];

  @prop()
  public offerAuthor: string;

  @prop()
  public commentsAmount: number;

  @prop()
  public coordinates: Coordinates;
}

export const OfferModel = getModelForClass(OfferEntity);

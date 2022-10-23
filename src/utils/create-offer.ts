import { CITIES } from '../types/cities.enum';
import { ImageAccommodation } from '../types/image-accomodation.type';
import { ACCOMMODATION_TYPE } from '../types/accommodation-type.enum';
import { ADVANTAGES } from '../types/advantages.enum';
import { Coordinates } from '../types/coordinates.type';
import { Offer } from '../modules/offer/offer.type';

export const createOffer = (line: string): Offer => {
  const lineArr = line.trim().split('\t');

  const [
    title,
    description,
    postDate,
    city,
    imagePreview,
    imageAccommodation,
    isPremium,
    rating,
    accommodationType,
    roomsAmount,
    guestsAmount,
    rentPrice,
    advantages,
    offerAuthor,
    commentsAmount,
    coordinates,
  ] = lineArr;

  return {
    title,
    description,
    postDate: new Date(postDate),
    city: city as CITIES,
    imagePreview,
    imageAccommodation: imageAccommodation
      .split(';')
      .map((img) => img) as ImageAccommodation,
    isPremium: isPremium === 'true',
    rating: Number(rating),
    accommodationType: accommodationType as ACCOMMODATION_TYPE,
    roomsAmount: Number(roomsAmount),
    guestsAmount: Number(guestsAmount),
    rentPrice: Number(rentPrice),
    advantages: advantages.split(';').map((advantage) => advantage) as ADVANTAGES[],
    offerAuthor,
    commentsAmount: Number(commentsAmount),
    coordinates: {
      latitude: Number(coordinates.split(';')[0]),
      longitude: Number(coordinates.split(';')[1]),
    } as Coordinates,
  };
};

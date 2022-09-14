import { FileReaderInterface } from './file-reader.interface';
import { readFileSync } from 'fs';
import {
  Offer,
  Cities,
  AccommodationType,
  Advantages,
  ImageAccommodation,
} from '../../types/offer.type';

export default class TsvFileReader implements FileReaderInterface {
  private rawData = '';
  constructor(public filename: string) {
    this.filename = filename;
  }

  public read() {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((row) => row.split('\t'))
      .map(
        ([
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
        ]) => ({
          title,
          description,
          postDate: new Date(postDate),
          city: city as Cities,
          imagePreview,
          imageAccommodation: imageAccommodation
            .split(';')
            .map((img) => img) as ImageAccommodation,
          isPremium: isPremium === 'true',
          rating: Number(rating),
          accommodationType: accommodationType as AccommodationType,
          roomsAmount: Number(roomsAmount),
          guestsAmount: Number(guestsAmount),
          rentPrice: Number(rentPrice),
          advantages: advantages
            .split(';')
            .map((advantage) => advantage) as Advantages[],
          offerAuthor,
          commentsAmount: Number(commentsAmount),
          coordinates: {
            latitude: Number(coordinates.split(';')[0]),
            longitude: Number(coordinates.split(';')[1]),
          },
        })
      );
  }
}

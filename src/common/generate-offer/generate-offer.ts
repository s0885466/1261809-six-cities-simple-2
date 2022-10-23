import { randPastDate, randTextRange, rand, randFloat } from '@ngneat/falso';
import { GenerateOfferInterface } from './generate-offer.interface';
import { Offer } from '../../modules/offer/offer.type.js';
import { OfferSets } from '../../modules/offer/offerSets.type.js';
import { faker } from '@faker-js/faker';
import { ImageAccommodation } from '../../types/image-accomodation.type.js';
import { getRandomInteger, getRandomList } from '../../utils/get-random-helpers.js';
import { ADVANTAGES } from '../../types/advantages.enum.js';
import { COORDINATES } from '../../types/coordinates.constants.js';

export default class GenerateOffer implements GenerateOfferInterface {
  public generateOffer(offerSets: OfferSets): Offer {
    const city = rand(offerSets.citiesSet);
    const advantagesArr = Object.values(ADVANTAGES);

    return {
      title: randTextRange({ min: 10, max: 100 }),
      description: randTextRange({ min: 20, max: 1024 }),
      postDate: randPastDate(),
      city,
      imagePreview: faker.image.abstract(),
      imageAccommodation: Array.from({ length: 6 }, () =>
        faker.image.abstract()
      ) as ImageAccommodation,
      isPremium: rand([true, false]),
      rating: randFloat({ min: 1, max: 5, fraction: 1 }),
      accommodationType: rand(offerSets.accommodationTypesSet),
      roomsAmount: randFloat({ min: 1, max: 8, fraction: 0 }),
      guestsAmount: randFloat({ min: 1, max: 10, fraction: 0 }),
      rentPrice: randFloat({ min: 100, max: 100000, fraction: 0 }),
      advantages: getRandomList(advantagesArr.length, advantagesArr) as ADVANTAGES[],
      offerAuthor: 'some user', //add real user later
      commentsAmount: getRandomInteger(0, 100),
      coordinates: COORDINATES[city],
    };
  }
}

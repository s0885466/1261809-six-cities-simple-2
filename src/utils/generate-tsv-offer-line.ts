import { Offer } from '../types/offer.type';

const withTab = (str: string) => `${str}\t`;

export const generateTsvOfferLines = (offers: Offer[]) => {
  const generateSingleOfferLine = (offer: Offer) =>
    Object.values(offer)
      .reduce<string>((line, value) => {
        if (value instanceof Date) {
          line += value.toISOString();
          return withTab(line);
        }

        if (Array.isArray(value)) {
          line += value.join(';');
          return withTab(line);
        }

        if (typeof value === 'object' && value !== null) {
          line += Object.values(value).join(';');
          return withTab(line);
        }

        line += value.toString();
        return withTab(line);
      }, '')
      .trim();

  return offers.map(generateSingleOfferLine).join('\n');
};

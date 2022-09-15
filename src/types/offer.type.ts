export enum AccommodationType {
  apartment = 'apartment',
  house = 'house',
  room = 'room',
  hotel = 'hotel',
}

export enum Advantages {
  breakfast = 'Breakfast',
  airConditioning = 'Airconditioning',
  laptop = 'Laptop',
  friendlyWorkspace = 'friendly workspace',
  babySeat = 'Baby seat',
  washer = 'Washer',
  towels = 'Towels',
  fridge = 'Fridge',
}

export enum Cities {
  paris = 'Paris',
  cologne = 'Cologne',
  brussels = 'Brussels',
  amsterdam = 'Amsterdam',
  hamburg = 'Hamburg',
  dusseldorf = 'Dusseldorf',
}

type Coordinates = {
  latitude: number;
  longitude: number;
};

export type ImageAccommodation = [
  string,
  string,
  string,
  string,
  string,
  string
];

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

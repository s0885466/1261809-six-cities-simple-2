import mongoose from 'mongoose';
import { Offer } from '../modules/offer/offer.type';
import { CITIES } from '../types/cities.enum';

import { ACCOMMODATION_TYPE } from '../types/accommodation-type.enum';

export interface OfferDocument extends Offer, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const offerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    postDate: {
      type: Date,
      required: true,
    },
    city: {
      type: String,
      enum: Object.values(CITIES),
      required: true,
    },
    imagePreview: {
      type: String,
      required: true,
    },
    imageAccommodation: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    isPremium: {
      type: Boolean,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    accommodationType: {
      type: String,
      enum: Object.values(ACCOMMODATION_TYPE),
      required: true,
    },
    roomsAmount: {
      type: Number,
      required: true,
    },
    guestsAmount: {
      type: Number,
      required: true,
    },
    rentPrice: {
      type: Number,
      required: true,
    },
    advantages: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    offerAuthor: {
      type: String,
      required: true,
    },
    commentsAmount: {
      type: Number,
      required: true,
    },
    coordinates: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const OfferModel = mongoose.model<OfferDocument>('Offer', offerSchema);

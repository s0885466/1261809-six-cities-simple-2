import { FetchSetsInterface } from './fetch-sets.interface';
import { OfferSets } from '../../modules/offer/offerSets.type.js';
import axios, { AxiosResponse } from 'axios';

export default class FetchSets implements FetchSetsInterface {
  async fetch(url: string): Promise<OfferSets | Error> {
    const response = await axios.get<void, AxiosResponse<OfferSets>>(url);

    return response.status === 200
      ? response.data
      : new Error('something went wrong with request');
  }
}

import { inject, injectable } from 'inversify';
import { DocumentType, types } from '@typegoose/typegoose';

import { Component } from '../../types/component.types.js';
import { LoggerInterface } from '../../common/logger/logger.interface.js';
import { OfferEntity } from './offer.entity.js';
import { OfferServiceInterface } from './offer-service.interface.js';
import { CreateOfferDto } from './dto/create-offer-dto.js';

@injectable()
export class OfferService implements OfferServiceInterface {
  constructor(
    @inject(Component.LoggerInterface) private logger: LoggerInterface,
    @inject(Component.OfferModel) private offerNodel: types.ModelType<OfferEntity>
  ) {}

  public async create(dto: CreateOfferDto): Promise<DocumentType<OfferEntity>> {
    const offer = new OfferEntity(dto);
    const createdOffer = await this.offerNodel.create(offer);
    this.logger.info(`New offer created: ${offer.title}`);

    return createdOffer;
  }
}

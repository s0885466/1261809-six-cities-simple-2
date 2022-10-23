import 'reflect-metadata';
import { Container } from 'inversify';

import { Component } from '../../types/component.types.js';
import { Application } from '../../app/appliction.js';
import { LoggerService } from '../logger/logger-service.js';
import { ConfigService } from '../config/config-service.js';
import { LoggerInterface } from '../logger/logger.interface.js';
import { ConfigInterface } from '../config/config.interface.js';
import { DatabaseInterface } from '../database-client/database.interface.js';
import { DatabaseService } from '../database-client/database.service.js';
import { UserService } from '../../modules/user/user.service.js';
import { UserServiceInterface } from '../../modules/user/user-service.interface.js';
import { OfferServiceInterface } from '../../modules/offer/offer-service.interface.js';
import { OfferService } from '../../modules/offer/offer.service.js';

const container = new Container();
// привязка Symbols к классам
container.bind<Application>(Component.Application).to(Application);
container.bind<LoggerInterface>(Component.LoggerInterface).to(LoggerService);
container.bind<ConfigInterface>(Component.ConfigInterface).to(ConfigService);
container.bind<DatabaseInterface>(Component.DatabaseInterface).to(DatabaseService);
container.bind<UserServiceInterface>(Component.UserServiceInterface).to(UserService);
container.bind<OfferServiceInterface>(Component.OfferServiceInterface).to(OfferService);

export const applicationContainer = container;

import 'reflect-metadata';
import { Container } from 'inversify';

import { Component } from '../../types/component.types.js';
import { Application } from '../../app/appliction.js';
import { LoggerService } from '../logger/logger-service.js';
import { ConfigService } from '../config/config-service.js';
import { LoggerInterface } from '../logger/logger.interface';
import { ConfigInterface } from '../config/config.interface';

const container = new Container();
// привязка Symbols к классам
container.bind<Application>(Component.Application).to(Application);
container.bind<LoggerInterface>(Component.LoggerInterface).to(LoggerService);
container.bind<ConfigInterface>(Component.ConfigInterface).to(ConfigService);

export const applicationContainer = container;

import 'reflect-metadata';
import { applicationContainer } from './common/container/application-container.js';
import { Component } from './types/component.types.js';
import { Application } from './app/appliction.js';

const application = applicationContainer.get<Application>(Component.Application);
await application.init();

import { inject, injectable } from 'inversify';
import { Component } from '../types/component.types.js';
import { LoggerInterface } from '../common/logger/logger.interface.js';
import { ConfigInterface } from '../common/config/config.interface.js';

@injectable()
export class Application {
  constructor(
    @inject(Component.LoggerInterface) private logger: LoggerInterface,
    @inject(Component.ConfigInterface) private config: ConfigInterface
  ) {}

  init() {
    const port = this.config.get('PORT');
    this.logger.info('Application is initialized');
    this.logger.info(`port: ${port}`);
  }
}

import { config } from 'dotenv';

import { ConfigInterface } from './config.interface';
import { LoggerInterface } from '../logger/logger.interface.js';
import { ConfigSchema, configSchema } from './config.schema.js';
import { injectable, inject } from 'inversify';
import { Component } from '../../types/component.types.js';

@injectable()
export class ConfigService implements ConfigInterface {
  private config: ConfigSchema;
  private logger: LoggerInterface;
  constructor(@inject(Component.LoggerInterface) logger: LoggerInterface) {
    this.logger = logger;

    const parsedOutput = config();
    if (parsedOutput.error) {
      throw new Error('Cant read .env file. Perhaps the file does not exists.');
    }
    configSchema.load({});
    configSchema.validate({ allowed: 'strict', output: this.logger.info });
    this.config = configSchema.getProperties();
    this.logger.info('.env file found and successfully parsed!');
  }

  public get<T extends keyof ConfigSchema>(key: T) {
    return this.config[key];
  }
}

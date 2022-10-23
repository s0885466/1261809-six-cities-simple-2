import { inject, injectable } from 'inversify';
import * as mongoose from 'mongoose';
import { DatabaseInterface } from './database.interface';
import { Component } from '../../types/component.types.js';
import { LoggerInterface } from '../logger/logger.interface';

@injectable()
export class DatabaseService implements DatabaseInterface {
  constructor(@inject(Component.LoggerInterface) private logger: LoggerInterface) {}

  public async connect(uri: string): Promise<void> {
    try {
      this.logger.info('Try to connect to MongoDb');
      await mongoose.connect(uri);

      this.logger.info('Database connection established');
    } catch (err) {
      this.logger.error('Something went wrong during connection DB');
    }
  }

  public async disconnect(): Promise<void> {
    await mongoose.disconnect();
    this.logger.info('Database connection closed');
  }
}

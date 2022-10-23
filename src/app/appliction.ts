import { inject, injectable } from 'inversify';
import { Component } from '../types/component.types.js';
import { LoggerInterface } from '../common/logger/logger.interface.js';
import { ConfigInterface } from '../common/config/config.interface.js';
import { DatabaseInterface } from '../common/database-client/database.interface.js';
import { getDbUri } from '../utils/db.js';
@injectable()
export class Application {
  constructor(
    @inject(Component.LoggerInterface) private logger: LoggerInterface,
    @inject(Component.ConfigInterface) private config: ConfigInterface,
    @inject(Component.DatabaseInterface) private database: DatabaseInterface
  ) {}

  async init() {
    this.logger.info('Application initialization…');
    this.logger.info(`Get value from env $PORT: ${this.config.get('PORT')}`);

    const dbUri = getDbUri({
      username: this.config.get('DB_USER'),
      password: this.config.get('DB_PASSWORD'),
      host: this.config.get('DB_HOST'),
      port: this.config.get('DB_PORT').toString(),
      databaseName: this.config.get('DB_NAME'),
    });

    await this.database.connect(dbUri);
  }
}

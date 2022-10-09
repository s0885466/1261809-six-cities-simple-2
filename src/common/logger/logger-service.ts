import { LoggerInterface } from './logger.interface';
import { Logger, pino } from 'pino';
import { injectable } from 'inversify';

@injectable()
export class LoggerService implements LoggerInterface {
  logger: Logger;
  constructor() {
    this.logger = pino();
  }

  public info(message: string): void {
    this.logger.info(message);
  }

  public warn(message: string): void {
    this.logger.warn(message);
  }

  public error(message: string): void {
    this.logger.error(message);
  }

  public debug(message: string): void {
    this.logger.debug(message);
  }
}

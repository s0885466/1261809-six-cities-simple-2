import convict from 'convict';
import validator from 'convict-format-with-validator';

convict.addFormats(validator);

export type ConfigSchema = {
  PORT: number;
  IP_DATABASE: string;
  SALT: string;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_HOST: string;
  DB_PORT: number;
  DB_NAME: string;
};

export const configSchema = convict<ConfigSchema>({
  PORT: {
    doc: 'Port',
    format: 'port',
    env: 'PORT',
    default: 4000,
  },
  IP_DATABASE: {
    doc: 'The IP address to connect DB',
    format: 'ipaddress',
    default: '127.0.0.1',
    env: 'IP_ADDRESS',
  },
  SALT: {
    doc: 'Salt',
    format: String,
    env: 'SALT',
    default: null,
  },
  DB_USER: {
    doc: 'Username to connect to the database (MongoDB)',
    format: 'String',
    env: 'DB_USER',
    default: null,
  },
  DB_PASSWORD: {
    doc: 'Password to connect to the database (MongoDB)',
    format: 'String',
    env: 'DB_PASSWORD',
    default: null,
  },
  DB_HOST: {
    doc: 'Host to connect to the database (MongoDB)',
    format: 'String',
    env: 'DB_HOST',
    default: null,
  },
  DB_PORT: {
    doc: 'Port to connect to the database (MongoDB)',
    format: 'port',
    env: 'DB_PORT',
    default: null,
  },
  DB_NAME: {
    doc: 'Database name (MongoDB)',
    format: 'String',
    env: 'DB_NAME',
    default: 'course-nodejs-restapi',
  },
});

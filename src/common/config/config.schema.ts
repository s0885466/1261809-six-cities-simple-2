import convict from 'convict';
import validator from 'convict-format-with-validator';

convict.addFormats(validator);

export type ConfigSchema = {
  PORT: number;
  IP_DATABASE: string;
  SALT: string;
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
});

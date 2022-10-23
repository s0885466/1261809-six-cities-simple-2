type GetDbUriPayload = {
  username: string;
  password: string;
  host: string;
  port: string;
  databaseName: string;
};

export const getDbUri = ({
  username,
  password,
  host,
  port,
  databaseName,
}: GetDbUriPayload): string =>
  `mongodb://${username}:${password}@${host}:${port}/${databaseName}?authSource=admin`;

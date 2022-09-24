import { COORDINATES } from './coordinates.constants.js';

type CoordinatesKeys = keyof typeof COORDINATES;

export type Coordinates = typeof COORDINATES[CoordinatesKeys];

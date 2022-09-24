import fs from 'fs';
import path from 'path';
import { CreateDirectoryInterface } from './create-direcrory.interface';

export class DirectoryCreator implements CreateDirectoryInterface {
  createDirectory(pathName: string) {
    const dirname = path.dirname(pathName);
    if (!fs.existsSync(dirname)) {
      fs.mkdirSync(dirname);
    }
  }
}

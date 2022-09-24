import { FileWriterInterface } from './file-writer.interface';
import * as fs from 'fs';
import { DirectoryCreator } from '../create-directory/directoryCreator.js';

export class TsvFileWriter implements FileWriterInterface {
  async writeFile(filePath: string, data: string) {
    const buffer = Buffer.from(data);

    new DirectoryCreator().createDirectory(filePath);

    const writeStream = fs.createWriteStream(filePath, 'utf-8');
    writeStream.on('finish', () => console.log('Запись завершена'));

    if (!writeStream.write(buffer)) {
      await new Promise((resolve) => writeStream.once('drain', resolve));
    }

    writeStream.end();
  }
}

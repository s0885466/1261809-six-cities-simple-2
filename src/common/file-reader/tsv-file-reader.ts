import { FileReaderInterface } from './file-reader.interface';
import { createReadStream } from 'fs';
import EventEmitter from 'events';

export default class TsvFileReader extends EventEmitter implements FileReaderInterface {
  constructor(public filename: string) {
    super();
    this.filename = filename;
  }

  public async read() {
    const stream = createReadStream(this.filename, {
      highWaterMark: 16384,
      encoding: 'utf-8',
    });

    let lineRead = '';
    let endLinePosition = -1;
    let importedRowCount = 0;

    for await (const chunk of stream) {
      lineRead += chunk.toString();

      while ((endLinePosition = lineRead.indexOf('\n')) >= 0) {
        const completeRow = lineRead.slice(0, endLinePosition + 1);
        lineRead = lineRead.slice(endLinePosition + 1);
        endLinePosition++;
        importedRowCount++;

        this.emit('line', completeRow);
      }
    }

    this.emit('end', importedRowCount);
  }
}

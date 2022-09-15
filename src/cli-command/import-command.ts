import {CliCommandInterface} from './cli-command.interface';
import TsvFileReader from '../common/file-reader/tsv-file-reader.js';

export default class ImportCommand implements CliCommandInterface {
  public readonly name = '--import';
  public execute(fileName: string): void {
    const fileReader = new TsvFileReader(fileName.trim());

    try {
      fileReader.read();
      console.log(fileReader.toArray());

    } catch (err) {
      if (!(err instanceof Error)) {
        throw err;
      }

      console.log(`Не удалось импортировать данные из файла по причине: «${err.message}»`);
    }
  }
}

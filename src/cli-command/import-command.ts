import { CliCommandInterface } from './cli-command.interface';
import TsvFileReader from '../common/file-reader/tsv-file-reader.js';
import { createOffer } from '../utils/create-offer.js';

export default class ImportCommand implements CliCommandInterface {
  public readonly name = '--import';

  private onLine(line: string) {
    const offer = createOffer(line);
    console.log(offer);
  }

  private onComplete(count: number) {
    console.log(`${count} rows imported.`);
  }

  public async execute(fileName: string): Promise<void> {
    const fileReader = new TsvFileReader(fileName.trim());
    fileReader.on('line', this.onLine);
    fileReader.on('end', this.onComplete);

    try {
      await fileReader.read();
    } catch (err) {
      if (!(err instanceof Error)) {
        throw err;
      }

      console.log(
        `Не удалось импортировать данные из файла по причине: «${err.message}»`
      );
    }
  }
}

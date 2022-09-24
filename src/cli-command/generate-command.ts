import { CliCommandInterface } from './cli-command.interface';
import FetchSets from '../common/fetch-sets/fetch-sets.js';
import GenerateOffer from '../common/generate-offer/generate-offer.js';
import { TsvFileWriter } from '../common/file-writer/tsv-file-writer.js';
import { generateTsvOfferLines } from '../utils/generate-tsv-offer-line.js';

export default class GenerateCommand implements CliCommandInterface {
  public readonly name = '--generate';

  public async execute(number: string, filepath: string, url: string): Promise<void> {
    try {
      const fetchSets = new FetchSets();
      const offerSets = await fetchSets.fetch(url);
      if (offerSets instanceof Error) {
        console.error(offerSets.message);
      } else {
        const generateOffer = new GenerateOffer();
        const offers = Array.from({ length: Number(number) }, () =>
          generateOffer.generateOffer(offerSets)
        );

        const tsvFileWriter = new TsvFileWriter();

        const offerString = generateTsvOfferLines(offers);
        await tsvFileWriter.writeFile(filepath, offerString);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

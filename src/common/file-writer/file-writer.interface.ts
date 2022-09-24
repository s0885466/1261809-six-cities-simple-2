export interface FileWriterInterface {
  writeFile(filePath: string, data: string): void;
}

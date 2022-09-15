import {readFileSync} from 'fs';

function readVersion(): string {
  const contentPackageJSON = readFileSync('./package.json', 'utf-8');
  const content = JSON.parse(contentPackageJSON);

  return content.version;
}

console.log(readVersion());

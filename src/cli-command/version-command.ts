import {readFileSync} from 'fs';
import appRootPath from 'app-root-path';
import {resolve} from 'path';
import {CliCommandInterface} from './cli-command.interface';


export default class VersionCommand implements CliCommandInterface {
  public readonly name = '--version';

  private readVersion(): string {
    const packageJsonPath = resolve(appRootPath.path, './package.json');
    const contentPackageJSON = readFileSync(packageJsonPath, 'utf-8');
    const content = JSON.parse(contentPackageJSON);

    return content.version;
  }

  public execute() {
    console.log(this.readVersion());
  }
}

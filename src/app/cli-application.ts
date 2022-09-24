import { CliCommandInterface } from '../cli-command/cli-command.interface';

type CliCommandsMap = {
  [propName: string]: CliCommandInterface;
};

type ParsedCommandMap = {
  [key: string]: string[];
};

export default class CLIApplication {
  private cliCommandsMap: CliCommandsMap = {};
  private defaultCommand: '--help';

  private parseCommand(cliArguments: string[]): ParsedCommandMap {
    let lastCommand = '';

    return cliArguments.reduce<ParsedCommandMap>(
      (parsedCommand, cliArgument) => {
        if (cliArgument.startsWith('--')) {
          parsedCommand[cliArgument] = [];

          lastCommand = cliArgument;
          return parsedCommand;
        }

        if (lastCommand && cliArgument) {
          parsedCommand[lastCommand].push(cliArgument);
        }

        return parsedCommand;
      },
      {}
    );
  }

  public getCommand(commandName: string): CliCommandInterface {
    return (
      this.cliCommandsMap[commandName] ??
      this.cliCommandsMap[this.defaultCommand]
    );
  }

  public registerCommands(commandList: CliCommandInterface[]): void {
    commandList.forEach((cliCommand) => {
      this.cliCommandsMap[cliCommand.name] = cliCommand;
    });
  }

  public processCommands(argv: string[]): void {
    const parsedCommandMap = this.parseCommand(argv);
    const commandNames = Object.keys(parsedCommandMap);

    commandNames.forEach((commandName) => {
      const command = this.getCommand(commandName);
      if (!command) {
        throw Error('there are not such command');
      }

      const commandArguments = parsedCommandMap[commandName] ?? [];
      command.execute(...commandArguments);
    });
  }
}

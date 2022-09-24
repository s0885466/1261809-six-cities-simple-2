import { CliCommandInterface } from './cli-command.interface';

export default class HelpCommand implements CliCommandInterface {
  public readonly name = '--help';

  public execute() {
    console.log(`
        Программа для подготовки данных для REST API сервера.
        Пример:
            main.js --<command> [--arguments]
        Команды:
            --version:                        # выводит номер версии
            --help:                           # печатает этот текст
            --import <path>:                  # импортирует данные из TSV
            --generator <n> <filepath> <url>  # генерирует произвольное количество тестовых данных
        `);
  }
}

import { Logger, LoggerFactory } from "../abstractions";

class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(`[CONSOLE LOG] ${message}`);
  }
}

export class ConsoleLoggerFactory extends LoggerFactory {
  createLogger(): Logger {
    return new ConsoleLogger();
  }
}

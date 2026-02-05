import { Logger, LoggerFactory } from "../abstractions";

class FileLogger implements Logger {
  log(message: string): void {
    console.log(`[FILE LOG] ${message}`);
  }
}

export class FileLoggerFactory extends LoggerFactory {
  createLogger(): Logger {
    return new FileLogger();
  }
}

import { Logger, LoggerFactory } from "../abstractions";

class UserLogger implements Logger {
  log(message: string): void {
    console.log(`[USER LOG] ${message}`);
  }
}

export class UserLoggerFactory extends LoggerFactory {
  createLogger(): Logger {
    return new UserLogger();
  }
}
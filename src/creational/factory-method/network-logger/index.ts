import { Logger, LoggerFactory } from "../abstractions";

class NetworkLogger implements Logger {
  log(message: string): void {
    console.log(`[NETWORK LOG] ${message}`);
  }
}

export class NetworkLoggerFactory extends LoggerFactory {
  createLogger(): Logger {
    return new NetworkLogger();
  }
}

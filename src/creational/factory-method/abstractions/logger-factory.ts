import { Logger } from "./logger";

export abstract class LoggerFactory {

  abstract createLogger(): Logger;

  performLogging(message: string): void {
    const logger = this.createLogger();
    logger.log(message);
  }
  
}

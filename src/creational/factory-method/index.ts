import { LoggerFactory } from "./abstractions";
import { ConsoleLoggerFactory } from "./console-logger";
import { FileLoggerFactory } from "./file-logger";
import { NetworkLoggerFactory } from "./network-logger";

export function demonstrateFactoryMethod(): void {
  console.log("Демонстрація: Factory Method\n");

  const factories: LoggerFactory[] = [
    new FileLoggerFactory(),
    new ConsoleLoggerFactory(),
    new NetworkLoggerFactory(),
  ];

  factories.forEach((factory) => {
    factory.performLogging("Логування через фабрику");
  });
}

/**
 * Проблеми:
 * 1. Клієнтський код залежить від конкретних класів логерів
 * 2. Логіка створення логерів розпорошена по кодустрок добавляються нові типи логерів
 * 3. Складність розширення та обслуговування
 * 4. Порушення принципу Dependency Inversion
 */

export function demonstrateAntiPatternFactoryMethod(): void {
  console.log("ANTI-PATTERN: без Factory Method паттерну\n");

  class Logger {
    log(message: string): void {
      console.log(message);
    }
  }

  class FileLogger extends Logger {
    private fileName: string = "app.log";

    log(message: string): void {
      console.log(`[File Logger: ${this.fileName}] ${message}`);
    }
  }

  class ConsoleLogger extends Logger {
    log(message: string): void {
      console.log(`[Console Logger] ${message}`);
    }
  }

  class NetworkLogger extends Logger {
    private serverUrl: string = "http://logs.example.com";

    log(message: string): void {
      console.log(`[Network Logger: ${this.serverUrl}] ${message}`);
    }
  }

  // Клієнтський код
  class ApplicationWithoutFactoryMethod {
    private logger: Logger;

    constructor(loggerType: string) {
      if (loggerType === "file") {
        this.logger = new FileLogger();
      } else if (loggerType === "console") {
        this.logger = new ConsoleLogger();
      } else if (loggerType === "network") {
        this.logger = new NetworkLogger();
      }
      // ... Усі інші типи логерів
      else {
        this.logger = new ConsoleLogger(); // default
      }
    }

    run(): void {
      this.logger.log("Додаток запущений");
      this.logger.log("Виконання основної логіки...");
      this.logger.log("Додаток завершений");
    }
  }


  const app1 = new ApplicationWithoutFactoryMethod("file");
  app1.run();

  console.log();

  const app2 = new ApplicationWithoutFactoryMethod("console");
  app2.run();

  console.log();

  const app3 = new ApplicationWithoutFactoryMethod("network");
  app3.run();
}

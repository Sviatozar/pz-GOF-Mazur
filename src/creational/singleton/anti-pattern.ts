/**
 * Проблеми:
 * 1. Множинні екземпляри замість одного
 * 2. Глобальний стан, який складно відслідкувати
 * 3. Складність тестування та ізоляції
 * 4. Приховані залежності
 */

export function demonstrateAntiPatternSingleton(): void {
  console.log("ANTI-PATTERN: без Singleton паттерну\n");

  class DatabaseConnectionWithoutPattern {
    private connectionId: string;
    private static connectionCounter: number = 0;

    constructor() {
      DatabaseConnectionWithoutPattern.connectionCounter++;
      this.connectionId = `Connection_${DatabaseConnectionWithoutPattern.connectionCounter}`;
      console.log(`Створено нове з'єднання: ${this.connectionId}`);
    }

    getConnectionId(): string {
      return this.connectionId;
    }

    query(sql: string): void {
      console.log(`[${this.connectionId}] Виконання запиту: ${sql}`);
    }

    close(): void {
      console.log(`Закрито з'єднання: ${this.connectionId}`);
    }
  }

  console.log("Проблема 1: Множинні екземпляри замість одного\n");

  // Проблема: Кожен виклик new створює новий екземпляр
  const db1 = new DatabaseConnectionWithoutPattern();
  const db2 = new DatabaseConnectionWithoutPattern();
  const db3 = new DatabaseConnectionWithoutPattern();

  console.log(`\nID екземпляра db1: ${db1.getConnectionId()}`);
  console.log(`ID екземпляра db2: ${db2.getConnectionId()}`);
  console.log(`ID екземпляра db3: ${db3.getConnectionId()}`);
  console.log(`Чи це один і той же екземпляр? ${db1 === db2}`);

  console.log("\nКожна операція використовує своє з'єднання:\n");
  db1.query("SELECT * FROM users");
  db2.query("INSERT INTO logs VALUES (...)");
  db3.query("UPDATE settings SET theme='dark'");

  console.log("\nПроблема 2: Глобальний стан розпорошений по коду\n");

  class AppConfigWithoutPattern {
    private static configs: Map<string, any> = new Map();

    constructor() {
      AppConfigWithoutPattern.configs.set("APP_NAME", "MyApp");
      AppConfigWithoutPattern.configs.set("VERSION", "1.0.0");
      AppConfigWithoutPattern.configs.set("THEME", "light");
    }

    static get(key: string): string {
      return AppConfigWithoutPattern.configs.get(key) || "";
    }

    static set(key: string, value: any): void {
      AppConfigWithoutPattern.configs.set(key, value);
      console.log(`Встановлено ${key} = ${value} (для всього додатку)`);
    }
  }

  new AppConfigWithoutPattern();

  const config1 = new AppConfigWithoutPattern();
  console.log(`Значення из config1: APP_NAME = ${AppConfigWithoutPattern.get("APP_NAME")}`);

  AppConfigWithoutPattern.set("THEME", "dark");
  console.log(`\\nУсі інші частини додатку автоматично отримують нове значення:`);
  console.log(`APP_NAME = ${AppConfigWithoutPattern.get("APP_NAME")}`);
  console.log(`THEME = ${AppConfigWithoutPattern.get("THEME")}`);

  db1.close();
  db2.close();
  db3.close();
}

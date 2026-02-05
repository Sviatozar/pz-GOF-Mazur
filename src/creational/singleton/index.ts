import { DatabaseConnection } from "./database-connection";
import { AppConfig } from "./app-config";

export function demonstrateSingleton(): void {
  console.log("Демонстрація: Singleton pattern\n");

  console.log("Database Connection (Singleton):");
  
  const dbConnection1 = DatabaseConnection.getInstance();
  const dbConnection2 = DatabaseConnection.getInstance();
  const dbConnection3 = DatabaseConnection.getInstance();

  console.log(`ID №1: ${dbConnection1.getConnectionId()}`);
  console.log(`ID №2: ${dbConnection2.getConnectionId()}`);
  console.log(`ID №3: ${dbConnection3.getConnectionId()}`);
  console.log(`${dbConnection1 === dbConnection2 && dbConnection2 === dbConnection3}\n`);

  console.log("Виконання запитів:");
  dbConnection1.query("SELECT * FROM users");
  dbConnection2.query("INSERT INTO logs VALUES (...)");
  dbConnection3.query("UPDATE settings SET theme='dark'");

  console.log("\nApp Config (Singleton):");
  const config1 = AppConfig.getInstance();
  console.log(`APP_NAME: ${config1.get("APP_NAME")}`);
  console.log(`VERSION: ${config1.get("VERSION")}`);

  const config2 = AppConfig.getInstance();
  config2.set("THEME", "dark");
  console.log(`THEME (встановлено через config2): ${config1.get("THEME")}`);
  console.log(`${config1 === config2}`);
}

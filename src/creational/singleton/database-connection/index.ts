class DatabaseConnection {
  private static instance: DatabaseConnection;
  private connectionId: string;

  private constructor() {
    this.connectionId = `DB_${Date.now()}`;
    console.log(`Створено нове з'єднання з БД: ${this.connectionId}`);
  }

  static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  query(sql: string): void {
    console.log(`Запит на ${this.connectionId}: ${sql}`);
  }

  getConnectionId(): string {
    return this.connectionId;
  }
}

export { DatabaseConnection };

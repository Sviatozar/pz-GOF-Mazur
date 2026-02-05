class AppConfig {
  private static instance: AppConfig;
  private config: Map<string, string>;

  private constructor() {
    this.config = new Map();
    this.config.set("APP_NAME", "PZ-GOF-Mazur");
    this.config.set("VERSION", "1.0.0");
    this.config.set("ENV", "development");
  }

  static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig();
    }
    return AppConfig.instance;
  }

  get(key: string): string | undefined {
    return this.config.get(key);
  }

  set(key: string, value: string): void {
    this.config.set(key, value);
  }
}

export { AppConfig };

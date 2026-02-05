# Summary — Практичне завдання GoF

---


## Опис реалізованих патернів:

### Породжувальні Патерни:
1. **Factory Method** `src/creational/factory-method/`
   - Проблема: Багато if/switch операторів при створенні об'єктів
   - Рішення: Делегування створення підклассам
   - Приклад: Різні типи логерів (File, Console, Network)

2. **Singleton** `src/creational/singleton/`
   - Проблема: Множинність примірників критичних об'єктів
   - Рішення: Гарантія єдиного примірника
   - Приклад: База даних, конфігурація

### Структурні Патерни:
3. **Facade** `src/structural/facade/`
   - Проблема: Складна система з великою сукупністю компонентів
   - Рішення: Єдиний спрощений інтерфейс
   - Приклад: Smart Home система

4. **Decorator** `src/structural/decorator/`
   - Проблема: Експоненціальне зростання класів при комбінуванні властивостей
   - Рішення: Динамічне додавання функціональності
   - Приклад: Різні конфігурації кави

5. **Bridge** `src/structural/bridge/`
   - Проблема: Експоненціальне зростання класів при комбінуванні властивостей
   - Рішення: Розділення абстракції та реалізації на дві окремі ієрархії, які пов’язані через композицію, а не спадкування
   - Приклад: Різні реалізації бекенду і фронтенду

### Поведінкові Патерни:
5. **Observer** `src/behavioral/observer/`
   - Проблема: Тісна кон'юнкція між об'єктами
   - Рішення: Механізм підписки-сповіщення
   - Приклад: Новинне агентство і медіа

---

## Структура Проєкту:

```
C:\...\SRC
├───behavioral
│   └───observer
│       │   anti-pattern.ts
│       │   index.ts
│       │
│       ├───abstractions
│       │       index.ts
│       │       Observer.ts
│       │
│       ├───observers
│       │       index.ts
│       │       MobileApp.ts
│       │       Newspaper.ts
│       │       RadioStation.ts
│       │       TVStation.ts
│       │
│       └───subject
│               index.ts
│               NewsAgency.ts
│
├───creational
│   ├───factory-method
│   │   │   anti-pattern.ts
│   │   │   index.ts
│   │   │   
│   │   ├───abstractions
│   │   │       index.ts
│   │   │       logger-factory.ts
│   │   │       logger.ts
│   │   │
│   │   ├───console-logger
│   │   │       index.ts
│   │   │
│   │   ├───file-logger
│   │   │       index.ts
│   │   │
│   │   └───network-logger
│   │           index.ts
│   │
│   └───singleton
│       │   anti-pattern.ts
│       │   index.ts
│       │
│       ├───abstractions
│       │       index.ts
│       │
│       ├───app-config
│       │       index.ts
│       │
│       └───database-connection
│               index.ts
│
├───examples
│   │   run-all.ts
│   │
│   ├───antipatterns
│   │       anti-bridge.ts
│   │       anti-decorator.ts
│   │       anti-facade.ts
│   │       anti-factory-method.ts
│   │       anti-observer.ts
│   │       anti-singleton.ts
│   │
│   └───patterns
│           decorator.ts
│           facade.ts
│           factory-method.ts
│           observer.ts
│           singleton.ts
│
└───structural
    ├───bridge
    │   │   anti-pattern.ts
    │   │   index.ts
    │   │
    │   ├───abstractions
    │   │       Backend.ts
    │   │       UI.ts
    │   │
    │   └───implementation
    │       │   AndroidUI.ts
    │       │   IPhoneUI.ts
    │       │   MobileBackend.ts
    │       │   WebBackend.ts
    │       │   WebUI.ts
    │       │
    │       └───UI
    ├───decorator
    │   │   anti-pattern.ts
    │   │   index.ts
    │   │
    │   ├───abstractions
    │   │       Coffee.ts
    │   │       index.ts
    │   │
    │   ├───components
    │   │       index.ts
    │   │       SimpleCoffee.ts
    │   │
    │   └───decorators
    │           CaramelDecorator.ts
    │           CremaDecorator.ts
    │           index.ts
    │           MilkDecorator.ts
    │           SugarDecorator.ts
    │
    └───facade
        │   anti-pattern.ts
        │   index.ts
        │
        ├───abstractions
        │       index.ts
        │       ISmartHomeController.ts
        │
        ├───facades
        │       index.ts
        │       SmartHomeFacade.ts
        │
        └───subsystems
                ClimateControl.ts
                EntertainmentSystem.ts
                index.ts
                LightingSystem.ts
                SecuritySystem.ts
```

---

## Порядок запуску:

### Для демонстрації всіх прикладів виконання одночасно:
```bash
npm install
npm run dev
```

### Для виклику окремих прикладів:
```bash  
npm install     
npm run pattern:factory
npm run pattern:singleton  
npm run pattern:facade  
npm run pattern:decorator  
npm run pattern:observer  
npm run pattern:bridge  
npm run antipattern:factory
npm run antipattern:singleton
npm run antipattern:facade
npm run antipattern:decorator
npm run antipattern:observer
npm run antipattern:bridge            
```

---

## Приклади виконання:

### Observer:
```typescript
interface Observer {
  update(data: any): void;
}

class NewsAgency {
  private observers: Observer[] = [];
  private lastNews: string = "";

  subscribe(observer: Observer): void {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
      console.log(`Новий підписник: ${observer.constructor.name}`);
    }
  }

  unsubscribe(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
      console.log(`Підписник видален: ${observer.constructor.name}`);
    }
  }

  private notifyObservers(): void {
    console.log(`Передача новин: "${this.lastNews}"\n`);
    this.observers.forEach((observer) => {
      observer.update(this.lastNews);
    });
  }

  publishNews(news: string): void {
    console.log(`\nНовинне агентство публікує: "${news}"`);
    this.lastNews = news;
    this.notifyObservers();
  }
}

class TVStation implements Observer {
  update(data: any): void {
    console.log(`TV: Ми передаємо новину: "${data}"`);
  }
}

class RadioStation implements Observer {
  update(data: any): void {
    console.log(`RADIO: Ми озвучуємо новину: "${data}"`);
  }
}

class Newspaper implements Observer {
  update(data: any): void {
    console.log(`ГАЗЕТА: Ми друкуємо новину: "${data}"`);
  }
}

class MobileApp implements Observer {
  private userId: string;

  constructor(userId: string) {
    this.userId = userId;
  }

  update(data: any): void {
    console.log(`ДОДАТОК (користувач ${this.userId}): Сповіщення - "${data}"`);
  }
}

export function demonstrateObserver(): void {
  console.log("Демонстрація observer pattern\n");

  //БЕЗ Observer (тісна кон'юнкція):
  //Клієнт повинен сам управляти всіма залежностями:

  class SimpleNewsAgency {
    private tv: any;
    private radio: any;
    private newspaper: any;

    constructor(tv: any, radio: any, newspaper: any) {
      this.tv = tv;
      this.radio = radio;
      this.newspaper = newspaper;
      //... По потребі додати нових, прийдеться додавати в цей метод і у publishNews внизу
    }

    publishNews(news: string): void {
      this.tv.show(news);
      this.radio.play(news);
      this.newspaper.print(news);
      //... По потребі додати нових, прийдеться додавати в цей метод і у конструктор вишще
    }
  }

  console.log("З Observer:\n");

  const newsAgency = new NewsAgency();

  const tvStation = new TVStation();
  const radioStation = new RadioStation();
  const newspaper = new Newspaper();
  const mobileApp1 = new MobileApp("Користувач_1");
  const mobileApp2 = new MobileApp("Користувач_2");

  console.log("Підписка:");
  newsAgency.subscribe(tvStation);
  newsAgency.subscribe(radioStation);
  newsAgency.subscribe(newspaper);
  newsAgency.subscribe(mobileApp1);
  newsAgency.subscribe(mobileApp2);

  console.log("\nПублікація:");
  newsAgency.publishNews("Розроблено новий дизайн патернів!");

  newsAgency.publishNews("Конференція по TypeScript пройде в липні!");

  console.log("\nВідписка:");
  newsAgency.unsubscribe(mobileApp2);

  newsAgency.publishNews("Останні новини перед відключенням!");
}

```
*Вивід результату в консоль*
```bash
Демонстрація observer pattern

Підписка:
Новий підписник: TVStation
Новий підписник: RadioStation
Новий підписник: Newspaper
Новий підписник: MobileApp
Новий підписник: MobileApp

Публікація:

Новинне агентство публікує: "Розроблено новий дизайн патернів!"
Передача новин: "Розроблено новий дизайн патернів!"

TV: Ми передаємо новину: "Розроблено новий дизайн патернів!"
RADIO: Ми озвучуємо новину: "Розроблено новий дизайн патернів!"
ГАЗЕТА: Ми друкуємо новину: "Розроблено новий дизайн патернів!"
ДОДАТОК (користувач Користувач_1): Сповіщення - "Розроблено новий дизайн патернів!"
ДОДАТОК (користувач Користувач_2): Сповіщення - "Розроблено новий дизайн патернів!"

Новинне агентство публікує: "Конференція по TypeScript пройде в липні!"
Передача новин: "Конференція по TypeScript пройде в липні!"

TV: Ми передаємо новину: "Конференція по TypeScript пройде в липні!"
RADIO: Ми озвучуємо новину: "Конференція по TypeScript пройде в липні!"
ГАЗЕТА: Ми друкуємо новину: "Конференція по TypeScript пройде в липні!"
ДОДАТОК (користувач Користувач_1): Сповіщення - "Конференція по TypeScript пройде в липні!"
ДОДАТОК (користувач Користувач_2): Сповіщення - "Конференція по TypeScript пройде в липні!"

Відписка:
Підписник видален: MobileApp

Новинне агентство публікує: "Останні новини перед відключенням!"
Передача новин: "Останні новини перед відключенням!"

TV: Ми передаємо новину: "Останні новини перед відключенням!"
RADIO: Ми озвучуємо новину: "Останні новини перед відключенням!"
ГАЗЕТА: Ми друкуємо новину: "Останні новини перед відключенням!"
ДОДАТОК (користувач Користувач_1): Сповіщення - "Останні новини перед відключенням!"       
```
---

### Factory Method:
```typescript
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
```

*Вивід результату в консоль*
```bash
Демонстрація: Factory Method

[FILE LOG] Логування через фабрику
[CONSOLE LOG] Логування через фабрику
[NETWORK LOG] Логування через фабрику
```
---

### Singleton:
```typescript
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
```
*Вивід результату в консоль*
```bash
Демонстрація: Singleton pattern

Database Connection (Singleton):
Створено нове з'єднання з БД: DB_1770195877486
ID №1: DB_1770195877486
ID №2: DB_1770195877486
ID №3: DB_1770195877486
true

Виконання запитів:
Запит на DB_1770195877486: SELECT * FROM users
Запит на DB_1770195877486: INSERT INTO logs VALUES (...)
Запит на DB_1770195877486: UPDATE settings SET theme='dark'

App Config (Singleton):
APP_NAME: PZ-GOF-Mazur
VERSION: 1.0.0
THEME (встановлено через config2): dark
true
```
---

### Decorator:
```typescript
interface Coffee {
  getDescription(): string;
  getCost(): number;
}

class SimpleCoffee implements Coffee {
  getDescription(): string {
    return "Проста кава";
  }

  getCost(): number {
    return 2.5; 
  }
}

class MilkDecorator implements Coffee {
  private coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  getDescription(): string {
    return `${this.coffee.getDescription()} + Молоко`;
  }

  getCost(): number {
    return this.coffee.getCost() + 0.5; 
  }
}

class SugarDecorator implements Coffee {
  private coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  getDescription(): string {
    return `${this.coffee.getDescription()} + Цукор`;
  }

  getCost(): number {
    return this.coffee.getCost() + 0.25; 
  }
}

class CaramelDecorator implements Coffee {
  private coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  getDescription(): string {
    return `${this.coffee.getDescription()} + Карамель`;
  }

  getCost(): number {
    return this.coffee.getCost() + 1.0; 
  }
}

class CremaDecorator implements Coffee {
  private coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  getDescription(): string {
    return `${this.coffee.getDescription()} + Крема`;
  }

  getCost(): number {
    return this.coffee.getCost() + 0.75; 
  }
}


export function demonstrateDecorator(): void {
  console.log("Демонстрація: Decorator pattern\n");

  console.log("БЕЗ Decorator (багато підклас):");
  console.log("Потрібно було б створити класи:");
  console.log("  - SimpleCoffee");
  console.log("  - CoffeeWithMilk");
  console.log("  - CoffeeWithSugar");
  console.log("  - CoffeeWithMilkAndSugar");
  console.log("  - CoffeeWithCaramel");
  console.log("  - CoffeeWithCaramelAndMilk");
  console.log("  - ... (експоненціальне зростання!)\n");

  console.log("З Decorator:\n");

  let coffee1: Coffee = new SimpleCoffee();
  console.log(`${coffee1.getDescription()}`);
  console.log(`   Ціна: $${coffee1.getCost().toFixed(2)}\n`);

  let coffee2: Coffee = new SimpleCoffee();
  coffee2 = new MilkDecorator(coffee2);
  console.log(`${coffee2.getDescription()}`);
  console.log(`   Ціна: $${coffee2.getCost().toFixed(2)}\n`);

  let coffee3: Coffee = new SimpleCoffee();
  coffee3 = new MilkDecorator(coffee3);
  coffee3 = new SugarDecorator(coffee3);
  console.log(`${coffee3.getDescription()}`);
  console.log(`   Ціна: $${coffee3.getCost().toFixed(2)}\n`);

  let coffee4: Coffee = new SimpleCoffee();
  coffee4 = new MilkDecorator(coffee4);
  coffee4 = new CaramelDecorator(coffee4);
  coffee4 = new CremaDecorator(coffee4);
  console.log(`${coffee4.getDescription()}`);
  console.log(`   Ціна: $${coffee4.getCost().toFixed(2)}\n`);

  let coffee5: Coffee = new SimpleCoffee();
  coffee5 = new SugarDecorator(coffee5);
  coffee5 = new CaramelDecorator(coffee5);
  console.log(`${coffee5.getDescription()}`);
  console.log(`   Ціна: $${coffee5.getCost().toFixed(2)}\n`);
}
```
*Вивід результату в консоль*
```bash
Демонстрація: Decorator pattern

БЕЗ Decorator (багато підклас):
Потрібно було б створити класи:
  - SimpleCoffee
  - CoffeeWithMilk
  - CoffeeWithSugar
  - CoffeeWithMilkAndSugar
  - CoffeeWithCaramel
  - CoffeeWithCaramelAndMilk
  - ... (експоненціальне зростання!)

З Decorator:

Проста кава
   Ціна: $2.50

Проста кава + Молоко
   Ціна: $3.00

Проста кава + Молоко + Цукор
   Ціна: $3.25

Проста кава + Молоко + Карамель + Крема
   Ціна: $4.75

Проста кава + Цукор + Карамель
   Ціна: $3.75
```
---

### Facade:
```typescript
export interface ISmartHomeController {
  goodMorning(): void;
  goodNight(): void;
  movieTime(): void;
  leavingHome(): void;
}
```
```typescript
import { ISmartHomeController } from "../abstractions";
import { SecuritySystem, LightingSystem, ClimateControl, EntertainmentSystem } from "../subsystems";

export class SmartHomeFacade implements ISmartHomeController {
  private security: SecuritySystem;
  private lighting: LightingSystem;
  private climate: ClimateControl;
  private entertainment: EntertainmentSystem;

  constructor() {
    this.security = new SecuritySystem();
    this.lighting = new LightingSystem();
    this.climate = new ClimateControl();
    this.entertainment = new EntertainmentSystem();
  }

  goodMorning(): void {
    console.log("Ранок! Активуємо режим 'Доброго ранку'...");
    this.security.deactivate();
    this.lighting.turnOn();
    this.lighting.setBrightness(100);
    this.climate.setTemperature(22);
  }

  goodNight(): void {
    console.log("Ніч! Активуємо режим 'Доброї ночі'...");
    this.lighting.turnOff();
    this.climate.setTemperature(18);
    this.entertainment.stopMusic();
    this.security.activate();
  }

  movieTime(): void {
    console.log("Час фільму! Активуємо режим 'Кіно'...");
    this.lighting.setBrightness(20);
    this.climate.setTemperature(21);
    this.entertainment.playMusic();
  }

  leavingHome(): void {
    console.log("Виходимо з дому...");
    this.lighting.turnOff();
    this.entertainment.stopMusic();
    this.security.activate();
  }
}

```
```typescript
export class ClimateControl {
  setTemperature(temp: number): void {
    console.log(`Температура встановлена на ${temp}°C`);
  }

  setHumidity(level: number): void {
    console.log(`Вологість встановлена на ${level}%`);
  }
}

export class EntertainmentSystem {
  playMusic(): void {
    console.log("Музика запущена");
  }

  stopMusic(): void {
    console.log("Музика зупинена");
  }

  playMovie(title: string): void {
    console.log(`Відтворення фільму: ${title}`);
  }
}

export class LightingSystem {
  turnOn(): void {
    console.log("Світло увімкнено");
  }

  turnOff(): void {
    console.log("Світло вимкнено");
  }

  setBrightness(level: number): void {
    console.log(`Яскравість встановлена на ${level}%`);
  }
}

export class SecuritySystem {
  activate(): void {
    console.log("Система безпеки активована");
  }

  deactivate(): void {
    console.log("Система безпеки деактивована");
  }
}
```

```typescript
import { SecuritySystem, LightingSystem, ClimateControl, EntertainmentSystem } from "./subsystems";
import { SmartHomeFacade } from "./facades";

export function demonstrateFacade(): void {
  console.log("Демонстрація: facade pattern\n");

  //БЕЗ Facade (складне керування)
  //Клієнт повинен сам управляти всіма компонентами
  const sec = new SecuritySystem();
  const light = new LightingSystem();
  const clim = new ClimateControl();
  const ent = new EntertainmentSystem();

  //Налаштування для ранку (самостійно)
  sec.deactivate();
  light.turnOn();
  light.setBrightness(100);
  clim.setTemperature(22);
  //(Забагато коду для простої операції!)
   console.log("\n");

  console.log("З Facade (просте керування):");
  const smartHome = new SmartHomeFacade();

  smartHome.goodMorning();
  console.log();

  smartHome.movieTime();
  console.log();

  smartHome.goodNight();
  console.log();

  smartHome.leavingHome();
}
```

*Вивід результату в консоль*
```bash
           Демонстрація: facade pattern

Система безпеки деактивована
Світло увімкнено
Яскравість встановлена на 100%
Температура встановлена на 22°C


З Facade (просте керування):
Ранок! Активуємо режим 'Доброго ранку'...
Система безпеки деактивована
Світло увімкнено
Яскравість встановлена на 100%
Температура встановлена на 22°C

Час фільму! Активуємо режим 'Кіно'...
Яскравість встановлена на 20%
Температура встановлена на 21°C
Музика запущена

Ніч! Активуємо режим 'Доброї ночі'...
Світло вимкнено
Температура встановлена на 18°C
Музика зупинена
Система безпеки активована

Виходимо з дому...
Світло вимкнено
Музика зупинена
Система безпеки активована
```
### Bridge:

```typescript
import { WebBackend } from './implementation/WebBackend';
import { MobileBackend } from './implementation/MobileBackend';
import { WebUI } from './implementation/WebUI';
import { AndroidUI } from './implementation/AndroidUI';
import { IPhoneUI } from './implementation/IPhoneUI';

const webBackend = new WebBackend();
const webUI = new WebUI(webBackend);
webUI.render();

const mobileBackend = new MobileBackend();
const androidUI = new AndroidUI(mobileBackend);
androidUI.render();

const iphoneUI = new IPhoneUI(mobileBackend);
iphoneUI.render();

const androidBrowserUI = new AndroidUI(webBackend);
androidBrowserUI.render();
```

*Вивід результату в консоль*

```bash
WebUI: Rendering data from the backend -> WebBackend: Data from the backend
AndroidUI: Rendering data from the backend -> MobileBackend: Data from the backend
IPhoneUI: Rendering data from the backend -> MobileBackend: Data from the backend
AndroidUI: Rendering data from the backend -> WebBackend: Data from the backend
```
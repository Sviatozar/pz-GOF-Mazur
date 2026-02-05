/**
 * Проблеми:
 * 1. Для кожної комбінації властивостей потрібен новий клас
 * 2. Експоненціальне зростання кількості підклас
 * 3. Дублювання коду
 * 4. Складність розширення
 * 5. Порушення принципу Open/Closed
 */

export function demonstrateAntiPatternDecorator(): void {
  console.log("ANTI-PATTERN: без Decorator паттерну\n");

  interface Coffee {
    getDescription(): string;
    getCost(): number;
  }

  class SimpleCoffee implements Coffee {
    getDescription(): string {
      return "Просто кава";
    }

    getCost(): number {
      return 2.0;
    }
  }

  class CoffeeWithMilk implements Coffee {
    getDescription(): string {
      return "Просто кава + Молоко";
    }

    getCost(): number {
      return 2.0 + 0.5;
    }
  }

  class CoffeeWithSugar implements Coffee {
    getDescription(): string {
      return "Просто кава + Цукор";
    }

    getCost(): number {
      return 2.0 + 0.2;
    }
  }

  class CoffeeWithMilkAndSugar implements Coffee {
    getDescription(): string {
      return "Просто кава + Молоко + Цукор";
    }

    getCost(): number {
      return 2.0 + 0.5 + 0.2;
    }
  }

  class CoffeeWithCaramel implements Coffee {
    getDescription(): string {
      return "Просто кава + Карамель";
    }

    getCost(): number {
      return 2.0 + 0.7;
    }
  }

  class CoffeeWithCaramelAndMilk implements Coffee {
    getDescription(): string {
      return "Просто кава + Карамель + Молоко";
    }

    getCost(): number {
      return 2.0 + 0.7 + 0.5;
    }
  }

  class CoffeeWithCaramelAndSugar implements Coffee {
    getDescription(): string {
      return "Просто кава + Карамель + Цукор";
    }

    getCost(): number {
      return 2.0 + 0.7 + 0.2;
    }
  }

  class CoffeeWithCaramelMilkAndSugar implements Coffee {
    getDescription(): string {
      return "Просто кава + Карамель + Молоко + Цукор";
    }

    getCost(): number {
      return 2.0 + 0.7 + 0.5 + 0.2;
    }
  }

  class CoffeeWithCrema implements Coffee {
    getDescription(): string {
      return "Просто кава + Крема";
    }

    getCost(): number {
      return 2.0 + 0.8;
    }
  }

  class CoffeeWithCremaAndMilk implements Coffee {
    getDescription(): string {
      return "Просто кава + Крема + Молоко";
    }

    getCost(): number {
      return 2.0 + 0.8 + 0.5;
    }
  }

  // ... Кількість класів зростає експоненціально для кожної комбінації добавок

  console.log("Демонстрація:\n");

  const coffee1: Coffee = new SimpleCoffee();
  console.log(`${coffee1.getDescription()} - $${coffee1.getCost().toFixed(2)}`);

  const coffee2: Coffee = new CoffeeWithMilk();
  console.log(`${coffee2.getDescription()} - $${coffee2.getCost().toFixed(2)}`);

  const coffee3: Coffee = new CoffeeWithCaramelMilkAndSugar();
  console.log(`${coffee3.getDescription()} - $${coffee3.getCost().toFixed(2)}`);

  const coffee4: Coffee = new CoffeeWithCremaAndMilk();
  console.log(`${coffee4.getDescription()} - $${coffee4.getCost().toFixed(2)}`);
}

import { Coffee } from "./abstractions";
import { SimpleCoffee } from "./components";
import { MilkDecorator, SugarDecorator, CaramelDecorator, CremaDecorator } from "./decorators";


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

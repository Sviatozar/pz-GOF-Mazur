import { demonstrateFactoryMethod } from "../creational/factory-method";
import { demonstrateSingleton } from "../creational/singleton";
import { demonstrateFacade } from "../structural/facade";
import { demonstrateDecorator } from "../structural/decorator";
import { demonstrateObserver } from "../behavioral/observer";

function main(): void {
  console.clear();

  console.log("\nCreational patterns:\n");
  
  demonstrateFactoryMethod();
  demonstrateSingleton();

  console.log("\nStructural patterns:\n");
  
  demonstrateFacade();
  demonstrateDecorator();

  console.log("\nBehavioral patterns:\n");
  
  demonstrateObserver();
}

main();

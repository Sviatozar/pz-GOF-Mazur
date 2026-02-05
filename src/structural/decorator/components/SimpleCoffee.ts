import { Coffee } from "../abstractions";

export class SimpleCoffee implements Coffee {
  getDescription(): string {
    return "Проста кава";
  }

  getCost(): number {
    return 2.5;
  }
}

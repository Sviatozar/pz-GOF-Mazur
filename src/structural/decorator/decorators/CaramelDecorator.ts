import { Coffee } from "../abstractions";

export class CaramelDecorator implements Coffee {
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

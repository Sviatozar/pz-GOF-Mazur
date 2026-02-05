import { Coffee } from "../abstractions";

export class MilkDecorator implements Coffee {
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

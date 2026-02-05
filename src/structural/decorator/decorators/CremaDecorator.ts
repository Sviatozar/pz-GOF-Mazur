import { Coffee } from "../abstractions";

export class CremaDecorator implements Coffee {
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

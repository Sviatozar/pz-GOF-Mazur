import { Coffee } from "../abstractions";

export class SugarDecorator implements Coffee {
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

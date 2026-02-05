import { Observer } from "../abstractions";

export class MobileApp implements Observer {
  private userId: string;

  constructor(userId: string) {
    this.userId = userId;
  }

  update(data: any): void {
    console.log(`ДОДАТОК (користувач ${this.userId}): Сповіщення - "${data}"`);
  }
}

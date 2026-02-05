import { Observer } from "../abstractions";

export class Newspaper implements Observer {
  update(data: any): void {
    console.log(`ГАЗЕТА: Ми друкуємо новину: "${data}"`);
  }
}

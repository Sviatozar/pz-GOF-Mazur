import { Observer } from "../abstractions";

export class TVStation implements Observer {
  update(data: any): void {
    console.log(`TV: Ми передаємо новину: "${data}"`);
  }
}

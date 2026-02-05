import { Observer } from "../abstractions";

export class RadioStation implements Observer {
  update(data: any): void {
    console.log(`RADIO: Ми озвучуємо новину: "${data}"`);
  }
}

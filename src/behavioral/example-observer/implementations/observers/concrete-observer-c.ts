import { Observer } from '../../abstractions/observer';

export class ConcreteObserverC implements Observer {
  update(data: any): void {
    console.log(`Observer C: Gonna read only 3 paragraph -> ${data}`);
  }
}
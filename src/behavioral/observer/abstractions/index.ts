export interface Subject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notifyObservers(): void;
}

export interface Observer {
  update(data: any): void;
}

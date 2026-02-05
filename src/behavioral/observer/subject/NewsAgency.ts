import { Subject, Observer } from "../abstractions";

export class NewsAgency implements Subject {
  private observers: Observer[] = [];
  private lastNews: string = "";

  subscribe(observer: Observer): void {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
      console.log(`Новий підписник: ${observer.constructor.name}`);
    }
  }

  unsubscribe(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
      console.log(`Підписник видален: ${observer.constructor.name}`);
    }
  }

  notifyObservers(): void {
    console.log(`Передача новин: "${this.lastNews}"\n`);
    this.observers.forEach((observer) => {
      observer.update(this.lastNews);
    });
  }

  publishNews(news: string): void {
    console.log(`\nНовинне агентство публікує: "${news}"`);
    this.lastNews = news;
    this.notifyObservers();
  }
}

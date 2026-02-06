import { NewsAgency } from "./subject";
import { TVStation, RadioStation, Newspaper, MobileApp } from "./observers";

export function demonstrateObserver(): void {
  console.log("Демонстрація observer pattern\n");

  //Без Observer клієнт повинен сам управляти всіма залежностями:

  class SimpleNewsAgency {
    private tv: any;
    private radio: any;
    private newspaper: any;

    constructor(tv: any, radio: any, newspaper: any) {
      this.tv = tv;
      this.radio = radio;
      this.newspaper = newspaper;
      //... По потребі додати нових, прийдеться додавати в цей метод і у publishNews
    }

    publishNews(news: string): void {
      this.tv.show(news);
      this.radio.play(news);
      this.newspaper.print(news);
      //... По потребі додати нових, прийдеться додавати в цей метод і у конструктор
    }
  }

  const newsAgency = new NewsAgency();

  const tvStation = new TVStation();
  const radioStation = new RadioStation();
  const newspaper = new Newspaper();
  const mobileApp1 = new MobileApp("Користувач_1");
  const mobileApp2 = new MobileApp("Користувач_2");

  console.log("Підписка:");
  newsAgency.subscribe(tvStation);
  newsAgency.subscribe(radioStation);
  newsAgency.subscribe(newspaper);
  newsAgency.subscribe(mobileApp1);
  newsAgency.subscribe(mobileApp2);

  console.log("\nПублікація:");
  newsAgency.publishNews("Розроблено новий дизайн патернів!");

  newsAgency.publishNews("Конференція по TypeScript пройде в липні!");

  console.log("\nВідписка:");
  newsAgency.unsubscribe(mobileApp2);

  newsAgency.publishNews("Останні новини перед відключенням!");
}

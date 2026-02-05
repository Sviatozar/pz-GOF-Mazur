/**
 * Проблеми:
 * 1. Newsagency тісно пов'язана з конкретними спостерігачами
 * 2. Додавання нового спостерігача вимагає зміну NewsAgency
 * 3. Висока залежність та складність тестування
 * 4. Нарушення принципу Open/Closed (відкритим для розширення, але закритим для модифікацій)
 */

export function demonstrateAntiPatternObserver(): void {
  console.log("ANTI-PATTERN: без Observer паттерну\n");

  class NewsAgencyWithoutPattern {
    private tvStation: TVStationAntiPattern;
    private radioStation: RadioStationAntiPattern;
    private newspaper: NewspaperAntiPattern;
    private mobileApps: MobileAppAntiPattern[] = [];
    // ... Кожен інший спостерігач

    constructor(
      tv: TVStationAntiPattern,
      radio: RadioStationAntiPattern,
      newspaper: NewspaperAntiPattern
    ) {
      this.tvStation = tv;
      this.radioStation = radio;
      this.newspaper = newspaper;
      // ... Кожен новий спостерігач
    }

    addMobileApp(app: MobileAppAntiPattern): void {
      this.mobileApps.push(app);
    }

    publishNews(news: string): void {
      this.tvStation.show(news);
      this.radioStation.play(news);
      this.newspaper.print(news);

      this.mobileApps.forEach((app) => app.notify(news));

    }
  }

  class TVStationAntiPattern {
    show(news: string): void {
      console.log(`ТВ Станція: показує новину - "${news}"`);
    }
  }

  class RadioStationAntiPattern {
    play(news: string): void {
      console.log(`Радіо Станція: передає новину - "${news}"`);
    }
  }

  class NewspaperAntiPattern {
    print(news: string): void {
      console.log(`Газета: друкує новину - "${news}"`);
    }
  }

  class MobileAppAntiPattern {
    private userName: string;

    constructor(userName: string) {
      this.userName = userName;
    }

    notify(news: string): void {
      console.log(`Мобільний додаток (${this.userName}): сповіщення - "${news}"`);
    }
  }

  const tvStation = new TVStationAntiPattern();
  const radioStation = new RadioStationAntiPattern();
  const newspaper = new NewspaperAntiPattern();

  const newsAgency = new NewsAgencyWithoutPattern(tvStation, radioStation, newspaper);

  const mobileApp1 = new MobileAppAntiPattern("Користувач_1");
  const mobileApp2 = new MobileAppAntiPattern("Користувач_2");

  newsAgency.addMobileApp(mobileApp1);
  newsAgency.addMobileApp(mobileApp2);

  console.log("Публікація новини:\n");
  newsAgency.publishNews("Новий дизайн паттернів готовий!");

}


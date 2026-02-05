/**
 * Проблеми:
 * 1. Експоненціальне зростання підклас при комбінуванні варіантів
 * 2. Тісна зв'язаність абстракції та реалізації
 * 3. Складність розширення в двох вимірах (платформи + інтерфейси)
 * 4. Дублювання коду
 */

export function demonstrateAntiPatternBridge(): void {
  console.log("ANTI-PATTERN: без  Bridge паттерну\n");

  class WebAppUI {
    render(): void {
      console.log("Web UI: рендеринг веб-інтерфейсу на HTML");
      console.log("Запит до веб-серверу...");
      console.log("Отримання даних від API");
    }
  }

  class MobileWebUI {
    render(): void {
      console.log("Mobile Web UI: рендеринг мобільного веб-інтерфейсу");
      console.log("Запит до мобільного сервера...");
      console.log("Отримання даних від мобільного API");
    }
  }

  class AndroidAppUI {
    render(): void {
      console.log("Android UI: рендеринг Android інтерфейсу");
      console.log("Запит до веб-серверу...");
      console.log("Отримання даних від API");
    }
  }

  class AndroidMobileAppUI {
    render(): void {
      console.log("Android Mobile UI: рендеринг Android мобільного інтерфейсу");
      console.log("Запит до мобільного сервера...");
      console.log("Отримання даних від мобільного API");
    }
  }

  class IPhoneAppUI {
    render(): void {
      console.log("iPhone UI: рендеринг iOS інтерфейсу");
      console.log("Запит до веб-серверу...");
      console.log("Отримання даних від API");
    }
  }

  class IPhoneMobileAppUI {
    render(): void {
      console.log("iPhone Mobile UI: рендеринг iOS мобільного інтерфейсу");
      console.log("Запит до мобільного сервера...");
      console.log("Отримання даних від мобільного API");
    }
  }

  // ... Кількість класів зростає геометрично? і дорівнює добутку кількості UI та кількості backend

  console.log("Демонстрація:\n");

  const webApp = new WebAppUI();
  webApp.render();

  console.log();

  const androidMobileApp = new AndroidMobileAppUI();
  androidMobileApp.render();

  console.log();

  const iphoneApp = new IPhoneAppUI();
  iphoneApp.render();
}

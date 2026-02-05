/**
 * Проблеми:
 * 1. Клієнт повинен знати про всі внутрішні компоненти
 * 2. Комплексна логіка розпорошена по клієнтському коду
 * 3. Складність повторного використання
 * 4. Нарушення Separation of Concerns
 * 5. Тісна залежність від деталей реалізації
 */

export function demonstrateAntiPatternFacade(): void {
  console.log("ANTI-PATTERN: без Facade паттерну\n");

  class SecuritySystem {
    activate(): void {
      console.log("Охорона: активована");
    }

    deactivate(): void {
      console.log("Охорана: деактивована");
    }

    lockDoors(): void {
      console.log("Двері: заблоковані");
    }

    unlockDoors(): void {
      console.log("Двері: розблоковані");
    }
  }

  class LightingSystem {
    turnOn(): void {
      console.log("Освітлення: включено");
    }

    turnOff(): void {
      console.log("Освітлення: вимкнено");
    }

    setBrightness(level: number): void {
      console.log(`Освітлення: яскравість встановлена на ${level}%`);
    }
  }

  class ClimateControl {
    setTemperature(temp: number): void {
      console.log(`Температура: встановлена на ${temp}°C`);
    }

    startHeating(): void {
      console.log("Опалення: запущено");
    }

    startCooling(): void {
      console.log("Охолодження: запущено");
    }
  }

  class EntertainmentSystem {
    turnOn(): void {
      console.log("Розваги: включено");
    }

    turnOff(): void {
      console.log("Розваги: вимкнено");
    }

    selectMode(mode: string): void {
      console.log(`Розваги: режим змінено на ${mode}`);
    }
  }

  // Без Facade клієнт повинен все налаштовувати власноруч

  const sec = new SecuritySystem();
  const light = new LightingSystem();
  const clim = new ClimateControl();
  const ent = new EntertainmentSystem();

  console.log("Режим ранку без Facade:\n");
  sec.deactivate();
  light.turnOn();
  light.setBrightness(100);
  clim.setTemperature(22);
  clim.startHeating();
  ent.turnOff();

  console.log("\n");
  console.log("Режим вечору без Facade:\n");
  sec.activate();
  sec.lockDoors();
  light.turnOff();
  clim.setTemperature(18);
  ent.turnOn();
  ent.selectMode("Movie");

  console.log("\n");
  console.log("Режим фільму без Facade:\n");
  light.turnOn();
  light.setBrightness(20);
  clim.setTemperature(20);
  ent.turnOn();
  ent.selectMode("Movie");
}

export class LightingSystem {
  turnOn(): void {
    console.log("Світло увімкнено");
  }

  turnOff(): void {
    console.log("Світло вимкнено");
  }

  setBrightness(level: number): void {
    console.log(`Яскравість встановлена на ${level}%`);
  }
}

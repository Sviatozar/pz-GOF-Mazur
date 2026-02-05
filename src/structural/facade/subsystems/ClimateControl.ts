export class ClimateControl {
  setTemperature(temp: number): void {
    console.log(`Температура встановлена на ${temp}°C`);
  }

  setHumidity(level: number): void {
    console.log(`Вологість встановлена на ${level}%`);
  }
}

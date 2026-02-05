import { ISmartHomeController } from "../abstractions";
import { SecuritySystem, LightingSystem, ClimateControl, EntertainmentSystem } from "../subsystems";

export class SmartHomeFacade implements ISmartHomeController {
  private security: SecuritySystem;
  private lighting: LightingSystem;
  private climate: ClimateControl;
  private entertainment: EntertainmentSystem;

  constructor() {
    this.security = new SecuritySystem();
    this.lighting = new LightingSystem();
    this.climate = new ClimateControl();
    this.entertainment = new EntertainmentSystem();
  }

  goodMorning(): void {
    console.log("Ранок! Активуємо режим 'Доброго ранку'...");
    this.security.deactivate();
    this.lighting.turnOn();
    this.lighting.setBrightness(100);
    this.climate.setTemperature(22);
  }

  goodNight(): void {
    console.log("Ніч! Активуємо режим 'Доброї ночі'...");
    this.lighting.turnOff();
    this.climate.setTemperature(18);
    this.entertainment.stopMusic();
    this.security.activate();
  }

  movieTime(): void {
    console.log("Час фільму! Активуємо режим 'Кіно'...");
    this.lighting.setBrightness(20);
    this.climate.setTemperature(21);
    this.entertainment.playMusic();
  }

  leavingHome(): void {
    console.log("Виходимо з дому...");
    this.lighting.turnOff();
    this.entertainment.stopMusic();
    this.security.activate();
  }
}

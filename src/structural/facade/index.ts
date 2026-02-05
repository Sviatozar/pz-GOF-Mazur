import { SecuritySystem, LightingSystem, ClimateControl, EntertainmentSystem } from "./subsystems";
import { SmartHomeFacade } from "./facades";

export function demonstrateFacade(): void {
  console.log("Демонстрація: facade pattern\n");

  //БЕЗ Facade
  //Клієнт повинен сам управляти всіма компонентами
  const sec = new SecuritySystem();
  const light = new LightingSystem();
  const clim = new ClimateControl();
  const ent = new EntertainmentSystem();

  //Налаштування для ранку вручну
  sec.deactivate();
  light.turnOn();
  light.setBrightness(100);
  clim.setTemperature(22);
  //Забагато коду для простої операції
   console.log("\n");

  console.log("З Facade (просте керування):");
  const smartHome = new SmartHomeFacade();

  smartHome.goodMorning();
  console.log();

  smartHome.movieTime();
  console.log();

  smartHome.goodNight();
  console.log();

  smartHome.leavingHome();
}

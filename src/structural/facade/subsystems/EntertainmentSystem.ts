export class EntertainmentSystem {
  playMusic(): void {
    console.log("Музика запущена");
  }

  stopMusic(): void {
    console.log("Музика зупинена");
  }

  playMovie(title: string): void {
    console.log(`Відтворення фільму: ${title}`);
  }
}

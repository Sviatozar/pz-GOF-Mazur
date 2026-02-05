import { UI } from '../abstractions/UI';

export class WebUI extends UI {
  public render() {
    const data = this.backend.getData();
    console.log("WebUI: Rendering data from the backend ->", data);
  }
}
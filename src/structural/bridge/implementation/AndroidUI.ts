import { UI } from '../abstractions/UI';

export class AndroidUI extends UI {
  public render() {
    const data = this.backend.getData();
    console.log("AndroidUI: Rendering data from the backend ->", data);
  }
}
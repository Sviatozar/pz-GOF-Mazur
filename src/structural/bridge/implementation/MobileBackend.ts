import { Backend } from '../abstractions/Backend';

export class MobileBackend implements Backend {
  public getData() {
    return "MobileBackend: Data from the backend";
  }
}
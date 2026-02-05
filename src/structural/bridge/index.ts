import { WebBackend } from './implementation/WebBackend';
import { MobileBackend } from './implementation/MobileBackend';
import { WebUI } from './implementation/WebUI';
import { AndroidUI } from './implementation/AndroidUI';
import { IPhoneUI } from './implementation/IPhoneUI';

const webBackend = new WebBackend();
const webUI = new WebUI(webBackend);
webUI.render();

const mobileBackend = new MobileBackend();
const androidUI = new AndroidUI(mobileBackend);
androidUI.render();

const iphoneUI = new IPhoneUI(mobileBackend);
iphoneUI.render();

const androidBrowserUI = new AndroidUI(webBackend);
androidBrowserUI.render();
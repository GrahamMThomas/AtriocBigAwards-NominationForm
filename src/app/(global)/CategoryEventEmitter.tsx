// EventBus.js
import { EventEmitter } from "events";

const categoryEventEmitter = new EventEmitter();
categoryEventEmitter.setMaxListeners(40);

export default categoryEventEmitter;

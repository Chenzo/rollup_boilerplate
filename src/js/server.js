
import './modules/configModule.js';
import {expressModule} from './modules/expressModule.js';

expressModule.initalizeServer();



console.log("Server - Modules Imported");

const debugMode = process.env.DEBUG;
if (debugMode) {
    console.log("*** --- Debug: " + debugMode);
}


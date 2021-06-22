
import './modules/configModule.js';
import {codeModule} from './modules/codeModule.js';


console.log("Murray Bot - Server - Modules Imported");

const debugMode = process.env.DEBUG;
if (debugMode) {
    console.log("*** --- Debug: " + debugMode);
}


expressModule.initalizeServer();
databaseModule.initalizeDatabase();
ioModule.initializeSocket(expressModule.getHTTP());
discordModule.initalizeBot();
twitchModule.initalizeBot();

if (!debugMode) {
    
}


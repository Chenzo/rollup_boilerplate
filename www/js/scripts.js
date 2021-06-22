(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}((function () { 'use strict';

    const dotenv = require('dotenv');
    dotenv.config();

    console.log("Setting All Local .env vars");

    (() => {


        const init = function() {
            console.log("codeModule.init");
        };

        console.log("codeModule loaded...");


        return {
          init: init
        };
    })();

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

})));

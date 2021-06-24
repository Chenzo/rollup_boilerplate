(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}((function () { 'use strict';

    const codeModule = (() => {


        const init = function() {
            console.log("codeModule.init");
        };

        console.log("codeModule loaded...");


        return {
          init: init
        };
    })();

    codeModule.init();

})));
//# sourceMappingURL=scripts.js.map

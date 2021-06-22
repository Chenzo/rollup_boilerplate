

export const codeModule = (() => {


    const init = function() {
        console.log("codeModule.init");
    }

    console.log("codeModule loaded...");


    return {
      init: init
    };
})();

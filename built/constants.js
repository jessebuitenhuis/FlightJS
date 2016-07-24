System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var constants;
    return {
        setters:[],
        execute: function() {
            exports_1("constants", constants = {
                RIGHT: "right",
                LEFT: "left",
                UP: "up",
                DOWN: "down",
                keys: {
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40
                }
            });
        }
    }
});

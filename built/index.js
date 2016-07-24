System.register(['./engine'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var engine_1;
    var canvasEl, engine;
    return {
        setters:[
            function (engine_1_1) {
                engine_1 = engine_1_1;
            }],
        execute: function() {
            canvasEl = document.getElementById("flight-canvas");
            engine = new engine_1.Engine(canvasEl);
            engine.start();
        }
    }
});

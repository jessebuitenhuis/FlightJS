System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var config;
    return {
        setters:[],
        execute: function() {
            exports_1("config", config = {
                width: 120,
                height: 45,
                pixelSize: 10,
                frameRate: 60,
                backgroundColor: "#4587A1",
                planeColor: "#D19C18",
                rotateSpeed: 15,
                maxRotation: 65,
                altitudeSpeed: 0.45,
                roadLength: 20
            });
        }
    }
});

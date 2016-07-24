System.register(['./keyboard', './view', './config', './plane'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var keyboard_1, view_1, config_1, plane_1;
    var Engine;
    return {
        setters:[
            function (keyboard_1_1) {
                keyboard_1 = keyboard_1_1;
            },
            function (view_1_1) {
                view_1 = view_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (plane_1_1) {
                plane_1 = plane_1_1;
            }],
        execute: function() {
            Engine = (function () {
                function Engine(parentEl) {
                    this._keyboard = new keyboard_1.Keyboard();
                    this._view = new view_1.View(parentEl, this._keyboard.keyPressed);
                    this._plane = new plane_1.Plane();
                    this._gameObjects = [];
                    this._gameObjects.push(this._plane);
                }
                Engine.prototype.start = function () {
                    this._interval = setInterval(this._drawScene.bind(this), 1000 / config_1.config.frameRate);
                    this._keyboard.start();
                };
                Engine.prototype.stop = function () {
                    clearInterval(this._interval);
                };
                Engine.prototype._drawScene = function () {
                    this._view.drawScene(this._gameObjects);
                };
                return Engine;
            }());
            exports_1("Engine", Engine);
        }
    }
});

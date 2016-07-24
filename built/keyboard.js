System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Keyboard;
    return {
        setters:[],
        execute: function() {
            Keyboard = (function () {
                function Keyboard() {
                    this.keyPressed = {};
                }
                Keyboard.prototype.start = function () {
                    window.addEventListener("keydown", this._keyDownHandler.bind(this));
                    window.addEventListener("keyup", this._keyUpHandler.bind(this));
                };
                Keyboard.prototype._keyDownHandler = function (event) {
                    this.keyPressed[event.keyCode] = true;
                };
                Keyboard.prototype._keyUpHandler = function (event) {
                    this.keyPressed[event.keyCode] = false;
                };
                return Keyboard;
            }());
            exports_1("Keyboard", Keyboard);
        }
    }
});

System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DrawClass, Draw;
    return {
        setters:[],
        execute: function() {
            DrawClass = (function () {
                function DrawClass() {
                }
                DrawClass.prototype.shape = function (color) {
                    var coordinates = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        coordinates[_i - 1] = arguments[_i];
                    }
                    this._ctx.beginPath();
                    this._ctx.moveTo(coordinates[0].x, coordinates[0].y);
                    for (var i = 1; i < coordinates.length; i++) {
                        this._ctx.lineTo(coordinates[i].x, coordinates[i].y);
                    }
                    this._ctx.closePath();
                    this._ctx.fillStyle = color;
                    this._ctx.fill();
                };
                return DrawClass;
            }());
            exports_1("Draw", Draw = new Draw());
        }
    }
});

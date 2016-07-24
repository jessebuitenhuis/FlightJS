System.register(['./config'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var config_1;
    var View;
    return {
        setters:[
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            View = (function () {
                function View(parentEl, keyPressed) {
                    this.createCanvas(parentEl);
                    this._ctx = this._canvas.getContext("2d");
                    this._keyPressed = keyPressed;
                }
                View.prototype.createCanvas = function (parentEl) {
                    this._canvas = document.createElement('canvas');
                    this._canvas.setAttribute("width", String(config_1.config.width * config_1.config.pixelSize));
                    this._canvas.setAttribute("height", String(config_1.config.height * config_1.config.pixelSize));
                    parentEl.appendChild(this._canvas);
                };
                View.prototype.drawScene = function (gameObjects) {
                    this.clearCanvas();
                    gameObjects.forEach(function (gameObject) {
                        gameObject.draw(this._ctx, this._keyPressed);
                    }, this);
                };
                View.prototype.clearCanvas = function () {
                    this._ctx.fillStyle = config_1.config.backgroundColor;
                    this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
                };
                return View;
            }());
            exports_1("View", View);
        }
    }
});

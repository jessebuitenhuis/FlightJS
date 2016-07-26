System.register(['./config'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var config_1;
    var Road;
    return {
        setters:[
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            Road = (function () {
                function Road(ctx) {
                    this._ctx = ctx;
                    this._cWidth = config_1.config.width * config_1.config.pixelSize;
                    this._cHeight = config_1.config.height * config_1.config.pixelSize;
                    this._length = config_1.config.roadLength * config_1.config.pixelSize;
                    this._stripeWidth = 2;
                    this._stripeOffset = 0;
                }
                Road.prototype.draw = function () {
                    this._drawAsphalt();
                    this._drawStripes();
                };
                Road.prototype._drawAsphalt = function () {
                    this._drawShape("#000", { x: this._cWidth * 3 / 8, y: this._cHeight }, { x: this._cWidth * 5 / 8, y: this._cHeight }, { x: this._cWidth * 17 / 32, y: this._cHeight - this._length }, { x: this._cWidth * 15 / 32, y: this._cHeight - this._length });
                };
                // TODO: refactor into sane function
                Road.prototype._drawStripes = function () {
                    var qty = 4;
                    var ratio = 3; // 3 sections to 1 gap
                    var divider = qty * (ratio + 1) - 1;
                    var center = this._cWidth / 2;
                    var bottomOffset;
                    var topOffset;
                    var topRatio;
                    var bottomRatio;
                    var topY;
                    var bottomY;
                    var topWidthRatio;
                    var bottomWidth;
                    if (this._stripeOffset < 0) {
                        this._stripeOffset++;
                    }
                    else {
                        this._stripeOffset = -this._length / qty;
                    }
                    for (var i = 0; i <= qty; i++) {
                        topRatio = i * (ratio + 1) / divider;
                        bottomRatio = (i * (ratio + 1) + ratio) / divider;
                        topOffset = this._length * topRatio;
                        bottomOffset = this._length * bottomRatio;
                        topY = Math.max(this._cHeight - this._length + topOffset + this._stripeOffset, this._cHeight - this._length);
                        bottomY = Math.max(this._cHeight - this._length + bottomOffset + this._stripeOffset, this._cHeight - this._length);
                        this._drawShape("#fff", { x: center - this._stripeWidth - this._stripeWidth * topRatio * 10, y: topY }, { x: center + this._stripeWidth + this._stripeWidth * topRatio * 10, y: topY }, { x: center + this._stripeWidth + this._stripeWidth * bottomRatio * 10, y: bottomY }, { x: center - this._stripeWidth - this._stripeWidth * bottomRatio * 10, y: bottomY });
                    }
                };
                Road.prototype._drawShape = function (color) {
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
                return Road;
            }());
            exports_1("Road", Road);
        }
    }
});

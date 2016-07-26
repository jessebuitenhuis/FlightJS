System.register(['./constants', './config', './utility'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var constants_1, config_1, utility_1;
    var Plane;
    return {
        setters:[
            function (constants_1_1) {
                constants_1 = constants_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (utility_1_1) {
                utility_1 = utility_1_1;
            }],
        execute: function() {
            Plane = (function () {
                function Plane(ctx, keyPressed) {
                    this._ctx = ctx;
                    this._keyPressed = keyPressed;
                    this._rotateX = 0;
                    this._posY = config_1.config.height / 2;
                    this._size = 5 * config_1.config.pixelSize;
                    this._createAssets();
                }
                Plane.prototype._createAssets = function () {
                    this._planeImage = document.createElement("img");
                    this._planeImage.setAttribute("src", "assets/plane.png");
                };
                Plane.prototype.draw = function () {
                    this._changeAltitude();
                    this._rotate();
                    this._ctx.save();
                    var x = config_1.config.width / 2 * config_1.config.pixelSize;
                    var y = this._posY * config_1.config.pixelSize;
                    this._ctx.translate(x, y);
                    this._ctx.rotate(utility_1.utility.convertToRadians(this._rotateX));
                    var aspectRatio = this._planeImage.height / this._planeImage.width;
                    var width = 300;
                    var height = width * aspectRatio;
                    var rotationPointOffset = -15;
                    this._ctx.drawImage(this._planeImage, 0 - width / 2, rotationPointOffset - height / 2, width, height);
                    this._ctx.restore();
                };
                Plane.prototype._changeAltitude = function () {
                    if (this._keyPressed[constants_1.constants.keys.up]) {
                        this._posY -= config_1.config.altitudeSpeed;
                    }
                    else if (this._keyPressed[constants_1.constants.keys.down]) {
                        this._posY += config_1.config.altitudeSpeed;
                    }
                };
                Plane.prototype._rotate = function () {
                    var rotation;
                    var easingInput = Math.max(Math.abs(this._rotateX), 20) / config_1.config.maxRotation;
                    var easing = Math.max(utility_1.utility.easing.easeInCubic(easingInput), 0.2);
                    if (this._keyPressed[constants_1.constants.keys.left]) {
                        rotation = this._rotateX - (config_1.config.rotateSpeed * easing);
                        this._rotateX = Math.max(rotation, -config_1.config.maxRotation);
                    }
                    else if (this._keyPressed[constants_1.constants.keys.right]) {
                        rotation = this._rotateX + (config_1.config.rotateSpeed * easing);
                        this._rotateX = Math.min(rotation, config_1.config.maxRotation);
                    }
                };
                return Plane;
            }());
            exports_1("Plane", Plane);
        }
    }
});

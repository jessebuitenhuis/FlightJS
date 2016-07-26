import { constants } from './constants';
import { config } from './config';
import { utility } from './utility';
import { GameObject } from './gameObject.interface';

export class Plane implements GameObject {
	private _rotateX: number;
	private _posY: number;
	private _size: number;
	private _planeImage: HTMLImageElement;
	private _ctx: CanvasRenderingContext2D;
	private _keyPressed: Object;

	constructor(ctx: CanvasRenderingContext2D, keyPressed: Object) {
		this._ctx = ctx;
		this._keyPressed = keyPressed;

		this._rotateX = 0;
		this._posY = config.height / 2;
		this._size = 5 * config.pixelSize;

		this._createAssets();
	}

	private _createAssets() {
		this._planeImage = document.createElement("img");
		this._planeImage.setAttribute("src", "assets/plane.png");
	}

	public draw() {
		this._changeAltitude();
		this._rotate();

		this._ctx.save();

		var x = config.width/2 * config.pixelSize;
		var y = this._posY * config.pixelSize;

		this._ctx.translate(x, y);
		this._ctx.rotate(utility.convertToRadians(this._rotateX));

		var aspectRatio = this._planeImage.height / this._planeImage.width;
		var width = 300;
		var height = width * aspectRatio;
		var rotationPointOffset = -15;

		this._ctx.drawImage(this._planeImage, 
			0 - width / 2,
			rotationPointOffset - height / 2,
			width,
			height);

		this._ctx.restore();
	}

	private _changeAltitude() {
		if (this._keyPressed[constants.keys.up]) {
			this._posY -= config.altitudeSpeed;
		} else if (this._keyPressed[constants.keys.down]) {
			this._posY += config.altitudeSpeed;
		}
	}

	private _rotate() {
		var rotation;

		var easingInput = Math.max( Math.abs(this._rotateX ), 20 ) / config.maxRotation;
		var easing = Math.max(utility.easing.easeInCubic(easingInput), 0.2);

		if (this._keyPressed[constants.keys.left]) {
			rotation = this._rotateX - (config.rotateSpeed * easing);
			this._rotateX = Math.max(rotation, -config.maxRotation);
		} else if (this._keyPressed[constants.keys.right]) {
			rotation = this._rotateX + (config.rotateSpeed * easing);
			this._rotateX = Math.min(rotation , config.maxRotation);
		}
	}
}
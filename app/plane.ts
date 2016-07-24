import { constants } from './constants';
import { config } from './config';
import { utility } from './utility';

interface PlaneInterface {
	draw(ctx: CanvasRenderingContext2D, keyPressed: Object);
}

export class Plane implements PlaneInterface {
	private _rotateX: number;
	private _posY: number;
	private _size: number;
	private _planeImage: HTMLImageElement;

	constructor() {
		this._rotateX = 0;
		this._posY = config.height / 2;
		this._size = 5 * config.pixelSize;

		this._createAssets();
	}

	private _createAssets() {
		this._planeImage = document.createElement("img");
		this._planeImage.setAttribute("src", "assets/plane.png");
	}

	public draw(ctx: CanvasRenderingContext2D, keyPressed: Object) {
		
		this._changeAltitude(keyPressed);
		this._rotate(keyPressed);

		ctx.save();

		var x = config.width/2 * config.pixelSize;
		var y = this._posY * config.pixelSize;

		ctx.translate(x, y);
		ctx.rotate(utility.convertToRadians(this._rotateX));

		var aspectRatio = this._planeImage.height / this._planeImage.width;
		var width = 300;
		var height = width * aspectRatio;
		var rotationPointOffset = -15;

		ctx.drawImage(this._planeImage, 
			0 - width / 2,
			rotationPointOffset - height / 2,
			width,
			height);

		ctx.restore();
	}

	private _changeAltitude(keyPressed: Object) {
		if (keyPressed[constants.keys.up]) {
			this._posY -= config.altitudeSpeed;
		} else if (keyPressed[constants.keys.down]) {
			this._posY += config.altitudeSpeed;
		}
	}

	private _rotate(keyPressed: Object) {
		var rotation;

		var easingInput = Math.max( Math.abs(this._rotateX ), 20 ) / config.maxRotation;
		var easing = Math.max(utility.easing.easeInCubic(easingInput), 0.2);

		if (keyPressed[constants.keys.left]) {
			rotation = this._rotateX - (config.rotateSpeed * easing);
			this._rotateX = Math.max(rotation, -config.maxRotation);
		} else if (keyPressed[constants.keys.right]) {
			rotation = this._rotateX + (config.rotateSpeed * easing);
			this._rotateX = Math.min(rotation , config.maxRotation);
		}
	}
}
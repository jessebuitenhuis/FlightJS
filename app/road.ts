import { GameObject } from './gameObject.interface';
import { Coordinate } from './coordinate.interface';
import { config } from './config';

export class Road implements GameObject {
	private _ctx : CanvasRenderingContext2D;
	private _cWidth : number;
	private _cHeight : number;
	private _length: number;
	private _stripeWidth: number;
	private _stripeOffset: number;

	constructor(ctx: CanvasRenderingContext2D) {
		this._ctx = ctx;
		this._cWidth = config.width * config.pixelSize;
		this._cHeight = config.height * config.pixelSize;
		this._length = config.roadLength * config.pixelSize;
		this._stripeWidth = 2;
		this._stripeOffset = 0;
	}

	draw() {
		this._drawAsphalt();
		this._drawStripes();
	}

	_drawAsphalt() {
		this._drawShape(
			"#000",
			{x: this._cWidth * 3/8,  y: this._cHeight},
			{x: this._cWidth * 5/8,  y: this._cHeight},
			{x: this._cWidth * 17/32, y: this._cHeight - this._length},
			{x: this._cWidth * 15/32, y: this._cHeight - this._length});
	}

	// TODO: refactor into sane function
	_drawStripes() {
		var qty = 4;		
		var ratio = 3; // 3 sections to 1 gap
		var divider = qty * (ratio + 1) - 1;

		var center = this._cWidth / 2;
		var bottomOffset: number;
		var topOffset: number;
		var topRatio : number;
		var bottomRatio : number;
		var topY : number;
		var bottomY : number;
		var topWidthRatio : number;
		var bottomWidth: number;

		if (this._stripeOffset < 0) {
			this._stripeOffset++;
		} else {
			this._stripeOffset = -this._length / qty;
		}
		

		for (var i = 0; i <= qty; i++) {
			topRatio = i * (ratio+1) / divider;
			bottomRatio = (i * (ratio+1) + ratio) / divider; 
			topOffset = this._length * topRatio;
			bottomOffset = this._length * bottomRatio;

			topY = Math.max(this._cHeight - this._length + topOffset + this._stripeOffset, this._cHeight - this._length);
			bottomY = Math.max(this._cHeight - this._length + bottomOffset + this._stripeOffset, this._cHeight - this._length);


			this._drawShape(
				"#fff",
				{x: center - this._stripeWidth - this._stripeWidth * topRatio * 10, 	y: topY},
				{x: center + this._stripeWidth + this._stripeWidth * topRatio * 10, 	y: topY},
				{x: center + this._stripeWidth + this._stripeWidth * bottomRatio * 10, 	y: bottomY },
				{x: center - this._stripeWidth - this._stripeWidth * bottomRatio * 10, 	y: bottomY});
		}

		
	}

	_drawShape(color: string, ...coordinates: Coordinate[]) {
		this._ctx.beginPath();
		this._ctx.moveTo(coordinates[0].x, coordinates[0].y);

		for (var i = 1; i < coordinates.length; i++){
			this._ctx.lineTo(coordinates[i].x, coordinates[i].y);
		}

		this._ctx.closePath();
		this._ctx.fillStyle = color;
		this._ctx.fill();
	}
}
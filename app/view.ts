import { config } from './config';

interface ViewInterface {
	drawScene(gameObjects: Array<any>);
	ctx: CanvasRenderingContext2D;
}

export class View implements ViewInterface {
	private _canvas: HTMLCanvasElement;
	public ctx: CanvasRenderingContext2D;
	private _keyPressed: Object;

	constructor(parentEl: HTMLElement, keyPressed: Object) {
		this.createCanvas(parentEl);
		this.ctx = this._canvas.getContext("2d");
		this._keyPressed = keyPressed;
	}

	private createCanvas(parentEl: HTMLElement) {
		this._canvas = document.createElement('canvas');
		this._canvas.setAttribute("width", String(config.width * config.pixelSize));
		this._canvas.setAttribute("height", String(config.height * config.pixelSize));

		parentEl.appendChild(this._canvas);
	}

	public drawScene(gameObjects: Array<any>) {
		this.clearCanvas();

		gameObjects.forEach(function(gameObject){
			gameObject.draw();
		}, this);
	}

	private clearCanvas() {
		this.ctx.fillStyle = config.backgroundColor;
		this.ctx.fillRect(0,0,this._canvas.width, this._canvas.height);
	}
}
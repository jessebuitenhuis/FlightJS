import { Keyboard } from './keyboard';
import { View } from './view';
import { config } from './config';
import { Plane } from './plane';

interface EngineInterface {
	start();
	stop();
}

export class Engine implements EngineInterface {
	private _keyboard: Keyboard;
	private _view: View;
	private _interval: number;
	private _plane: Plane;
	private _gameObjects: Array<any>;

	constructor(parentEl: HTMLElement) {
		this._keyboard = new Keyboard();
		this._view = new View(parentEl, this._keyboard.keyPressed);

		this._plane = new Plane();
		this._gameObjects = [];
		this._gameObjects.push(this._plane);
	}

	public start() {
		this._interval = setInterval(this._drawScene.bind(this), 1000/config.frameRate);
		this._keyboard.start();
	}

	public stop() {
		clearInterval(this._interval);
	}

	private _drawScene() {
		this._view.drawScene(this._gameObjects);
	}
}
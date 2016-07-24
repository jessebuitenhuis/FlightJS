import { constants } from './constants';

interface KeyboardInterface {
	start();
}

export class Keyboard implements KeyboardInterface {
	public keyPressed: Object;

	constructor() {
		this.keyPressed = {};
	}

	public start() {
		window.addEventListener("keydown", this._keyDownHandler.bind(this));
		window.addEventListener("keyup", this._keyUpHandler.bind(this));
	}


	private _keyDownHandler(event: KeyboardEvent) {
		this.keyPressed[event.keyCode] = true;
	}

	private _keyUpHandler(event: KeyboardEvent) {
		this.keyPressed[event.keyCode] = false;
	}
}
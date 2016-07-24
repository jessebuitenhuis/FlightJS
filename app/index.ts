import { Engine } from './engine';

var canvasEl = document.getElementById("flight-canvas");
var engine = new Engine(canvasEl);
engine.start();
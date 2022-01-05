import * as PIXI from 'pixi.js';

import './style/main.css';
import logo from './images/smile.png';

const app = new PIXI.Application({
  width: 640,
  height: 640,
  backgroundColor: 0x1099bb,
});

document.body.appendChild(app.view);

const container = new PIXI.Container();
app.stage.addChild(container);

const texture = PIXI.Texture.from(logo);

const smile = new PIXI.Sprite(texture);
smile.anchor.set(0.5);
container.addChild(smile);

container.x = app.screen.width / 2;
container.y = app.screen.height / 2;

container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;

app.ticker.add((delta) => {
  container.rotation += 0.01 * delta
});
import {Application, TextStyle, Text} from 'pixi.js';

import './style/main.css';
// import catImage from './images/cat.png';
// import catSprite from './images/cat_sprite.png';
// import catAtlas from './images/atlas.json';

const app = new Application({
  width: 256,
  height: 256,
  backgroundColor: 0x1099bb,
});

document.body.appendChild(app.view);

let style = new TextStyle({
  fontFamily: 'Arial',
  fontSize: 36,
  fill: "white"
});

let message = new Text("Hello", style);

app.stage.addChild(message);

let value = 0;

message.x = 100;
message.y = 100;

app.ticker.add(() => {
  value++;
  message.text = value;
});
import {Application, Graphics} from 'pixi.js';

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

let rectangle = new Graphics();
rectangle.lineStyle(4, 0xff3300, 1);
rectangle.beginFill(0x66ccff);
rectangle.drawRect(0, 0, 64, 64);
rectangle.endFill();
rectangle.x = 170;
rectangle.y = 170;
app.stage.addChild(rectangle);

let ellipse = new Graphics();
ellipse.beginFill(0xffff00);
ellipse.drawEllipse(0, 0, 50, 20);
ellipse.endFill();
ellipse.x = 180;
ellipse.y = 130;
app.stage.addChild(ellipse);

let roundBox = new Graphics();
roundBox.lineStyle(4, 0x99ccff, 1);
roundBox.beginFill(0xff9933);
roundBox.drawRoundedRect(0, 0, 84, 36, 10);
roundBox.endFill();
roundBox.x = 48;
roundBox.y = 190;
app.stage.addChild(roundBox);

let line = new Graphics();
line.lineStyle(4, 0xffffff, 1);
line.moveTo(0, 0);
line.lineTo(80, 50);
line.x = 32;
line.y = 32;
app.stage.addChild(line);
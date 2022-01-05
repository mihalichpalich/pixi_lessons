import * as PIXI from 'pixi.js';

import './style/main.css';
// import catImage from './images/cat.png';
import catSprite from './images/cat_sprite.png';

const app = new PIXI.Application({
  width: 256,
  height: 256,
  backgroundColor: 0x1099bb,
});

document.body.appendChild(app.view);

const loader = new PIXI.Loader();
const Sprite = PIXI.Sprite;

const setup = () => {
  // const cat = new Sprite(loader.resources[catImage].texture);
  // const catTwo = new Sprite(loader.resources[catImage].texture);
  // cat.x = 100;
  // cat.y = 100;
  // cat.scale.set(1);
  // cat.anchor.set(0.5);
  // catTwo.x = 50;
  // catTwo.y = 50;
  // app.stage.addChild(cat);
  // app.stage.addChild(catTwo);
  // app.ticker.add((delta) => {
  //   cat.rotation -= 0.01 * delta;
  // });
  const texture = PIXI.utils.TextureCache[catSprite];
  const rectangle = new PIXI.Rectangle(0, 0, 100, 110);
  texture.frame = rectangle;
  const target = new Sprite(texture);
  app.stage.addChild(target);
};

loader.add(catSprite).load(setup);


import {Application, Loader, Sprite, Graphics} from 'pixi.js';

import './style/main.css';
import catImage from './images/cat.png';
// import catSprite from './images/cat_sprite.png';
// import catAtlas from './images/atlas.json';

const app = new Application({
  width: 256,
  height: 256,
  backgroundColor: 0x1099bb,
});

document.body.appendChild(app.view);

const loader = new Loader();

loader.add(catImage).load(setup);

function setup () {
  let cat = new Sprite(loader.resources[catImage].texture);
  app.stage.addChild(cat);

  document.addEventListener("keydown", ev => {
    switch (ev.keyCode) {
      case 37:
        cat.x -= 5;
        break;
      case 38:
        cat.y -= 5;
        break;
      case 39:
        cat.x += 5;
        break;
      case 40:
        cat.y += 5;
    }
  });

  let box = new Graphics();
  box.beginFill(0xccff99);
  box.drawRect(0, 0, 32, 32);
  box.endFill();
  box.x = 120;
  box.y = 120;
  app.stage.addChild(box);

  app.ticker.add(() => {
    if (hitTestRectangle(cat, box)) {
      box.tint = 0xff3300;
    } else {
      box.tint = 0xccff99;
    }
  });
}

function hitTestRectangle(r1, r2) {

  //Define the variables we'll need to calculate
  let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

  //hit will determine whether there's a collision
  hit = false;

  //Find the center points of each sprite
  r1.centerX = r1.x + r1.width / 2;
  r1.centerY = r1.y + r1.height / 2;
  r2.centerX = r2.x + r2.width / 2;
  r2.centerY = r2.y + r2.height / 2;

  //Find the half-widths and half-heights of each sprite
  r1.halfWidth = r1.width / 2;
  r1.halfHeight = r1.height / 2;
  r2.halfWidth = r2.width / 2;
  r2.halfHeight = r2.height / 2;

  //Calculate the distance vector between the sprites
  vx = r1.centerX - r2.centerX;
  vy = r1.centerY - r2.centerY;

  //Figure out the combined half-widths and half-heights
  combinedHalfWidths = r1.halfWidth + r2.halfWidth;
  combinedHalfHeights = r1.halfHeight + r2.halfHeight;

  //Check for a collision on the x axis
  if (Math.abs(vx) < combinedHalfWidths) {

    //A collision might be occurring. Check for a collision on the y axis
    hit = Math.abs(vy) < combinedHalfHeights;
  } else {

    //There's no collision on the x axis
    hit = false;
  }

  //`hit` will be either `true` or `false`
  return hit;
}
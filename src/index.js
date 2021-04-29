import css from "./style.css";

const FPS = 30; // frames per second
const shipSize = 30; // Ship height in px;
const shipThrust = 8;
const friction = 0.6;
const rockJag = 0.2;
const laserMax = 10;
const laserSpeed = 300;
const rocksSpeed = 50;
const rocksVert = 10;
const rocksSize = 80;
const turnSpeed = 360;
const laserExplodeDur = 0.1;
const shipExplodeDur = 0.3;
const canv = document.getElementById("gameCanvas");
const ctx = canv.getContext("2d");
const rocksAmount = 10;
const showBounding = false;
const showCenterDot = false;
const textFadeTime = 2.5;
const textSize = 26;
const textGameOver = "GAME OVER COWBOY";
const pointLarge = 10; // Point scored large asteroid
const pointMedium = 20; // Point scored middle asteroid
const pointSmall = 30; // Point scored small asteroid
const textScore = "SCORE: ";
let rocks = [];

let level, roids, score, ship, text, textAlpha;

const playSound = (soundUrl) => {
  const audio = new Audio();
  audio.src = soundUrl;
  audio.autoplay = true;
}
const laserSound = new Audio('Sound/horn.wav')

const createShip = () => {
  return {
    x: canv.width / 2,
    y: canv.height / 2,
    r: shipSize / 2,
    a: (90 / 180) * Math.PI, // convert to radians
    rotation: 0,
    thrusting: false,
    explodeTime: 0,
    thrust: {
      x: 0,
      y: 0,
    },
    canShoot: true,
    lasers: [],
    dead: false
  };
};

const shootLaser = () => {
  if (ship.canShoot && ship.lasers.length < laserMax) {
    ship.lasers.push({
      x: ship.x + (4 / 3) * ship.r * Math.cos(ship.a),
      y: ship.y - (4 / 3) * ship.r * Math.sin(ship.a),
      xv: (laserSpeed * Math.cos(ship.a)) / FPS,
      yv: (-laserSpeed * Math.sin(ship.a)) / FPS,
      explodeTime: 0,
    });
    playSound('Sound/horn.wav');
    laserSound.play();
  }
  ship.canShoot = false;
};

const createAsteroidBelt = () => {
  let x, y;
  for (let i = 0; i < rocksAmount + level; i++) {
    do {
      x = Math.floor(Math.random() * canv.width);
      y = Math.floor(Math.random() * canv.height);
    } while (distBetweenPoint(ship.x, ship.y, x, y) < rocksSize * 2 + ship.r);
    rocks.push(newAsteroid(x, y, Math.ceil(rocksSize / 2)));
  }
};

const destroyRock = (index) => {
  let x = rocks[index].x;
  let y = rocks[index].y;
  let r = rocks[index].r;

  if (r == Math.ceil(rocksSize / 2)) {
    rocks.push(newAsteroid(x, y, Math.ceil(rocksSize / 3)));
    rocks.push(newAsteroid(x, y, Math.ceil(rocksSize / 3)));
    rocks.push(newAsteroid(x, y, Math.ceil(rocksSize / 3)));
    score += pointLarge;
  } else if (r == Math.ceil(rocksSize / 3)) {
    rocks.push(newAsteroid(x, y, Math.ceil(rocksSize / 9)));
    rocks.push(newAsteroid(x, y, Math.ceil(rocksSize / 9)));
    score += pointMedium;
  }
    else {
      score += pointSmall;
    }
  // destroy the rock
  rocks.splice(index, 1);
  if (rocks.length == 0) {
    level ++;
    newLevel();
  }
};

const distBetweenPoint = (x1, y1, x2, y2) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

const explodeShip = () => {
  ship.canShoot = false;
  ship.dead = true;
  ship.explodeTime = Math.ceil(shipExplodeDur * FPS);
};
const newAsteroid = (x, y, r) => {
  let rock = {
    x: x,
    y: y,
    xv: ((Math.random() * rocksSpeed) / FPS) * (Math.random() < 0.5 ? 1 : -1),
    yv: ((Math.random() * rocksSpeed) / FPS) * (Math.random() < 0.5 ? 1 : -1),
    r: r,
    a: Math.random() * Math.PI * 2,
    vert: Math.floor(Math.random() * (rocksVert + 1) + rocksVert / 2),
    offs: [],
  };
  for (let i = 0; i < rock.vert; i++) {
    rock.offs.push(Math.random() * rockJag * 2 + 1 - rockJag);
  }
  return rock;
};

const keyDown = (e) => {
  switch (e.keyCode) {
    case 32: // space bar (shoot)
      shootLaser();
      break;
    case 37: // left arrow (rotate ship left)
      ship.rotation = ((turnSpeed / 180) * Math.PI) / FPS;
      break;
    case 38: // up arrow
      ship.thrusting = true;
      break;
    case 39: // right arrow
      ship.rotation = ((-turnSpeed / 180) * Math.PI) / FPS;
      break;
    case 72:
      playSound('./Sound/horn.wav');
  }
};

const keyUp = (e) => {

  if (ship.dead) {
    return
  }

  switch (e.keyCode) {
    case 32: // space bar (shooting again)
      ship.canShoot = true;
      break;
    case 37: // left arrow (rotate ship left)
      ship.rotation = 0;
      break;
    case 38: // up arrow
      ship.thrusting = false;
      break;
    case 39: // right arrow
      ship.rotation = 0;
      break;
  }
};

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
const update = () => {
  const exploding = ship.explodeTime > 0;
  //----DRAW SPACE
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);
  //----DRAW THE SCORE
  if (ship.dead) {
    ctx.fillStyle = "rgba(28,197,220, 1)";
    ctx.font = textSize + "px 'Zen Dots'";
    ctx.fillText(textScore + score, canv.width * 0.65, canv.height * 0.20);
    textAlpha -= (1.0 / textFadeTime / FPS);
  }
  //----DRAW SHIP
  if (!exploding) {
    ctx.strokeStyle = "white";
    ctx.lineWidth = shipSize / 20;
    ctx.beginPath();
    ctx.moveTo(
      ship.x + (4 / 3) * ship.r * Math.cos(ship.a),
      ship.y - (4 / 3) * ship.r * Math.sin(ship.a)
    );
    ctx.lineTo(
      // left side
      ship.x - ship.r * ((2 / 3) * Math.cos(ship.a) + Math.sin(ship.a)),
      ship.y + ship.r * ((2 / 3) * Math.sin(ship.a) - Math.cos(ship.a))
    );
    ctx.lineTo(
      // right side
      ship.x - ship.r * ((2 / 3) * Math.cos(ship.a) - Math.sin(ship.a)),
      ship.y + ship.r * ((2 / 3) * Math.sin(ship.a) + Math.cos(ship.a))
    );
    ctx.closePath();
    ctx.stroke();
  } else {
    ctx.fillStyle = "darkred";
    ctx.beginPath();
    ctx.arc(ship.x, ship.y, ship.r * 1.7, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(ship.x, ship.y, ship.r * 1.3, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.arc(ship.x, ship.y, ship.r * 1.1, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(ship.x, ship.y, ship.r * 1, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(ship.x, ship.y, ship.r * 0.5, 0, Math.PI * 2, false);
    ctx.fill();
  }
  if (showBounding) {
    ctx.strokeStyle = "lime";
    ctx.beginPath();
    ctx.arc(ship.x, ship.y, ship.r, 0, Math.PI * 2, false);
    ctx.stroke();
  }

  //----DRAW THE ASTEROIDS BELT
  let x, y, r, a, vert, offs;

  rocks.forEach((rock) => {
    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    x = rock.x;
    y = rock.y;
    r = rock.r;
    a = rock.a;
    vert = rock.vert;
    offs = rock.offs;
    ctx.lineWidth = shipSize / 20;
    ctx.moveTo(x + r * offs[0] * Math.cos(a), y + r * offs[0] * Math.sin(a));
    //----DRAW THE POLYGONS
    for (let i = 1; i < vert; i++) {
      ctx.lineTo(
        x + r * offs[i] * Math.cos(a + (i * Math.PI * 2) / vert),
        y + r * offs[i] * Math.sin(a + (i * Math.PI * 2) / vert)
      );
    }
    ctx.closePath();
    ctx.stroke();

    if (showBounding) {
      ctx.strokeStyle = "lime";
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2, false);
      ctx.stroke();
    }

    //----MOVE THE ROCKS
    rock.x += rock.xv;
    rock.y += rock.yv;

    if (rock.x < 0 - rock.r) {
      rock.x = canv.width;
    } else if (rock.x > canv.width + rock.r) {
      rock.x = 0;
    }
    if (rock.y < 0) {
      rock.y = canv.height;
    } else if (rock.y > canv.height + rock.r) {
      rock.y = 0;
    }
  });
  //----CENTER DOT
  if (showCenterDot) {
    ctx.fillStyle = "red";
    ctx.fillRect(ship.x - 1, ship.y - 1, 2, 2);
  }
  //----DRAW LASERS
  for (let i = 0; i < ship.lasers.length; i++) {
    if (ship.lasers[i].explodeTime == 0) {
      ctx.fillStyle = "#1cc5dc";
      ctx.beginPath();
      ctx.arc(
        ship.lasers[i].x,
        ship.lasers[i].y,
        shipSize / 15,
        0,
        Math.PI * 2,
        false
      );
      ctx.fill();
    } else {
      // draw the explosion
      ctx.fillStyle = "#02475e";
      ctx.beginPath();
      ctx.arc(
        ship.lasers[i].x,
        ship.lasers[i].y,
        ship.r * 0.75,
        0,
        Math.PI * 2,
        false
      );
      ctx.fill();
      ctx.fillStyle = "#00adb5";
      ctx.beginPath();
      ctx.arc(
        ship.lasers[i].x,
        ship.lasers[i].y,
        ship.r * 0.5,
        0,
        Math.PI * 2,
        false
      );
      ctx.fill();
      ctx.fillStyle = "#aad8d3";
      ctx.beginPath();
      ctx.arc(
        ship.lasers[i].x,
        ship.lasers[i].y,
        ship.r * 0.25,
        0,
        Math.PI * 2,
        false
      );
      ctx.fill();
    }
  }
  //----MOVE THE LASERS
  for (let i = 0; i < ship.lasers.length; i++) {
    // handle edge of screen
    if (
      ship.lasers[i].x < 0 ||
      ship.lasers[i].x > canv.width ||
      ship.lasers[i].y < 0 ||
      ship.lasers[i].y > canv.height
    ) {
      ship.lasers.splice(i, 1);
      continue;
    }
    // handl the expos
    if (ship.lasers[i].explodeTime > 0) {
      ship.lasers[i].explodeTime--;
      if (ship.lasers[i].explodeTime == 0) {
        ship.lasers.splice(i, 1);
        continue;
      }
    } else {
      ship.lasers[i].x += ship.lasers[i].xv;
      ship.lasers[i].y += ship.lasers[i].yv;
    }
  }

  //----THRUST THE SHIP
  if (ship.thrusting && !ship.dead) {
    ship.thrust.x += (shipThrust * Math.cos(ship.a)) / FPS;
    ship.thrust.y -= (shipThrust * Math.sin(ship.a)) / FPS;
  } else {
    ship.thrust.x -= (friction * ship.thrust.x) / FPS;
    ship.thrust.y -= (friction * ship.thrust.y) / FPS;
  }

  if (!exploding) {
    for (let i = 0; i < rocks.length; i++) {
      if (
        distBetweenPoint(ship.x, ship.y, rocks[i].x, rocks[i].y) <
        ship.r + rocks[i].r
      ) {
        explodeShip();
        destroyRock(i);
        break;
      }
    }
    ship.x += ship.thrust.x;
    ship.y += ship.thrust.y;

    ship.a += ship.rotation;
  }
  //----DETECT HITS ON ROCK
  var rx, ry, rr, lx, ly;
  for (let i = rocks.length - 1; i >= 0; i--) {
    // asteroids prop
    rx = rocks[i].x;
    ry = rocks[i].y;
    rr = rocks[i].r;
    for (let j = ship.lasers.length - 1; j >= 0; j--) {
      // lasers prop
      lx = ship.lasers[j].x;
      ly = ship.lasers[j].y;

      if (
        ship.lasers[j].explodeTime == 0 &&
        distBetweenPoint(rx, ry, lx, ly) < rr
      ) {
        // remove the asteroid and laser-shot
        destroyRock(i);
        ship.lasers[j].explodeTime = Math.ceil(laserExplodeDur * FPS);

        break;
      }
    }
  }
  //----MOVE THE SHIP
  if (ship.x < 0 - ship.r) {
    ship.x = canv.width;
  } else if (ship.x > canv.width + ship.r) {
    ship.x = 0;
  }
  if (ship.y < 0) {
    ship.y = canv.height;
  } else if (ship.y > canv.height + ship.r) {
    ship.y = 0;
  }
  //----DRAW THE LVL TEXT
  if (textAlpha >= 0) {
    ctx.fillStyle = "rgba(28,197,220, " + textAlpha + ")";
    ctx.font = textSize + "px 'Zen Dots'";
    ctx.fillText(text, canv.width * 0.05, canv.height * 0.15);
    textAlpha -= (1.0 / textFadeTime / FPS);
  }
  //----DRAW THE LVL TEXT
  if (!ship.dead) {
    ctx.fillStyle = "rgba(28,197,220, 1)";
    ctx.font = textSize + "px 'Zen Dots'";
    ctx.fillText(textScore + score, canv.width * 0.05, canv.height * 0.85);
    textAlpha -= (1.0 / textFadeTime / FPS);
  }
  //----DRAW THE GAME OVER TEXT
  if (ship.dead) {
    ctx.fillStyle = "rgba(28,197,220, 1)";
    ctx.font = textSize + "px 'Zen Dots'";
    ctx.fillText(textGameOver, canv.width * 0.65, canv.height * 0.15);
    textAlpha -= (1.0 / textFadeTime / FPS);
  }

};
setInterval(update, 1000 / FPS);

const newLevel = () => {
  text = "LEVEL " + (level + 5);
  textAlpha = 1.0;
  createAsteroidBelt();
}

const newGame = () => {
  level = 0;
  score = 0;
  ship = createShip();
  newLevel();
};

newGame();
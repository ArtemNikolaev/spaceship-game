const SHOOTING_SPEED = 15;

function paintHeroShots(heroShots) {
  heroShots.forEach(shot => {
    shot.y -= SHOOTING_SPEED;
    drawTriangle(shot.x, shot.y, 5, '#ffff00', 'up');
  });
}

const { merge, filter, timestamp, sampleTime, combineLatest, distinctUntilKeyChanged } = rxjs;
const playerFiring = merge(
  fromEvent(canvas, 'click'),
  fromEvent(document, 'keydown')
    .pipe(filter(evt => evt.keyCode === 32)),
)
  .pipe(startWith({}))
  .pipe(sampleTime(200))
  .pipe(timestamp());

const HeroShots = combineLatest(
  playerFiring, SpaceShip,
  (shotEvents, spaceShip) => ({
    timestamp: shotEvents.timestamp,
    x: spaceShip.x
  })
)
  .pipe(distinctUntilKeyChanged('timestamp'))
  .pipe(scan((shotArray, shot) => {
    shotArray.push({
      x: shot.x,
      y: HERO_Y,
    });

    return shotArray;
  }, []));

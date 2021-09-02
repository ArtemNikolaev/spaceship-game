function renderScene({ stars, spaceship, enemies }) {
  paintStars(stars);
  paintSpaceShip(spaceship.x, spaceship.y);
  paintEnemies(enemies);
}

const { combineLatest, sampleTime } = rxjs;
const Game = combineLatest(StarStream$, SpaceShip, Enemies, (stars, spaceship, enemies) => ({stars, spaceship, enemies}))
  .pipe(sampleTime(SPEED));
Game.subscribe(renderScene);

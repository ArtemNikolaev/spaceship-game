function renderScene({ stars, spaceship, enemies }) {
  paintStars(stars);
  paintSpaceShip(spaceship.x, spaceship.y);
  paintEnemies(enemies);
}

const { combineLatest } = rxjs;
const Game = combineLatest(StarStream$, SpaceShip, Enemies, (stars, spaceship, enemies) => ({stars, spaceship, enemies}));
Game.subscribe(renderScene);

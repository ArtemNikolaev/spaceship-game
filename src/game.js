function renderScene({ stars, spaceship }) {
  paintStars(stars);
  paintSpaceShip(spaceship.x, spaceship.y)
}

const { combineLatest } = rxjs;
const Game = combineLatest(StarStream$, SpaceShip, (stars, spaceship) => ({stars, spaceship}));
Game.subscribe(renderScene);

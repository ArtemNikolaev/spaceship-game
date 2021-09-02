function renderScene({ stars, spaceship, enemies, heroShots }) {
  paintStars(stars);
  paintSpaceShip(spaceship.x, spaceship.y);
  paintEnemies(enemies);
  paintHeroShots(heroShots);
}

const Game = combineLatest(
  StarStream$, SpaceShip, Enemies, HeroShots,
  (stars, spaceship, enemies, heroShots) => ({stars, spaceship, enemies, heroShots})
)
  .pipe(sampleTime(SPEED));
Game.subscribe(renderScene);

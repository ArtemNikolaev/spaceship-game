const {fromEvent, startWith} = rxjs;

const HERO_Y = canvas.height - 30;
const mouseMove = fromEvent(canvas, 'mousemove');
const SpaceShip = mouseMove
  .pipe(map((event) => ({
    x: event.clientX,
    y: HERO_Y,
  })))
  .pipe(startWith({
    x: canvas.width / 2,
    y: HERO_Y,
  }));

const EMEMY_FREQ = 1500;
const {scan } = rxjs;
const Enemies = interval(EMEMY_FREQ)
  .pipe(scan(
    (enemyArray) => {
        const enemy = {
          x: parseInt(Math.random() * canvas.width, 10),
          y: -30,
        };
        enemyArray.push(enemy);

        return enemyArray;
    },
    []
  ));

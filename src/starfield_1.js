const SPEED = 40;
const STAR_NUMBER = window.innerHeight * window.innerWidth / 4000;
const { range, map, toArray, mergeMap, interval} = rxjs;

function paintStars(stars) {
  ctx.fillStyle = '#000000';
  ctx.fillRect(0,0, canvas.width, canvas.height);
  ctx.fillStyle = '#ffffff';
  stars.forEach(star => {
    ctx.fillRect(star.x, star.y, star.size, star.size);
  });
}

const StarStream$ = range(1, STAR_NUMBER)
  .pipe(map(()=> ({
    x: parseInt(Math.random() * canvas.width, 10),
    y: parseInt(Math.random() * canvas.height, 10),
    size: Math.random() * 3 + 1
  })))
  .pipe(toArray())
  .pipe(mergeMap(starArray => interval(SPEED).pipe(map(() => {
    starArray.forEach(star => {
      if (star.y >= canvas.height) {
        star.y = 0;
      }

      star.y += star.size;
    });

    return starArray;
  }))))
  .subscribe(paintStars);

//original imports
// import { fromEvent } from 'rxjs';
// import { map } from 'rxjs/operators';

//emit imports
import { fromEventEmit } from '../../rxjs-emit';
import { mapEmit } from '../../rxjs-emit/operators';

const canvas = document.getElementById('canvas');

// const stream$ = fromEvent(canvas, 'mousemove')
// .pipe(
//   map(e => {
//     return {x: e.offsetX, y: e.offsetY, ctx: e.target.getContext('2d')};
//   })
// );
// stream$.subscribe(coords => {
//   coords.ctx.fillRect(coords.x, coords.y, 2, 2);
// });

const stream2$ = fromEventEmit(canvas, 'mousemove')
.pipe(
  mapEmit(e => {
    return {x: e.offsetX, y: e.offsetY, ctx: e.target.getContext('2d')};
  })
);

stream2$.subscribe({
  next: coords => {
    console.log(coords);
  }
});
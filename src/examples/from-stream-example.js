//original imports
// import { from } from 'rxjs';
// import { scan } from 'rxjs/operators';

//emit imports
import { fromEmit } from '../../rxjs-emit';
import { scanEmit } from '../../rxjs-emit/operators';

// const arr$ = from([1, 2, 3, 4]).pipe(
//   scan((acc, v) => acc.concat(v), [])
// );

// arr$.subscribe(v => console.log(v));

const arr2$ = fromEmit([1, 2, 3, 4]).pipe(
  scanEmit((acc, v) => acc.concat(v), [])
);

arr2$.subscribe({
  next: v => console.log(v)
});
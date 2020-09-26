//original imports
//import { of } from 'rxjs';

//emit imports
import { ofEmit } from '../../rxjs-emit';
//const stream$ = of(1, 2, 3, 4);

// stream$.subscribe({
//     next: val => {
//       console.log(val);
//     }
//   });

const stream2$ = ofEmit(1, 2, 3, 4);

stream2$.subscribe({
  next: val => {
    console.log(val);
  }
});
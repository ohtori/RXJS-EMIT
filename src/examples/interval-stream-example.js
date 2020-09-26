//original imports
// import { interval, from } from 'rxjs';
// import { filter, map, take, scan, tap } from 'rxjs/operators';

//emit imports
import { intervalEmit } from '../../rxjs-emit';
import { filterEmit, takeEmit, tapEmit, mapEmit, scanEmit } from '../../rxjs-emit/operators';

const rxjsBtn = document.getElementById('rxjs');
const display = document.querySelector('.result');

const people = [
  {name: 'Vladilen', age: 25},
  {name: 'Elena', age: 17},
  {name: 'Ivan', age: 18},
  {name: 'Igor', age: 14},
  {name: 'Lisa', age: 32},
  {name: 'Irina', age: 23},
  {name: 'Oleg', age: 20}
];

// rxjsBtn.addEventListener('click', () => {
//   rxjsBtn.disabled = true;
//   interval(1000)
//     .pipe(
//       take(people.length),
//       tap(v => console.log(v)),
//       filter(v => people[v].age >= 18),
//       map(v => {
//         console.log(people[v].name);
//         return people[v].name;
//       }),
//       scan((acc, v) => acc.concat(v), [])
//     )
//     .subscribe({
//       next: res => {
//         display.textContent = res.join(' ');
//       },
//       complete: () => rxjsBtn.disabled = false
//     })
// });

rxjsBtn.addEventListener('click', () => {
  rxjsBtn.disabled = true;
  intervalEmit(1000)
  .pipe(
    takeEmit(people.length),
    tapEmit(v => console.log(v)),
    filterEmit(v => people[v].age >= 18),
    mapEmit(v => {
      return people[v].name;
    }),
    scanEmit((acc, v) => acc.concat(v), [])
  )
   
  .subscribe({
    next: res => {
      console.log(res);
      display.textContent = res.join(' ');
    },
    complete: () => rxjsBtn.disabled = false
  });
});
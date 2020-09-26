//original imports
// import { ajax } from 'rxjs/ajax';

//emit imports
import { ajaxEmit } from '../../rxjs-emit'

const getBtn = document.getElementById('get-btn');

// getBtn.addEventListener('click', () => {
//   ajax('https://api.github.com/search/users?q=ohtori')
//   .subscribe({
//     next: v => console.log(v)
//   });
// });

getBtn.addEventListener('click', () => {
  ajaxEmit('https://api.github.com/search/users?q=ohtori')
  .subscribe({
    next: v => console.log(v)
  });
});
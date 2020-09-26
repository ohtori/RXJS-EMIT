export function tapEmit(cb) {
  return function(value) {
    cb(value);
    return value;
  } 
}
export function filterEmit(cb) {
  return function(value) {
    if (cb(value)) {
      return value
    } 
  }
}
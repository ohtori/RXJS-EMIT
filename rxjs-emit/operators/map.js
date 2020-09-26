export function mapEmit(cb) {
  return function(value) {
      return cb(value);
  }
} 
export function scanEmit(cb, accumulator) {
  return function(value, obj) {
    if (!obj.scanAcc) {
      obj.scanAcc = accumulator;
    }
    obj.scanAcc = cb(obj.scanAcc, value)
    return obj.scanAcc;
  }
}
export function takeEmit(num) {
  return function(result, obj) {
    obj.takeCount = num;
    return result;
  }
}
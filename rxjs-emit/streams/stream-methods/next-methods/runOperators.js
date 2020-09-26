export function runOperators(value, fns, obj) {
  let result = value;
  
  fns ? fns.every(f => {
    result = f(result, obj);
    return result === undefined ? false : true;
  }) : undefined;
  obj.result = result;
}
export function pipe(...fns) {
  this.pipeFunctions = fns;
  return this;
}
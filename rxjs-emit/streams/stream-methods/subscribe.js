export function subscribe (observer) {
  this.observer = observer;
  this.streamType === 'intervalEmit' ?
    setTimeout(() => this.next(), this.time || 0) :
    this.next();
}
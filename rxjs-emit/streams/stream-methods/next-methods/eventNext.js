import { runOperators } from './runOperators';

export function  eventNext() {
  this.elem.addEventListener(this.eventName, e => {
    runOperators(e, this.pipeFunctions, this);
    (this.result !== undefined && this.observer.next) ?
      this.observer.next(this.result) :
      (this.observer.complete) ?
        this.observer.complete() :
        undefined;
  });
}
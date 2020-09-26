import { runOperators } from './runOperators';

export function  simpleNext() {
  runOperators(this.streamValues[this.counter], this.pipeFunctions, this);
  this.counter++;
  
  (this.result !== undefined && this.observer.next) ?
    this.observer.next(this.result) :
    undefined;
  
  (this.counter < this.takeCount) ?
    this.next() :
    (this.observer.complete) ?
      this.observer.complete() :
      undefined;
}
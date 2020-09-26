import { runOperators } from './runOperators';

export function intervalNext() {
  runOperators(this.counter, this.pipeFunctions, this);
  this.counter++;
  
  (this.result !== undefined && this.observer.next) ? 
    this.observer.next(this.result) :
    undefined;
  
  (this.counter < this.takeCount) ?
    setTimeout(() => this.next(), this.time) :
    (this.observer.complete) ? 
      this.observer.complete() :
      undefined;
}
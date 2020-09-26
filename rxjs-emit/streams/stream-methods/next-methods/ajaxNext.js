import { runOperators } from './runOperators';

export async function ajaxNext() {
  const response = await fetch(this.url);
  
  runOperators(response, this.pipeFunctions, this);

  (this.result !== undefined && this.observer.next) ?
    this.observer.next(this.result) :
    (this.observer.complete) ?
      this.observer.complete() :
      undefined;
}
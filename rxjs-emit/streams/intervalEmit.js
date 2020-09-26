import { intervalNext } from './stream-methods/next-methods/intervalNext';
import { pipe } from './stream-methods/pipe';
import { subscribe } from './stream-methods/subscribe';

export function intervalEmit(time) {
  const intervalStream = {
    streamType: intervalEmit.name,
    takeCount: Infinity,
    time,
    counter: 0,
    result: undefined,
    observer: undefined,
    pipeFunctions: undefined,
    subscribe,
    pipe,
    next: intervalNext
  };
  return intervalStream;
}
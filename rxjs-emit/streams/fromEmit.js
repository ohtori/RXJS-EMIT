import { simpleNext } from './stream-methods/next-methods/simpleNext';
import { pipe } from './stream-methods/pipe';
import { subscribe } from './stream-methods/subscribe';

export function fromEmit(...args) {
  const fromStream = {
    takeCount: args[0].length,
    counter: 0,
    streamValues: args[0],
    result: undefined,
    observer: undefined,
    pipeFunctions: undefined,
    subscribe,
    pipe,
    next: simpleNext
  };
  return fromStream;
}
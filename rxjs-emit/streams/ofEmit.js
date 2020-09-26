import { simpleNext } from './stream-methods/next-methods/simpleNext';
import { pipe } from './stream-methods/pipe';
import { subscribe } from './stream-methods/subscribe';

export function ofEmit(...args) {
  const ofStream = {
    takeCount: args.length,
    counter: 0,
    streamValues: args,
    result: undefined,
    observer: undefined,
    pipeFunctions: undefined,
    subscribe,
    pipe,
    next: simpleNext
  };
  return ofStream;
}
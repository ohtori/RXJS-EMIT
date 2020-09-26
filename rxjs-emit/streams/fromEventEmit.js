import { eventNext } from './stream-methods/next-methods/eventNext';
import { pipe } from './stream-methods/pipe';
import { subscribe } from './stream-methods/subscribe';

export function fromEventEmit(elem, eventName) {
  const fromEventStream = {
    elem,
    eventName,
    result: undefined,
    observer: undefined,
    pipeFunctions: undefined,
    subscribe,
    pipe,
    next: eventNext
  };
  return fromEventStream;
}
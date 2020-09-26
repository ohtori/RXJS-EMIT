import { ajaxNext } from './stream-methods/next-methods/ajaxNext';
import { pipe } from './stream-methods/pipe';
import { subscribe } from './stream-methods/subscribe';

export function ajaxEmit(url) {
  const ofStream = {
    url,
    result: undefined,
    observer: undefined,
    pipeFunctions: undefined,
    subscribe,
    pipe,
    next: ajaxNext
  };
  return ofStream;
}
import { LineError } from "./ShortScript/helpers/LineError";

export const debounce = (callback: (...a: any[]) => any, wait: number) => {
  let timeoutId: number = -1;
  return (...args: any[]) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(...args);
    }, wait);
  };
};

export const sortErrors = (errors: LineError[]) =>
  errors.sort((a, b) =>
    a.line !== b.line ? a.line - b.line : a.column - b.column
  );

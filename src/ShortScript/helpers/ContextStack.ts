import { Context, ContextType } from "./Context";

export class ContextStack {
  private readonly stack: Context[] = [];
  public get top() {
    return this.stack[this.stack.length - 1];
  }

  public get global() {
    return this.stack[0];
  }

  constructor() {
    this.stack.push(new Context());
  }

  public pushContext(type: ContextType): Context {
    const c = new Context(type, this.top);

    this.stack.push(c);

    return c;
  }

  public popContext(): Context {
    const c = this.top;

    if (c.isGlobal) {
      return c;
    }

    return this.stack.pop() as Context;
  }

  public has(identifier: string): boolean {
    let currContext: Context | null = this.top;

    while (currContext !== null) {
      if (currContext.entities.hasOwnProperty(identifier)) {
        return true;
      }

      currContext = currContext.parent;
    }

    return false;
  }

  public get(identifier: string): any | null {
    let currContext: Context | null = this.top;

    while (currContext !== null) {
      if (currContext.entities.hasOwnProperty(identifier)) {
        return currContext.entities[identifier];
      }

      currContext = currContext.parent;
    }

    return null;
  }

  public set(identifier: string, value: any, bubble: boolean = true): any {
    let currContext: Context | null = this.top;

    while (currContext !== null) {
      if (currContext.entities.hasOwnProperty(identifier)) {
        currContext.entities[identifier] = value;
        return;
      }

      if (!bubble) {
        break;
      }

      currContext = currContext.parent;
    }

    this.top.entities[identifier] = value;

    return value;
  }
}

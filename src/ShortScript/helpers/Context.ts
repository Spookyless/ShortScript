export enum ContextType {
  GLOBAL,
  BLOCK,
  FUNCTION,
  LOOP,
  CLASS,
}

export type EntityDict = Record<string, any>;

export class Context {
  public readonly type: ContextType;
  public readonly parent: Context | null;
  public get isGlobal() {
    return this.parent === null;
  }
  public readonly entities: EntityDict = {};

  constructor(
    type: ContextType = ContextType.GLOBAL,
    context: Context | null = null
  ) {
    this.type = type;
    this.parent = context;
  }
}

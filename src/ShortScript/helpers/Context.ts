import {ClassInstance} from "./VariableTypes";

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
    parent: Context | null = null
  ) {
    this.type = type;
    this.parent = parent;
  }
}

export class ClassContext extends Context {
  public readonly classInstance: ClassInstance;

  constructor(classInstance: ClassInstance, parent: Context) {
    super(ContextType.CLASS, parent);
    this.classInstance = classInstance;
  }
}

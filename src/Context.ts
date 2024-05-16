import { BuiltInType } from "./BuiltInType";
import { Entity, EntityType } from "./Entity";
import { Variable } from "./Variable";

export enum ContextType {
	GLOBAL,
	BLOCK,
	FUNCTION,
	LOOP,
	CLASS,
}

type Dictionary<K extends keyof any, V> = {
	[key in K]: V;
} & Object;

export type EntityDict = Dictionary<string, Entity>;

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

	public getEntity(name: string): Entity | null {
		let currContext: Context | null = this;

		while (currContext !== null) {
			if (this.entities.hasOwnProperty(name)) {
				return this.entities[name];
			}

			currContext = currContext.parent;
		}

		return null;
	}

	public createVariable(name: string, type: EntityType) {
		this.entities[name] = new Variable(name, type);
	}

	public assignEntity(name: string, value: any) {
		const e = this.entities[name];

		if (e instanceof Variable) {
			e.value = value;
		}
	}
}

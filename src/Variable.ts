import { BuiltInType } from "./BuiltInType";
import { Entity, EntityType } from "./Entity";

export class Variable implements Entity {
	public readonly type: EntityType;
	public value: any;

	constructor(type: EntityType, value?: any) {
		this.type = type;

		this.assignValue(value);
	}

	public assignValue(value: any) {
		if (value === undefined) {
			return this.assignDefaultValue();
		}

		// TODO: Check value type checking
		this.value = value;
	}

	private assignDefaultValue() {
		if (this.type === BuiltInType.BOOLEAN) {
			return void (this.value = false);
		}

		if (this.type === BuiltInType.NUMBER) {
			return void (this.value = 0);
		}

		if (this.type === BuiltInType.STRING) {
			return void (this.value = "");
		}

		if (this.type === BuiltInType.VOID) {
			throw new Error("Variable cannot have a type of 'v'");
		}

		// TODO: Arrays
		// TODO: Dictionaries
		// TODO: Objects (any non-reseved identifier as type)
		this.value = null;
	}
}

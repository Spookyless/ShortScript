import { Entity } from "./Entity";

export class EntityStack {
	private readonly stack: Entity[] = [];

	public push(entity: Entity) {
		this.stack.push(entity);
	}

	public pop(): Entity {
		const entity = this.stack.pop();

		if (!entity) {
			throw new Error("There's no entity to pop");
		}

		return entity;
	}

	public get isEmpty() {
		return this.stack.length === 0;
	}
}

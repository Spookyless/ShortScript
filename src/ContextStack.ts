import { Context, ContextType } from "./Context";
import { Entity } from "./Entity";

export class ContextStack {
	private readonly stack: Context[] = [];
	private get top() {
		return this.stack[this.stack.length - 1];
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

		return <Context>this.stack.pop();
	}

	public getEntity(name: string): Entity | null {
		return this.top.getEntity(name);
	}

	public createVariable(name: string) {
		this.top.assignEntity;
	}
}

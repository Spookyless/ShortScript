import {
	AdditiveExpressionContext,
	AssignmentExpressionContext,
	ClassDefinitionContext,
	ClassExpressionContext,
	ConstructorDefinitionContext,
	ExpressionContext,
	FunctionDefinitionContext,
	IdentifierCallExpressionContext, IdentifierDotExpressionContext,
	IdentifierExpressionContext,
	LiteralContext,
	LoopStatementContext, MethodBodyElementContext,
	MethodDefinitionContext,
	MultiplicativeExpressionContext,
	PowerExpressionContext,
	RelationalExpressionContext,
	ReturnExpressionContext,
	SourceElementContext, SuperDotExpressionContext, ThisExpressionContext,
	VariableDefinitionContext,
	VariableDefinitionExpressionContext,
	VariableDefinitionWithAssignmentExpressionContext,
} from "antlr/ShortScriptParser";
import {TerminalNode} from "antlr4ts/tree/TerminalNode";
import {ShortScriptVisitor} from "antlr/ShortScriptVisitor";
import {ErrorNode} from "antlr4ts/tree/ErrorNode";
import {RuleNode} from "antlr4ts/tree/RuleNode";
import {ParseTree} from "antlr4ts/tree/ParseTree";
import {AbstractParseTreeVisitor} from "antlr4ts/tree/AbstractParseTreeVisitor";
import {LineError} from "./LineError";
import ReturnExpression from "./ReturnExpression";



class FunctionValue {
	returnType: string;
	args: string[][];
	body: SourceElementContext[];

	constructor(returnType: string, args: string[][], body: SourceElementContext[]) {
		this.returnType = returnType;
		this.args = args;
		this.body = body;
	}
}

class Method {
	returnType: string;
	args: string[][];
	body: MethodBodyElementContext[];

	constructor(returnType: string, args: string[][], body: MethodBodyElementContext[]) {
		this.returnType = returnType;
		this.args = args;
		this.body = body;
	}
}

class Class {
	name: string;
	superclass?: Class;
	_constructor?: Method;
	fields: { [key: string]: any } = {};
	methods: { [key: string]: Method } = {};

	constructor(name: string) {
		this.name = name;
	}
}

export class ShortScriptVisitorFull
	extends AbstractParseTreeVisitor<any>
	implements ShortScriptVisitor<any> {

	private variables: { [key: string]: any } = {};

	visitPowerExpression: (ctx: PowerExpressionContext) => any = (ctx) => {
		return this.visit(ctx._left) ** this.visit(ctx._right);
	};

	visitMultiplicativeExpression: (ctx: MultiplicativeExpressionContext) => any =
		(ctx) => {
			const left = this.visit(ctx._left);
			const right = this.visit(ctx._right);

			if (ctx.Divide()) {
				return left / right;
			}

			if (ctx.Modulus()) {
				return left % right;
			}

			if (ctx.Multiply()) {
				return left * right;
			}
		};

	visitAdditiveExpression: (ctx: AdditiveExpressionContext) => any = (ctx) => {
		const left = this.visit(ctx._left);
		const right = this.visit(ctx._right);

		if (ctx.Plus()) {
			return left + right;
		}

		if (ctx.Minus()) {
			return left - right;
		}
	};

	visitRelationalExpression: (ctx: RelationalExpressionContext) => any = ctx =>{
		const left = this.visit(ctx._left)
		const right = this.visit(ctx._right)
		const operator = ctx._op;

		// TODO Zrobić to w eleganstszy sposób
		if(operator.text === "<"){
			return left < right
		}
		else if(operator.text === "<="){
			return left <= right
		}
		else if(operator.text === ">"){
			return left > right
		}
		else if(operator.text === ">="){
			return left >= right
		}
		else {
			throw new LineError(ctx, "Bad operator");
		}
	};

	visitLiteral: (ctx: LiteralContext) => any = (ctx) => {
		let node: TerminalNode | undefined;

		if ((node = ctx.IntegerLiteral())) {
			return parseInt(node.text);
		}

		if ((node = ctx.FloatLiteral())) {
			return parseFloat(node.text);
		}

		if ((node = ctx.BooleanLiteral())) {
			return node.text === "true";
		}

		if ((node = ctx.NullLiteral())) {
			return null;
		}

		if ((node = ctx.StringLiteral())) {
			return node.text.slice(1, -1); // remove the quotes
		}
	};

	visitVariableDefinitionWithAssignmentExpression: (ctx: VariableDefinitionWithAssignmentExpressionContext) => any = (ctx) => {
		const identifier = ctx.variableDefinition().Identifier().text;
		const value = this.visit(ctx.expression());
		this.variables[identifier] = value;
		return value;
	};

	visitAssignmentExpression: (ctx: AssignmentExpressionContext) => any = (ctx) => {
		const identifier = ctx.Identifier().text;
		const assignment = ctx.assignment();
		const value = this.visit(ctx.expression());

		if(assignment.Assign()){
			this.variables[identifier] = value;
		}
		else if(assignment.MultiplyAssign()){
			this.variables[identifier] *= value
		}
		else if(assignment.DivideAssign()){
			this.variables[identifier] /= value
		}
		else if(assignment.ModulusAssign()){
			this.variables[identifier] %= value
		}
		else if(assignment.PlusAssign()){
			this.variables[identifier] += value
		}
		else if(assignment.MinusAssign()){
			this.variables[identifier] -= value
		}


		return this.variables[identifier];
	};

	visitIdentifierExpression: (ctx: IdentifierExpressionContext) => any = (ctx) => {
		const identifier = ctx.Identifier().text;
		if (this.variables.hasOwnProperty(identifier)) {
			return this.variables[identifier];
		} else {
			throw new LineError(ctx, `Variable ${identifier} is not defined`);
		}
	};

	visitVariableDefinitionExpression: (ctx: VariableDefinitionExpressionContext) => any = (ctx) => {
		const identifier = ctx.variableDefinition().Identifier().text;
		if (!this.variables.hasOwnProperty(identifier)) {
			this.variables[identifier] = undefined;
		}
		return this.variables[identifier];
	};

	visit(tree: ParseTree): any {
		return tree.accept(this);
	}

	visitChildren(node: RuleNode) {
		let result = null;
		const n = node.childCount;
		for (let i = 0; i < n; i++) {
			if (!this.shouldVisitNextChild(node, result)) {
				break;
			}
			const c = node.getChild(i);
			const childResult: any = c.accept(this);
			result = this.aggregateResult(result, childResult);
		}
		return result;
	}

	visitFunctionDefinition(ctx: FunctionDefinitionContext): any {
		const returnType = ctx.type().text;
		const identifier = ctx.Identifier().text;
		const functionBody = ctx.sourceElement();

		const functionArgs = ctx.variableDefinition();
		let args: string[][] = [];

		if (functionArgs) {
			args = functionArgs.map((arg: VariableDefinitionContext) => [arg.type().text, arg.Identifier().text]);
		}
		this.variables[identifier] = new FunctionValue(
			returnType,
			args,
			functionBody,
		);

		return null;
	}

	visitIdentifierCallExpression(ctx: IdentifierCallExpressionContext): any {
		// TODO Sprawdzanie zwracanych typów

		// TODO po lewej może być expression
		// 		const a = () => {}
		// 		const b = () => a
		// 		b()()

		const identifier = ctx.Identifier().text;
		const args = ctx.expression() ? ctx.expression().map((exp: ExpressionContext) => this.visit(exp)) : [];

		if (!this.variables.hasOwnProperty(identifier)) {
			throw new LineError(ctx, `Function ${identifier} is not defined`);
		}

		if (this.variables[identifier] instanceof FunctionValue) {
			return this.callFunction(this.variables[identifier], args);
		} else if (this.variables[identifier] instanceof Class) {
			const classObj = this.variables[identifier] as Class;
			if (classObj._constructor) {
				return this.callFunction(classObj._constructor, args);
			}
		}
	}

	callFunction(functionObj: FunctionValue | Method, args: any[]) {
		const tempVars = functionObj.args.map(el => [el[1], this.variables[el[1]]])

		functionObj.args.forEach((el, key) =>{
			this.variables[el[1]] = args[key]
		})

		let whatToReturn = null

		for (const el of functionObj.body) {
			let aa = this.visit(el)

			if(aa instanceof ReturnExpression){
				if(aa.value)
					whatToReturn = this.visit(aa.value)
				break;
			}
		}

		tempVars.forEach(el => {
			this.variables[el[0]] = el[1]
		})

		return whatToReturn;
	}

	visitReturnExpression: (ctx: ReturnExpressionContext) => any = ctx =>{
		return new ReturnExpression(ctx.expression());
	}

	visitLoopStatement: (ctx: LoopStatementContext) => any = ctx => {
		const head = ctx.loopHead()
		const body = ctx.loopBody()
		const body_statements = body.sourceElement();

		let loopHead;

		if((loopHead = head.nLoopHead())){
			throw new LineError(ctx, 'Not implemented');
		}
		else if((loopHead = head.forLoopHead())){
			const forVar = loopHead.variableDefinition().Identifier().text;
			const leftExpr = this.visit(loopHead._left);
			const rightExpr = this.visit(loopHead._right);

			if (typeof leftExpr !== 'number') {
				throw new LineError(ctx, 'Left expression must be a number');
			}

			if (typeof rightExpr !== 'number') {
				throw new LineError(ctx, 'Right expression must be a number');
			}

			const endOfLoop = loopHead.Range() ? rightExpr : rightExpr + 1

			this.variables[forVar] = leftExpr

			while (this.variables[forVar] < endOfLoop) {
				for (const statement of body_statements) {
					this.visit(statement)
				}

				this.variables[forVar]++;
			}
		}
		else if((loopHead = head.whileLoopHead())){
			let expr = this.visit(loopHead.expression())


			while(expr){
				for (const statement of body_statements) {
					this.visit(statement)
				}

				expr = this.visit(loopHead.expression())
			}
		}
	};

	visitClassDefinition(ctx: ClassDefinitionContext): any {
		const className = ctx.Identifier()[0].text;

		// Create a new class object
		this.variables[className] = new Class(className);

		// Check if the class has a superclass
		if (ctx.InheritArrow()) {
			const superclassName = ctx.Identifier()[1].text;
			if (!this.variables.hasOwnProperty(superclassName)) {
				throw new LineError(ctx, `Superclass ${superclassName} is not defined`);
			}
			this.variables[className].superclass = this.variables[superclassName];
		}

		const constructor = ctx.constructorDefinition()
		if (constructor) {
			(this.variables[className] as Class)._constructor = new Method(
				className,
				constructor.variableDefinition().map(arg => [arg.type().text, arg.Identifier().text]),
				constructor.methodBodyElement()
			);
		}

		for (const field of ctx.variableDefinitionInitialization()) {
			const fieldName = field.variableDefinition().Identifier().text;
			if (field.assignment()) {
				this.variables[className].fields[fieldName] = this.visit(field.expression()!)
			} else {
				this.variables[className].fields[fieldName] = null;
			}
		}

		for (const method of ctx.methodDefinition()) {
			const methodName = method.Identifier().text;

			this.variables[className].methods[methodName] = new Method(
				method.type().text,
				method.variableDefinition().map(arg => [arg.type().text, arg.Identifier().text]),
				method.methodBodyElement()
			);
		}

		return null;
	}

	visitIdentifierDotExpression(ctx: IdentifierDotExpressionContext): any {
		const classObj = this.visit(ctx.expression());

		if (!(classObj instanceof Class)) {
			throw new LineError(ctx, "Expression is not a class");
		}

		const memberOrMethodName = ctx.Identifier().text;

		if (!classObj.fields.hasOwnProperty(memberOrMethodName) && !classObj.methods.hasOwnProperty(memberOrMethodName)) {
			throw new LineError(ctx, `Member or method ${memberOrMethodName} does not exist in class`);
		}
		if (ctx.arguments()) {
			const method = classObj.methods[memberOrMethodName];

			if (!method) {
				throw new LineError(ctx, `${memberOrMethodName} is not a method of class`);
			}

			const args = ctx.arguments()!.expression().map((argCtx) => this.visit(argCtx));

			return this.callFunction(method, args);
		}

		return classObj.fields[memberOrMethodName];
	}

	visitThisExpression(ctx: ThisExpressionContext): any {
		// TODO requires context to access current class
	}

	visitSuperDotExpression(ctx: SuperDotExpressionContext): any {
		// TODO requires context to access current class
	}

	visitTerminal(node: TerminalNode) {
		return node.text;
	}

	visitErrorNode(node: ErrorNode) {
		return node.text;
	}

	aggregateResult(aggregate: any, nextResult: any) {
		return nextResult;
	}

	shouldVisitNextChild(node: RuleNode, currentResult: any) {
		return true;
	}

	defaultResult() {
		return null;
	}
}

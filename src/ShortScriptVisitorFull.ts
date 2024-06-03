import {
	AdditiveExpressionContext,
	AssignmentExpressionContext,
	ClassDefinitionContext,
	ClassExpressionContext,
	ConstructorDefinitionContext,
	ExpressionContext,
	FunctionDefinitionContext,
	IdentifierCallExpressionContext,
	IdentifierExpressionContext,
	LiteralContext,
	LoopStatementContext,
	MethodDefinitionContext,
	MultiplicativeExpressionContext,
	PowerExpressionContext,
	RelationalExpressionContext,
	ReturnExpressionContext,
	SourceElementContext,
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

type FunctionValue = {
	returnType:string,
	args: string[][],
	body: SourceElementContext[],
}

type Class = {
	name: string,
	superclass?: Class,
	constructor?: FunctionValue,
	fields: { [key: string]: any },
	methods: { [key: string]: FunctionValue }
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
		this.variables[identifier] = {
			returnType,
			args,
			body: functionBody,		
		};		
		
		return null;
	}	

	visitIdentifierCallExpression(ctx: IdentifierCallExpressionContext): any {
		// TODO Sprawdzanie zwracanych typów
		const identifier = ctx.Identifier().text;
		const args = ctx.expression() ? ctx.expression().map((exp: ExpressionContext) => this.visit(exp)) : [];

		console.log(args)
		
		if (this.variables.hasOwnProperty(identifier)) { // TODO: check if this.variables[identifier] is a function			
			const funcVar = this.variables[identifier] as FunctionValue			
			const tempVars = funcVar.args.map(el => [el[1], this.variables[el[1]]])

			funcVar.args.forEach((el, key) =>{
				this.variables[el[1]] = args[key]
			})			
			
			let whatToReturn = null

			for (const el of funcVar.body) {
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
		} else {
			throw new LineError(ctx, `Function ${identifier} is not defined`);
		}
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
		this.variables[className] = {
			name: className,
			fields: {},
			methods: {}
		};

		// Check if the class has a superclass
		if (ctx.InheritArrow()) {
			const superclassName = ctx.Identifier()[1].text;
			if (!this.variables.hasOwnProperty(superclassName)) {
				throw new LineError(ctx, `Superclass ${superclassName} is not defined`);
			}
			this.variables[className].superclass = this.variables[superclassName];
		}

		// Visit each class member
		// if (ctx.children) {
		// 	for (const member of ctx.children.slice(3, -1)) {
		// 		this.visit(member);
		// 	}
		// }

		return null;
	}

	// visitConstructorDefinition(ctx: ConstructorDefinitionContext): any {
	// 	const className = ctx.Identifier()[0].text;
	//
	// 	if (!this.variables.hasOwnProperty(className)) {
	// 		throw new LineError(ctx, `Class ${className} is not defined`);
	// 	}
	//
	// 	(this.variables[className] as Class).constructor = {
	// 		returnType: className,
	// 		args: ctx.variableDefinition().map((arg: VariableDefinitionContext) => [arg.type().text, arg.Identifier().text]),
	// 		body: ctx.classExpression().map((exprCtx) => this.visit(exprCtx)),
	// 	};
	//
	// 	return null;
	// }
	//
	// visitMethodDefinition(ctx: MethodDefinitionContext): any {
	// 	if (!this.currentClass) {
	// 		throw new Error("Method definition outside of class definition");
	// 	}
	//
	// 	const methodName = ctx.Identifier().text;
	//
	// 	this.currentClass.methods[methodName] = {
	// 		returnType: ctx.type().text,
	// 		args: ctx.variableDefinition().map((arg: VariableDefinitionContext) => [arg.type().text, arg.Identifier().text]),
	// 		body: ctx.classExpression().map((exprCtx) => this.visit(exprCtx))
	// 	};
	//
	// 	return null;
	// }

	visitClassExpression(ctx: ClassExpressionContext): any {
		// TODO: Implement class expression handling
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

import {
	AdditiveExpressionContext,
	AssignmentExpressionContext,
	IdentifierExpressionContext,
	LiteralContext,
	MultiplicativeExpressionContext,
	PowerExpressionContext,
	VariableDefinitionWithAssignmentExpressionContext,
	VariableDefinitionExpressionContext,
	FunctionDefinitionContext,
	VariableDefinitionContext,
	ExpressionContext,
	IdentifierCallExpressionContext,
} from "antlr/ShortScriptParser";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ShortScriptVisitor } from "antlr/ShortScriptVisitor";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { LineError } from "./LineError";

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
		const value = this.visit(ctx.expression());
		this.variables[identifier] = value;
		return value;
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
		const functionBody = ctx.sourceElement();		// Is this correct

		const functionArgs = ctx.variableDefinition();
		let args: string[] = [];
		if (functionArgs) {
			args = functionArgs.map((arg: VariableDefinitionContext) => arg.Identifier().text);
		}

		// To be changed
		this.variables[identifier] = {
			returnType,
			args,
			body: functionBody
		};

		return null;
	}

	visitIdentifierCallExpression(ctx: IdentifierCallExpressionContext): any {
		const identifier = ctx.Identifier().text;
		const args = ctx.expression() ? ctx.expression().map((exp: ExpressionContext) => this.visit(exp)) : [];

		if (this.variables.hasOwnProperty(identifier)) {
			return this.variables[identifier](...args);		// Has to use body of the function
		} else {
			throw new LineError(ctx, `Function ${identifier} is not defined`);
		}
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

import {
  AdditiveExpressionContext,
  AssignmentExpressionContext,
  ClassDefinitionContext,
  ExpressionContext,
  FunctionDefinitionContext,
  IdentifierCallExpressionContext,
  IdentifierDotExpressionContext,
  IdentifierExpressionContext,
  LiteralContext,
  LoopStatementContext,
  MethodBodyElementContext,
  MultiplicativeExpressionContext,
  PowerExpressionContext,
  RelationalExpressionContext,
  ReturnExpressionContext,
  SourceElementContext,
  SuperDotExpressionContext,
  ThisExpressionContext,
  VariableDefinitionContext,
  VariableDefinitionExpressionContext,
  VariableDefinitionWithAssignmentExpressionContext,
  ConditionalContext,
  IfConditionalContext,
  EifConditionalContext,
  EqualityExpressionContext,
  BreakStatementContext,
  ContinueStatementContext,
  PrintExpressionContext,
  GroupExpressionContext,
} from "./antlr/ShortScriptParser";

import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ShortScriptVisitor } from "./antlr/ShortScriptVisitor";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { LineError } from "./helpers/LineError";
import BreakException from "./Exceptions/BreakException";
import ContinueException from "./Exceptions/ContinueException";
import ReturnException from "./Exceptions/ReturnException";
import { ContextStack } from "./helpers/ContextStack";
import { ContextType } from "./helpers/Context";
import { ParserRuleContext } from "antlr4ts";

class FunctionValue {
  returnType: string;
  args: string[][];
  body: SourceElementContext[];

  constructor(
    returnType: string,
    args: string[][],
    body: SourceElementContext[]
  ) {
    this.returnType = returnType;
    this.args = args;
    this.body = body;
  }
}

const contextStack = new ContextStack();

class Method {
  returnType: string;
  args: string[][];
  body: MethodBodyElementContext[];

  constructor(
    returnType: string,
    args: string[][],
    body: MethodBodyElementContext[]
  ) {
    this.returnType = returnType;
    this.args = args;
    this.body = body;
  }
}

class Class {
  name: string;
  superclass?: Class;
  _constructor?: Method;
  fields: Record<string, any> = {};
  methods: Record<string, Method> = {};

  constructor(name: string) {
    this.name = name;
  }
}

export class ShortScriptVisitorFull
  extends AbstractParseTreeVisitor<any>
  implements ShortScriptVisitor<any>
{
  messages: (string | LineError)[] = [];

  constructor(messages: (string | LineError)[]) {
    super();

    this.messages = messages;
  }

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

  visitRelationalExpression: (ctx: RelationalExpressionContext) => any = (
    ctx
  ) => {
    const left = this.visit(ctx._left);
    const right = this.visit(ctx._right);
    const operator = ctx._op;

    // TODO Zrobić to w eleganstszy sposób
    if (operator.text === "<") {
      return left < right;
    } else if (operator.text === "<=") {
      return left <= right;
    } else if (operator.text === ">") {
      return left > right;
    } else if (operator.text === ">=") {
      return left >= right;
    } else {
      this.throwLineError(ctx, `Bad operator "${operator.text}"`);
    }
  };

  visitEqualityExpression: (ctx: EqualityExpressionContext) => any = (ctx) => {
    const left = this.visit(ctx._left);
    const right = this.visit(ctx._right);
    const operator = ctx._op;

    if (operator.text === "==") {
      // eslint-disable-next-line eqeqeq
      return left == right;
    } else if (operator.text === "!=") {
      // eslint-disable-next-line eqeqeq
      return left != right;
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

  visitVariableDefinitionWithAssignmentExpression: (
    ctx: VariableDefinitionWithAssignmentExpressionContext
  ) => any = (ctx) => {
    const identifier = ctx.variableDefinition().Identifier().text;
    const value = this.visit(ctx.expression());

    contextStack.set(identifier, value, false);

    return value;
  };

  visitAssignmentExpression: (ctx: AssignmentExpressionContext) => any = (
    ctx
  ) => {
    const identifier = ctx.Identifier().text;
    const assignment = ctx.assignment();
    const value = this.visit(ctx.expression());

    if (assignment.Assign()) {
      contextStack.set(identifier, value);
    } else if (assignment.MultiplyAssign()) {
      contextStack.set(identifier, contextStack.get(identifier) * value);
    } else if (assignment.DivideAssign()) {
      contextStack.set(identifier, contextStack.get(identifier) / value);
    } else if (assignment.ModulusAssign()) {
      contextStack.set(identifier, contextStack.get(identifier) % value);
    } else if (assignment.PlusAssign()) {
      contextStack.set(identifier, contextStack.get(identifier) + value);
    } else if (assignment.MinusAssign()) {
      contextStack.set(identifier, contextStack.get(identifier) - value);
    }

    return contextStack.get(identifier);
  };

  visitIdentifierExpression: (ctx: IdentifierExpressionContext) => any = (
    ctx
  ) => {
    const identifier = ctx.Identifier().text;

    if (contextStack.has(identifier)) {
      return contextStack.get(identifier);
    } else {
      this.throwLineError(ctx, `Variable "${identifier}" is not defined`);
    }
  };

  visitVariableDefinitionExpression: (
    ctx: VariableDefinitionExpressionContext
  ) => any = (ctx) => {
    const identifier = ctx.variableDefinition().Identifier().text;

    if (!contextStack.has(identifier)) {
      contextStack.set(identifier, undefined, false);
    }

    return contextStack.get(identifier);
  };

  visitFunctionDefinition(ctx: FunctionDefinitionContext): any {
    const returnType = ctx.type().text;
    const identifier = ctx.Identifier().text;
    const functionBody = ctx.sourceElement();

    const functionArgs = ctx.variableDefinition();
    let args: string[][] = [];

    if (functionArgs) {
      args = functionArgs.map((arg: VariableDefinitionContext) => [
        arg.type().text,
        arg.Identifier().text,
      ]);
    }

    contextStack.set(
      identifier,
      new FunctionValue(returnType, args, functionBody)
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
    const args = ctx.expression()
      ? ctx.expression().map((exp: ExpressionContext) => this.visit(exp))
      : [];

    const entity = contextStack.get(identifier);

    if (!entity) {
      this.throwLineError(ctx, `Function ${identifier} is not defined`);
    }

    if (entity instanceof FunctionValue) {
      return this.callFunction(entity, args);
    } else if (entity instanceof Class) {
      const classObj = entity as Class;
      if (classObj._constructor) {
        return this.callFunction(classObj._constructor, args);
      }
    }
  }

  callFunction(functionObj: FunctionValue | Method, args: any[]) {
    contextStack.pushContext(ContextType.FUNCTION);

    functionObj.args.forEach((el, key) => {
      contextStack.set(el[1], args[key], false);
    });

    let whatToReturn = null;

    for (const el of functionObj.body) {
      try {
        this.visit(el);
      } catch (e) {
        if (e instanceof ReturnException) {
          if (e.value !== undefined) whatToReturn = e.value;
          break;
        } else {
          throw e;
        }
      }
    }

    contextStack.popContext();

    return whatToReturn;
  }

  visitReturnExpression: (ctx: ReturnExpressionContext) => any = (ctx) => {
    const expression = ctx.expression();
    if (expression !== undefined)
      throw new ReturnException(this.visit(expression));
    else {
      throw new ReturnException(undefined);
    }
  };

  visitLoopStatement: (ctx: LoopStatementContext) => any = (ctx) => {
    const head = ctx.loopHead();
    const body = ctx.loopBody();
    const body_statements = body.sourceElement();

    let loopHead;

    contextStack.pushContext(ContextType.LOOP);

    if ((loopHead = head.nLoopHead())) {
      const expr = this.visit(loopHead._expr);

      if (typeof expr !== "number") {
        this.throwLineError(ctx, "Expression must be a number");
      }

      if (expr < 0) {
        this.throwLineError(ctx, "Expression is less than zero");
      }

      for (let i = 0; i < expr; i++) {
        try {
          for (const statement of body_statements) {
            this.visit(statement);
          }
        } catch (e) {
          if (e instanceof BreakException) {
            break;
          } else if (e instanceof ContinueException) {
            continue;
          } else {
            throw e;
          }
        }
      }
    } else if ((loopHead = head.forLoopHead())) {
      const forVar = loopHead.variableDefinition().Identifier().text;
      const leftExpr = this.visit(loopHead._left);
      const rightExpr = this.visit(loopHead._right);

      if (typeof leftExpr !== "number") {
        this.throwLineError(ctx, "Left expression must be a number");
      }

      if (typeof rightExpr !== "number") {
        this.throwLineError(ctx, "Right expression must be a number");
      }

      const endOfLoop = loopHead.Range() ? rightExpr : rightExpr + 1;

      contextStack.set(forVar, leftExpr);

      while (contextStack.get(forVar) < endOfLoop) {
        try {
          for (const statement of body_statements) {
            this.visit(statement);
          }
        } catch (e) {
          if (e instanceof BreakException) {
            break;
          } else if (e instanceof ContinueException) {
            contextStack.set(forVar, contextStack.get(forVar) + 1);
            continue;
          } else {
            throw e;
          }
        }

        contextStack.set(forVar, contextStack.get(forVar) + 1);
      }
    } else if ((loopHead = head.whileLoopHead())) {
      let expr = this.visit(loopHead.expression());

      while (expr) {
        try {
          for (const statement of body_statements) {
            this.visit(statement);
          }
        } catch (e) {
          if (e instanceof BreakException) {
            break;
          } else if (e instanceof ContinueException) {
            expr = this.visit(loopHead.expression());
            continue;
          } else {
            throw e;
          }
        }

        expr = this.visit(loopHead.expression());
      }
    }

    contextStack.popContext();
  };
  visitBreakStatement: (ctx: BreakStatementContext) => any = (ctx) => {
    throw new BreakException();
  };

  visitClassDefinition(ctx: ClassDefinitionContext): any {
    const className = ctx.Identifier()[0].text;

    // Create a new class object
    const classInstance = contextStack.set(className, new Class(className));

    // Check if the class has a superclass
    if (ctx.InheritArrow()) {
      const superclassName = ctx.Identifier()[1].text;
      const superclassInstance = contextStack.get(superclassName);

      if (!superclassInstance) {
        this.throwLineError(ctx, `Superclass ${superclassName} is not defined`);
      }

      classInstance.superclass = superclassInstance;
    }

    const constructor = ctx.constructorDefinition();

    if (constructor) {
      (classInstance as Class)._constructor = new Method(
        className,
        constructor
          .variableDefinition()
          .map((arg) => [arg.type().text, arg.Identifier().text]),
        constructor.methodBodyElement()
      );
    }

    for (const field of ctx.variableDefinitionInitialization()) {
      const fieldName = field.variableDefinition().Identifier().text;
      if (field.assignment()) {
        classInstance.fields[fieldName] = this.visit(field.expression()!);
      } else {
        classInstance.fields[fieldName] = null;
      }
    }

    for (const method of ctx.methodDefinition()) {
      const methodName = method.Identifier().text;

      classInstance.methods[methodName] = new Method(
        method.type().text,
        method
          .variableDefinition()
          .map((arg) => [arg.type().text, arg.Identifier().text]),
        method.methodBodyElement()
      );
    }

    return null;
  }

  visitIdentifierDotExpression(ctx: IdentifierDotExpressionContext): any {
    const classObj = this.visit(ctx.expression());

    if (!(classObj instanceof Class)) {
      this.throwLineError(ctx, "Expression is not a class");
    }

    const memberOrMethodName = ctx.Identifier().text;

    if (
      !classObj.fields.hasOwnProperty(memberOrMethodName) &&
      !classObj.methods.hasOwnProperty(memberOrMethodName)
    ) {
      this.throwLineError(
        ctx,
        `Member or method ${memberOrMethodName} does not exist in class`
      );
    }
    if (ctx.arguments()) {
      const method = classObj.methods[memberOrMethodName];

      if (!method) {
        this.throwLineError(
          ctx,
          `${memberOrMethodName} is not a method of class`
        );
      }

      const args = ctx
        .arguments()!
        .expression()
        .map((argCtx) => this.visit(argCtx));

      return this.callFunction(method, args);
    }

    return classObj.fields[memberOrMethodName];
  }

  visitPrintExpression = (ctx: PrintExpressionContext) => {
    const argumentsList = ctx.arguments();
    const expressions = argumentsList.expression();

    for (const expression of expressions) {
      this.messages.push(`${this.visit(expression)}`);
    }
  };

  visitThisExpression(ctx: ThisExpressionContext): any {
    // TODO requires context to access current class
  }

  visitSuperDotExpression(ctx: SuperDotExpressionContext): any {
    // TODO requires context to access current class
  }

  visitContinueStatement: (ctx: ContinueStatementContext) => any = (ctx) => {
    throw new ContinueException();
  };

  visitConditional: (ctx: ConditionalContext) => any = (ctx) => {
    const visitConditionalBlock = (
      conditionalBlock: IfConditionalContext | EifConditionalContext
    ) => {
      const head = conditionalBlock.conditionalHead();
      const expr = head.expression();
      const body = conditionalBlock.conditionalBody();
      const statements = body.sourceElement();

      if (this.visit(expr)) {
        statements.forEach((el) => this.visit(el));
        return true;
      }
      return false;
    };

    if (visitConditionalBlock(ctx.ifConditional())) return;

    const eifConditionals = ctx.eifConditional();
    for (const el of eifConditionals) {
      if (visitConditionalBlock(el)) return;
    }

    const eConditional = ctx.eConditional();
    const eBody = eConditional?.conditionalBody();
    if (eBody) {
      const eStatements = eBody.sourceElement();
      eStatements.forEach((el) => this.visit(el));
    }
  };

  visitGroupExpression: (ctx: GroupExpressionContext) => any = (ctx) => {
    return this.visit(ctx.expression());
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

  throwLineError(ctx: ParserRuleContext, message: string) {
    throw new LineError(ctx.start.line, ctx.start.charPositionInLine, message);
  }
}

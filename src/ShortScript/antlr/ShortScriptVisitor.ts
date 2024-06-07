// Generated from ShortScript.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { NormalExpressionContext } from "./ShortScriptParser";
import { ThisExpressionContext } from "./ShortScriptParser";
import { SuperDotExpressionContext } from "./ShortScriptParser";
import { IdentifierSubscriptExpressionContext } from "./ShortScriptParser";
import { IdentifierDotExpressionContext } from "./ShortScriptParser";
import { IdentifierCallExpressionContext } from "./ShortScriptParser";
import { EntityCallExpressionContext } from "./ShortScriptParser";
import { LiteralExpressionContext } from "./ShortScriptParser";
import { SuperExpressionContext } from "./ShortScriptParser";
import { IdentifierExpressionContext } from "./ShortScriptParser";
import { PreIncrementExpressionContext } from "./ShortScriptParser";
import { PreDecrementExpressionContext } from "./ShortScriptParser";
import { PostIncrementExpressionContext } from "./ShortScriptParser";
import { PostDecrementExpressionContext } from "./ShortScriptParser";
import { UnaryMinutExpressionContext } from "./ShortScriptParser";
import { NotExpressionContext } from "./ShortScriptParser";
import { PowerExpressionContext } from "./ShortScriptParser";
import { MultiplicativeExpressionContext } from "./ShortScriptParser";
import { AdditiveExpressionContext } from "./ShortScriptParser";
import { RelationalExpressionContext } from "./ShortScriptParser";
import { EqualityExpressionContext } from "./ShortScriptParser";
import { LogicalAndExpressionContext } from "./ShortScriptParser";
import { LogicalOrExpressionContext } from "./ShortScriptParser";
import { AssignmentExpressionContext } from "./ShortScriptParser";
import { VariableDefinitionWithAssignmentExpressionContext } from "./ShortScriptParser";
import { VariableDefinitionExpressionContext } from "./ShortScriptParser";
import { GroupExpressionContext } from "./ShortScriptParser";
import { ReturnExpressionContext } from "./ShortScriptParser";
import { ProgramContext } from "./ShortScriptParser";
import { SourceElementContext } from "./ShortScriptParser";
import { StatementContext } from "./ShortScriptParser";
import { ExpressionContext } from "./ShortScriptParser";
import { ArgumentsContext } from "./ShortScriptParser";
import { ConditionalContext } from "./ShortScriptParser";
import { IfConditionalContext } from "./ShortScriptParser";
import { EifConditionalContext } from "./ShortScriptParser";
import { EConditionalContext } from "./ShortScriptParser";
import { ConditionalHeadContext } from "./ShortScriptParser";
import { ConditionalBodyContext } from "./ShortScriptParser";
import { AssignmentContext } from "./ShortScriptParser";
import { BinaryOperatorContext } from "./ShortScriptParser";
import { BinaryLogicOperatorContext } from "./ShortScriptParser";
import { BinaryArithmeticOperatorContext } from "./ShortScriptParser";
import { UnaryLogicOperatorContext } from "./ShortScriptParser";
import { UnaryArithmeticOperatorContext } from "./ShortScriptParser";
import { SubscriptOperatorContext } from "./ShortScriptParser";
import { TypeContext } from "./ShortScriptParser";
import { VariableDefinitionContext } from "./ShortScriptParser";
import { LiteralContext } from "./ShortScriptParser";
import { DictionaryLiteralContext } from "./ShortScriptParser";
import { ArrayLiteralContext } from "./ShortScriptParser";
import { LoopStatementContext } from "./ShortScriptParser";
import { LoopHeadContext } from "./ShortScriptParser";
import { LoopBodyContext } from "./ShortScriptParser";
import { NLoopHeadContext } from "./ShortScriptParser";
import { ForLoopHeadContext } from "./ShortScriptParser";
import { WhileLoopHeadContext } from "./ShortScriptParser";
import { BreakStatementContext } from "./ShortScriptParser";
import { ContinueStatementContext } from "./ShortScriptParser";
import { EntityCallContext } from "./ShortScriptParser";
import { PrimaryExpressionContext } from "./ShortScriptParser";
import { FunctionDefinitionContext } from "./ShortScriptParser";
import { ClassDefinitionContext } from "./ShortScriptParser";
import { VariableDefinitionInitializationContext } from "./ShortScriptParser";
import { ConstructorDefinitionContext } from "./ShortScriptParser";
import { MethodDefinitionContext } from "./ShortScriptParser";
import { MethodBodyElementContext } from "./ShortScriptParser";
import { ClassExpressionContext } from "./ShortScriptParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ShortScriptParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ShortScriptVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `NormalExpression`
	 * labeled alternative in `ShortScriptParser.classExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalExpression?: (ctx: NormalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ThisExpression`
	 * labeled alternative in `ShortScriptParser.classExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThisExpression?: (ctx: ThisExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `SuperDotExpression`
	 * labeled alternative in `ShortScriptParser.classExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperDotExpression?: (ctx: SuperDotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `IdentifierSubscriptExpression`
	 * labeled alternative in `ShortScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierSubscriptExpression?: (ctx: IdentifierSubscriptExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `IdentifierDotExpression`
	 * labeled alternative in `ShortScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierDotExpression?: (ctx: IdentifierDotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `IdentifierCallExpression`
	 * labeled alternative in `ShortScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierCallExpression?: (ctx: IdentifierCallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `EntityCallExpression`
	 * labeled alternative in `ShortScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityCallExpression?: (ctx: EntityCallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `ShortScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpression?: (ctx: LiteralExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `SuperExpression`
	 * labeled alternative in `ShortScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperExpression?: (ctx: SuperExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `ShortScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExpression?: (ctx: IdentifierExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PreIncrementExpression`
	 * labeled alternative in `ShortScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreIncrementExpression?: (ctx: PreIncrementExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PreDecrementExpression`
	 * labeled alternative in `ShortScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreDecrementExpression?: (ctx: PreDecrementExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PostIncrementExpression`
	 * labeled alternative in `ShortScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostIncrementExpression?: (ctx: PostIncrementExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PostDecrementExpression`
	 * labeled alternative in `ShortScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostDecrementExpression?: (ctx: PostDecrementExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnaryMinutExpression`
	 * labeled alternative in `ShortScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryMinutExpression?: (ctx: UnaryMinutExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `NotExpression`
	 * labeled alternative in `ShortScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotExpression?: (ctx: NotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PowerExpression`
	 * labeled alternative in `ShortScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPowerExpression?: (ctx: PowerExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `MultiplicativeExpression`
	 * labeled alternative in `ShortScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AdditiveExpression`
	 * labeled alternative in `ShortScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `RelationalExpression`
	 * labeled alternative in `ShortScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `EqualityExpression`
	 * labeled alternative in `ShortScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LogicalAndExpression`
	 * labeled alternative in `ShortScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LogicalOrExpression`
	 * labeled alternative in `ShortScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AssignmentExpression`
	 * labeled alternative in `ShortScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentExpression?: (ctx: AssignmentExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `VariableDefinitionWithAssignmentExpression`
	 * labeled alternative in `ShortScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDefinitionWithAssignmentExpression?: (ctx: VariableDefinitionWithAssignmentExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `VariableDefinitionExpression`
	 * labeled alternative in `ShortScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDefinitionExpression?: (ctx: VariableDefinitionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `GroupExpression`
	 * labeled alternative in `ShortScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupExpression?: (ctx: GroupExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ReturnExpression`
	 * labeled alternative in `ShortScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnExpression?: (ctx: ReturnExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.sourceElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourceElement?: (ctx: SourceElementContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.conditional`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional?: (ctx: ConditionalContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.ifConditional`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfConditional?: (ctx: IfConditionalContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.eifConditional`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEifConditional?: (ctx: EifConditionalContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.eConditional`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEConditional?: (ctx: EConditionalContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.conditionalHead`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalHead?: (ctx: ConditionalHeadContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.conditionalBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalBody?: (ctx: ConditionalBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.binaryOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryOperator?: (ctx: BinaryOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.binaryLogicOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryLogicOperator?: (ctx: BinaryLogicOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.binaryArithmeticOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryArithmeticOperator?: (ctx: BinaryArithmeticOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.unaryLogicOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryLogicOperator?: (ctx: UnaryLogicOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.unaryArithmeticOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryArithmeticOperator?: (ctx: UnaryArithmeticOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.subscriptOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscriptOperator?: (ctx: SubscriptOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.variableDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDefinition?: (ctx: VariableDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.dictionaryLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDictionaryLiteral?: (ctx: DictionaryLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.arrayLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayLiteral?: (ctx: ArrayLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.loopStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopStatement?: (ctx: LoopStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.loopHead`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopHead?: (ctx: LoopHeadContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.loopBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopBody?: (ctx: LoopBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.nLoopHead`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNLoopHead?: (ctx: NLoopHeadContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.forLoopHead`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForLoopHead?: (ctx: ForLoopHeadContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.whileLoopHead`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileLoopHead?: (ctx: WhileLoopHeadContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.continueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStatement?: (ctx: ContinueStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.entityCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityCall?: (ctx: EntityCallContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.functionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDefinition?: (ctx: FunctionDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.classDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDefinition?: (ctx: ClassDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.variableDefinitionInitialization`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDefinitionInitialization?: (ctx: VariableDefinitionInitializationContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.constructorDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorDefinition?: (ctx: ConstructorDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.methodDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDefinition?: (ctx: MethodDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.methodBodyElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodBodyElement?: (ctx: MethodBodyElementContext) => Result;

	/**
	 * Visit a parse tree produced by `ShortScriptParser.classExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassExpression?: (ctx: ClassExpressionContext) => Result;
}


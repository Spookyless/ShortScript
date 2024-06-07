// Generated from ShortScript.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ShortScriptVisitor } from "./ShortScriptVisitor";


export class ShortScriptParser extends Parser {
	public static readonly SemiColon = 1;
	public static readonly Comma = 2;
	public static readonly Assign = 3;
	public static readonly QuestionMark = 4;
	public static readonly Colon = 5;
	public static readonly Dot = 6;
	public static readonly Range = 7;
	public static readonly RangeInclude = 8;
	public static readonly Arrow = 9;
	public static readonly LongArrow = 10;
	public static readonly InheritArrow = 11;
	public static readonly LessThan = 12;
	public static readonly MoreThan = 13;
	public static readonly LessThanEquals = 14;
	public static readonly MoreThanEquals = 15;
	public static readonly Equals = 16;
	public static readonly NotEquals = 17;
	public static readonly And = 18;
	public static readonly Or = 19;
	public static readonly Not = 20;
	public static readonly Plus = 21;
	public static readonly Minus = 22;
	public static readonly Multiply = 23;
	public static readonly Divide = 24;
	public static readonly Modulus = 25;
	public static readonly Power = 26;
	public static readonly PlusPlus = 27;
	public static readonly MinusMinus = 28;
	public static readonly MultiplyAssign = 29;
	public static readonly DivideAssign = 30;
	public static readonly ModulusAssign = 31;
	public static readonly PlusAssign = 32;
	public static readonly MinusAssign = 33;
	public static readonly NumberTypeLiteral = 34;
	public static readonly BooleanTypeLiteral = 35;
	public static readonly StringTypeLiteral = 36;
	public static readonly VoidTypeLiteral = 37;
	public static readonly OpenBracket = 38;
	public static readonly CloseBracket = 39;
	public static readonly OpenParen = 40;
	public static readonly CloseParen = 41;
	public static readonly OpenBrace = 42;
	public static readonly CloseBrace = 43;
	public static readonly NullLiteral = 44;
	public static readonly BooleanLiteral = 45;
	public static readonly StringLiteral = 46;
	public static readonly IntegerLiteral = 47;
	public static readonly FloatLiteral = 48;
	public static readonly Whitespace = 49;
	public static readonly MultiLineComment = 50;
	public static readonly SingleLineComment = 51;
	public static readonly Break = 52;
	public static readonly Continue = 53;
	public static readonly Return = 54;
	public static readonly Loop = 55;
	public static readonly WhileLoop = 56;
	public static readonly Function = 57;
	public static readonly If = 58;
	public static readonly Else = 59;
	public static readonly Class = 60;
	public static readonly This = 61;
	public static readonly Super = 62;
	public static readonly Identifier = 63;
	public static readonly RULE_program = 0;
	public static readonly RULE_sourceElement = 1;
	public static readonly RULE_statement = 2;
	public static readonly RULE_expression = 3;
	public static readonly RULE_arguments = 4;
	public static readonly RULE_conditional = 5;
	public static readonly RULE_ifConditional = 6;
	public static readonly RULE_eifConditional = 7;
	public static readonly RULE_eConditional = 8;
	public static readonly RULE_conditionalHead = 9;
	public static readonly RULE_conditionalBody = 10;
	public static readonly RULE_assignment = 11;
	public static readonly RULE_binaryOperator = 12;
	public static readonly RULE_binaryLogicOperator = 13;
	public static readonly RULE_binaryArithmeticOperator = 14;
	public static readonly RULE_unaryLogicOperator = 15;
	public static readonly RULE_unaryArithmeticOperator = 16;
	public static readonly RULE_subscriptOperator = 17;
	public static readonly RULE_type = 18;
	public static readonly RULE_variableDefinition = 19;
	public static readonly RULE_literal = 20;
	public static readonly RULE_dictionaryLiteral = 21;
	public static readonly RULE_arrayLiteral = 22;
	public static readonly RULE_loopStatement = 23;
	public static readonly RULE_loopHead = 24;
	public static readonly RULE_loopBody = 25;
	public static readonly RULE_nLoopHead = 26;
	public static readonly RULE_forLoopHead = 27;
	public static readonly RULE_whileLoopHead = 28;
	public static readonly RULE_breakStatement = 29;
	public static readonly RULE_continueStatement = 30;
	public static readonly RULE_entityCall = 31;
	public static readonly RULE_primaryExpression = 32;
	public static readonly RULE_functionDefinition = 33;
	public static readonly RULE_classDefinition = 34;
	public static readonly RULE_variableDefinitionInitialization = 35;
	public static readonly RULE_constructorDefinition = 36;
	public static readonly RULE_methodDefinition = 37;
	public static readonly RULE_methodBodyElement = 38;
	public static readonly RULE_classExpression = 39;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "sourceElement", "statement", "expression", "arguments", "conditional", 
		"ifConditional", "eifConditional", "eConditional", "conditionalHead", 
		"conditionalBody", "assignment", "binaryOperator", "binaryLogicOperator", 
		"binaryArithmeticOperator", "unaryLogicOperator", "unaryArithmeticOperator", 
		"subscriptOperator", "type", "variableDefinition", "literal", "dictionaryLiteral", 
		"arrayLiteral", "loopStatement", "loopHead", "loopBody", "nLoopHead", 
		"forLoopHead", "whileLoopHead", "breakStatement", "continueStatement", 
		"entityCall", "primaryExpression", "functionDefinition", "classDefinition", 
		"variableDefinitionInitialization", "constructorDefinition", "methodDefinition", 
		"methodBodyElement", "classExpression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "','", "'='", "'?'", "':'", "'.'", undefined, undefined, 
		"'=>'", "'==>'", "'<=='", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", 
		"'&&'", "'||'", "'!'", "'+'", "'-'", "'*'", "'/'", "'%'", "'**'", "'++'", 
		"'--'", "'*='", "'/='", "'%='", "'+='", "'-='", "'n'", "'b'", "'s'", "'v'", 
		"'['", "']'", "'('", "')'", "'{'", "'}'", "'null'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'br'", "'co'", 
		"'r'", "'l'", "'w'", "'f'", "'if'", "'e'", "'c'", "'t'", "'^'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SemiColon", "Comma", "Assign", "QuestionMark", "Colon", "Dot", 
		"Range", "RangeInclude", "Arrow", "LongArrow", "InheritArrow", "LessThan", 
		"MoreThan", "LessThanEquals", "MoreThanEquals", "Equals", "NotEquals", 
		"And", "Or", "Not", "Plus", "Minus", "Multiply", "Divide", "Modulus", 
		"Power", "PlusPlus", "MinusMinus", "MultiplyAssign", "DivideAssign", "ModulusAssign", 
		"PlusAssign", "MinusAssign", "NumberTypeLiteral", "BooleanTypeLiteral", 
		"StringTypeLiteral", "VoidTypeLiteral", "OpenBracket", "CloseBracket", 
		"OpenParen", "CloseParen", "OpenBrace", "CloseBrace", "NullLiteral", "BooleanLiteral", 
		"StringLiteral", "IntegerLiteral", "FloatLiteral", "Whitespace", "MultiLineComment", 
		"SingleLineComment", "Break", "Continue", "Return", "Loop", "WhileLoop", 
		"Function", "If", "Else", "Class", "This", "Super", "Identifier",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ShortScriptParser._LITERAL_NAMES, ShortScriptParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ShortScriptParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ShortScript.g4"; }

	// @Override
	public get ruleNames(): string[] { return ShortScriptParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ShortScriptParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ShortScriptParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ShortScriptParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 80;
				this.sourceElement();
				}
				}
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ShortScriptParser.Not) | (1 << ShortScriptParser.Minus) | (1 << ShortScriptParser.PlusPlus) | (1 << ShortScriptParser.MinusMinus))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ShortScriptParser.NumberTypeLiteral - 34)) | (1 << (ShortScriptParser.BooleanTypeLiteral - 34)) | (1 << (ShortScriptParser.StringTypeLiteral - 34)) | (1 << (ShortScriptParser.VoidTypeLiteral - 34)) | (1 << (ShortScriptParser.OpenBracket - 34)) | (1 << (ShortScriptParser.OpenParen - 34)) | (1 << (ShortScriptParser.OpenBrace - 34)) | (1 << (ShortScriptParser.NullLiteral - 34)) | (1 << (ShortScriptParser.BooleanLiteral - 34)) | (1 << (ShortScriptParser.StringLiteral - 34)) | (1 << (ShortScriptParser.IntegerLiteral - 34)) | (1 << (ShortScriptParser.FloatLiteral - 34)) | (1 << (ShortScriptParser.Break - 34)) | (1 << (ShortScriptParser.Continue - 34)) | (1 << (ShortScriptParser.Return - 34)) | (1 << (ShortScriptParser.Loop - 34)) | (1 << (ShortScriptParser.WhileLoop - 34)) | (1 << (ShortScriptParser.If - 34)) | (1 << (ShortScriptParser.Class - 34)) | (1 << (ShortScriptParser.Super - 34)) | (1 << (ShortScriptParser.Identifier - 34)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sourceElement(): SourceElementContext {
		let _localctx: SourceElementContext = new SourceElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ShortScriptParser.RULE_sourceElement);
		try {
			this.state = 87;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 85;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 86;
				this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ShortScriptParser.RULE_statement);
		try {
			this.state = 95;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ShortScriptParser.If:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 89;
				this.conditional();
				}
				break;
			case ShortScriptParser.NumberTypeLiteral:
			case ShortScriptParser.BooleanTypeLiteral:
			case ShortScriptParser.StringTypeLiteral:
			case ShortScriptParser.VoidTypeLiteral:
			case ShortScriptParser.OpenBrace:
			case ShortScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 90;
				this.functionDefinition();
				}
				break;
			case ShortScriptParser.Class:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 91;
				this.classDefinition();
				}
				break;
			case ShortScriptParser.Loop:
			case ShortScriptParser.WhileLoop:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 92;
				this.loopStatement();
				}
				break;
			case ShortScriptParser.Continue:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 93;
				this.continueStatement();
				}
				break;
			case ShortScriptParser.Break:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 94;
				this.breakStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 6;
		this.enterRecursionRule(_localctx, 6, ShortScriptParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				_localctx = new IdentifierCallExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 98;
				this.match(ShortScriptParser.Identifier);
				this.state = 99;
				this.match(ShortScriptParser.OpenParen);
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ShortScriptParser.Not) | (1 << ShortScriptParser.Minus) | (1 << ShortScriptParser.PlusPlus) | (1 << ShortScriptParser.MinusMinus))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ShortScriptParser.NumberTypeLiteral - 34)) | (1 << (ShortScriptParser.BooleanTypeLiteral - 34)) | (1 << (ShortScriptParser.StringTypeLiteral - 34)) | (1 << (ShortScriptParser.VoidTypeLiteral - 34)) | (1 << (ShortScriptParser.OpenBracket - 34)) | (1 << (ShortScriptParser.OpenParen - 34)) | (1 << (ShortScriptParser.OpenBrace - 34)) | (1 << (ShortScriptParser.NullLiteral - 34)) | (1 << (ShortScriptParser.BooleanLiteral - 34)) | (1 << (ShortScriptParser.StringLiteral - 34)) | (1 << (ShortScriptParser.IntegerLiteral - 34)) | (1 << (ShortScriptParser.FloatLiteral - 34)) | (1 << (ShortScriptParser.Return - 34)) | (1 << (ShortScriptParser.Super - 34)) | (1 << (ShortScriptParser.Identifier - 34)))) !== 0)) {
					{
					this.state = 100;
					this.expression(0);
					this.state = 105;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ShortScriptParser.Comma) {
						{
						{
						this.state = 101;
						this.match(ShortScriptParser.Comma);
						this.state = 102;
						this.expression(0);
						}
						}
						this.state = 107;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 110;
				this.match(ShortScriptParser.CloseParen);
				}
				break;

			case 2:
				{
				_localctx = new EntityCallExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 111;
				this.entityCall();
				}
				break;

			case 3:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 112;
				this.literal();
				}
				break;

			case 4:
				{
				_localctx = new SuperExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 113;
				this.match(ShortScriptParser.Super);
				}
				break;

			case 5:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 114;
				this.match(ShortScriptParser.Identifier);
				}
				break;

			case 6:
				{
				_localctx = new PreIncrementExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 115;
				this.match(ShortScriptParser.PlusPlus);
				this.state = 116;
				this.expression(18);
				}
				break;

			case 7:
				{
				_localctx = new PreDecrementExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 117;
				this.match(ShortScriptParser.MinusMinus);
				this.state = 118;
				this.expression(17);
				}
				break;

			case 8:
				{
				_localctx = new UnaryMinutExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 119;
				this.match(ShortScriptParser.Minus);
				this.state = 120;
				this.expression(14);
				}
				break;

			case 9:
				{
				_localctx = new NotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 121;
				this.match(ShortScriptParser.Not);
				this.state = 122;
				this.expression(13);
				}
				break;

			case 10:
				{
				_localctx = new AssignmentExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 123;
				this.match(ShortScriptParser.Identifier);
				this.state = 124;
				this.assignment();
				this.state = 125;
				this.expression(5);
				}
				break;

			case 11:
				{
				_localctx = new VariableDefinitionWithAssignmentExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 127;
				this.variableDefinition();
				this.state = 128;
				this.assignment();
				this.state = 129;
				this.expression(4);
				}
				break;

			case 12:
				{
				_localctx = new VariableDefinitionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 131;
				this.variableDefinition();
				}
				break;

			case 13:
				{
				_localctx = new GroupExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 132;
				this.match(ShortScriptParser.OpenParen);
				this.state = 133;
				this.expression(0);
				this.state = 134;
				this.match(ShortScriptParser.CloseParen);
				}
				break;

			case 14:
				{
				_localctx = new ReturnExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 136;
				this.match(ShortScriptParser.Return);
				this.state = 138;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 137;
					this.expression(0);
					}
					break;
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 177;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 175;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
					case 1:
						{
						_localctx = new PowerExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowerExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ShortScriptParser.RULE_expression);
						this.state = 142;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 143;
						this.match(ShortScriptParser.Power);
						this.state = 144;
						(_localctx as PowerExpressionContext)._right = this.expression(12);
						}
						break;

					case 2:
						{
						_localctx = new MultiplicativeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MultiplicativeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ShortScriptParser.RULE_expression);
						this.state = 145;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 146;
						(_localctx as MultiplicativeExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ShortScriptParser.Multiply) | (1 << ShortScriptParser.Divide) | (1 << ShortScriptParser.Modulus))) !== 0))) {
							(_localctx as MultiplicativeExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 147;
						(_localctx as MultiplicativeExpressionContext)._right = this.expression(12);
						}
						break;

					case 3:
						{
						_localctx = new AdditiveExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AdditiveExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ShortScriptParser.RULE_expression);
						this.state = 148;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 149;
						(_localctx as AdditiveExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === ShortScriptParser.Plus || _la === ShortScriptParser.Minus)) {
							(_localctx as AdditiveExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 150;
						(_localctx as AdditiveExpressionContext)._right = this.expression(11);
						}
						break;

					case 4:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ShortScriptParser.RULE_expression);
						this.state = 151;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 152;
						(_localctx as RelationalExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ShortScriptParser.LessThan) | (1 << ShortScriptParser.MoreThan) | (1 << ShortScriptParser.LessThanEquals) | (1 << ShortScriptParser.MoreThanEquals))) !== 0))) {
							(_localctx as RelationalExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 153;
						(_localctx as RelationalExpressionContext)._right = this.expression(10);
						}
						break;

					case 5:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ShortScriptParser.RULE_expression);
						this.state = 154;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 155;
						(_localctx as EqualityExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === ShortScriptParser.Equals || _la === ShortScriptParser.NotEquals)) {
							(_localctx as EqualityExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 156;
						(_localctx as EqualityExpressionContext)._right = this.expression(9);
						}
						break;

					case 6:
						{
						_localctx = new LogicalAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ShortScriptParser.RULE_expression);
						this.state = 157;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 158;
						this.match(ShortScriptParser.And);
						this.state = 159;
						(_localctx as LogicalAndExpressionContext)._right = this.expression(8);
						}
						break;

					case 7:
						{
						_localctx = new LogicalOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ShortScriptParser.RULE_expression);
						this.state = 160;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 161;
						this.match(ShortScriptParser.Or);
						this.state = 162;
						(_localctx as LogicalOrExpressionContext)._right = this.expression(7);
						}
						break;

					case 8:
						{
						_localctx = new IdentifierSubscriptExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ShortScriptParser.RULE_expression);
						this.state = 163;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 164;
						this.subscriptOperator();
						}
						break;

					case 9:
						{
						_localctx = new IdentifierDotExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ShortScriptParser.RULE_expression);
						this.state = 165;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 166;
						this.match(ShortScriptParser.Dot);
						this.state = 167;
						this.match(ShortScriptParser.Identifier);
						this.state = 169;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
						case 1:
							{
							this.state = 168;
							this.arguments();
							}
							break;
						}
						}
						break;

					case 10:
						{
						_localctx = new PostIncrementExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ShortScriptParser.RULE_expression);
						this.state = 171;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 172;
						this.match(ShortScriptParser.PlusPlus);
						}
						break;

					case 11:
						{
						_localctx = new PostDecrementExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ShortScriptParser.RULE_expression);
						this.state = 173;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 174;
						this.match(ShortScriptParser.MinusMinus);
						}
						break;
					}
					}
				}
				this.state = 179;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ShortScriptParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 180;
			this.match(ShortScriptParser.OpenParen);
			this.state = 189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ShortScriptParser.Not) | (1 << ShortScriptParser.Minus) | (1 << ShortScriptParser.PlusPlus) | (1 << ShortScriptParser.MinusMinus))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ShortScriptParser.NumberTypeLiteral - 34)) | (1 << (ShortScriptParser.BooleanTypeLiteral - 34)) | (1 << (ShortScriptParser.StringTypeLiteral - 34)) | (1 << (ShortScriptParser.VoidTypeLiteral - 34)) | (1 << (ShortScriptParser.OpenBracket - 34)) | (1 << (ShortScriptParser.OpenParen - 34)) | (1 << (ShortScriptParser.OpenBrace - 34)) | (1 << (ShortScriptParser.NullLiteral - 34)) | (1 << (ShortScriptParser.BooleanLiteral - 34)) | (1 << (ShortScriptParser.StringLiteral - 34)) | (1 << (ShortScriptParser.IntegerLiteral - 34)) | (1 << (ShortScriptParser.FloatLiteral - 34)) | (1 << (ShortScriptParser.Return - 34)) | (1 << (ShortScriptParser.Super - 34)) | (1 << (ShortScriptParser.Identifier - 34)))) !== 0)) {
				{
				this.state = 181;
				this.expression(0);
				this.state = 186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ShortScriptParser.Comma) {
					{
					{
					this.state = 182;
					this.match(ShortScriptParser.Comma);
					this.state = 183;
					this.expression(0);
					}
					}
					this.state = 188;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 191;
			this.match(ShortScriptParser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditional(): ConditionalContext {
		let _localctx: ConditionalContext = new ConditionalContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ShortScriptParser.RULE_conditional);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this.ifConditional();
			this.state = 197;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 194;
					this.eifConditional();
					}
					}
				}
				this.state = 199;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			this.state = 201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ShortScriptParser.Else) {
				{
				this.state = 200;
				this.eConditional();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifConditional(): IfConditionalContext {
		let _localctx: IfConditionalContext = new IfConditionalContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ShortScriptParser.RULE_ifConditional);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this.match(ShortScriptParser.If);
			this.state = 204;
			this.conditionalHead();
			this.state = 205;
			this.conditionalBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eifConditional(): EifConditionalContext {
		let _localctx: EifConditionalContext = new EifConditionalContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ShortScriptParser.RULE_eifConditional);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207;
			this.match(ShortScriptParser.Else);
			this.state = 208;
			this.match(ShortScriptParser.If);
			this.state = 209;
			this.conditionalHead();
			this.state = 210;
			this.conditionalBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eConditional(): EConditionalContext {
		let _localctx: EConditionalContext = new EConditionalContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ShortScriptParser.RULE_eConditional);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 212;
			this.match(ShortScriptParser.Else);
			this.state = 213;
			this.conditionalBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalHead(): ConditionalHeadContext {
		let _localctx: ConditionalHeadContext = new ConditionalHeadContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ShortScriptParser.RULE_conditionalHead);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 215;
			this.match(ShortScriptParser.OpenParen);
			this.state = 216;
			this.expression(0);
			this.state = 217;
			this.match(ShortScriptParser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalBody(): ConditionalBodyContext {
		let _localctx: ConditionalBodyContext = new ConditionalBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ShortScriptParser.RULE_conditionalBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			this.match(ShortScriptParser.OpenBrace);
			this.state = 223;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ShortScriptParser.Not) | (1 << ShortScriptParser.Minus) | (1 << ShortScriptParser.PlusPlus) | (1 << ShortScriptParser.MinusMinus))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ShortScriptParser.NumberTypeLiteral - 34)) | (1 << (ShortScriptParser.BooleanTypeLiteral - 34)) | (1 << (ShortScriptParser.StringTypeLiteral - 34)) | (1 << (ShortScriptParser.VoidTypeLiteral - 34)) | (1 << (ShortScriptParser.OpenBracket - 34)) | (1 << (ShortScriptParser.OpenParen - 34)) | (1 << (ShortScriptParser.OpenBrace - 34)) | (1 << (ShortScriptParser.NullLiteral - 34)) | (1 << (ShortScriptParser.BooleanLiteral - 34)) | (1 << (ShortScriptParser.StringLiteral - 34)) | (1 << (ShortScriptParser.IntegerLiteral - 34)) | (1 << (ShortScriptParser.FloatLiteral - 34)) | (1 << (ShortScriptParser.Break - 34)) | (1 << (ShortScriptParser.Continue - 34)) | (1 << (ShortScriptParser.Return - 34)) | (1 << (ShortScriptParser.Loop - 34)) | (1 << (ShortScriptParser.WhileLoop - 34)) | (1 << (ShortScriptParser.If - 34)) | (1 << (ShortScriptParser.Class - 34)) | (1 << (ShortScriptParser.Super - 34)) | (1 << (ShortScriptParser.Identifier - 34)))) !== 0)) {
				{
				{
				this.state = 220;
				this.sourceElement();
				}
				}
				this.state = 225;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 226;
			this.match(ShortScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ShortScriptParser.RULE_assignment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 228;
			_la = this._input.LA(1);
			if (!(((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (ShortScriptParser.Assign - 3)) | (1 << (ShortScriptParser.MultiplyAssign - 3)) | (1 << (ShortScriptParser.DivideAssign - 3)) | (1 << (ShortScriptParser.ModulusAssign - 3)) | (1 << (ShortScriptParser.PlusAssign - 3)) | (1 << (ShortScriptParser.MinusAssign - 3)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binaryOperator(): BinaryOperatorContext {
		let _localctx: BinaryOperatorContext = new BinaryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ShortScriptParser.RULE_binaryOperator);
		try {
			this.state = 232;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ShortScriptParser.LessThan:
			case ShortScriptParser.MoreThan:
			case ShortScriptParser.LessThanEquals:
			case ShortScriptParser.MoreThanEquals:
			case ShortScriptParser.Equals:
			case ShortScriptParser.NotEquals:
			case ShortScriptParser.And:
			case ShortScriptParser.Or:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 230;
				this.binaryLogicOperator();
				}
				break;
			case ShortScriptParser.Plus:
			case ShortScriptParser.Minus:
			case ShortScriptParser.Multiply:
			case ShortScriptParser.Divide:
			case ShortScriptParser.Modulus:
			case ShortScriptParser.Power:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 231;
				this.binaryArithmeticOperator();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binaryLogicOperator(): BinaryLogicOperatorContext {
		let _localctx: BinaryLogicOperatorContext = new BinaryLogicOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ShortScriptParser.RULE_binaryLogicOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ShortScriptParser.LessThan) | (1 << ShortScriptParser.MoreThan) | (1 << ShortScriptParser.LessThanEquals) | (1 << ShortScriptParser.MoreThanEquals) | (1 << ShortScriptParser.Equals) | (1 << ShortScriptParser.NotEquals) | (1 << ShortScriptParser.And) | (1 << ShortScriptParser.Or))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binaryArithmeticOperator(): BinaryArithmeticOperatorContext {
		let _localctx: BinaryArithmeticOperatorContext = new BinaryArithmeticOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ShortScriptParser.RULE_binaryArithmeticOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ShortScriptParser.Plus) | (1 << ShortScriptParser.Minus) | (1 << ShortScriptParser.Multiply) | (1 << ShortScriptParser.Divide) | (1 << ShortScriptParser.Modulus) | (1 << ShortScriptParser.Power))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryLogicOperator(): UnaryLogicOperatorContext {
		let _localctx: UnaryLogicOperatorContext = new UnaryLogicOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ShortScriptParser.RULE_unaryLogicOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this.match(ShortScriptParser.Not);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryArithmeticOperator(): UnaryArithmeticOperatorContext {
		let _localctx: UnaryArithmeticOperatorContext = new UnaryArithmeticOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ShortScriptParser.RULE_unaryArithmeticOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			_la = this._input.LA(1);
			if (!(_la === ShortScriptParser.PlusPlus || _la === ShortScriptParser.MinusMinus)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subscriptOperator(): SubscriptOperatorContext {
		let _localctx: SubscriptOperatorContext = new SubscriptOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ShortScriptParser.RULE_subscriptOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this.match(ShortScriptParser.OpenBracket);
			this.state = 243;
			this.expression(0);
			this.state = 244;
			this.match(ShortScriptParser.CloseBracket);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public type(): TypeContext;
	public type(_p: number): TypeContext;
	// @RuleVersion(0)
	public type(_p?: number): TypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeContext = new TypeContext(this._ctx, _parentState);
		let _prevctx: TypeContext = _localctx;
		let _startState: number = 36;
		this.enterRecursionRule(_localctx, 36, ShortScriptParser.RULE_type, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ShortScriptParser.NumberTypeLiteral:
				{
				this.state = 247;
				this.match(ShortScriptParser.NumberTypeLiteral);
				}
				break;
			case ShortScriptParser.BooleanTypeLiteral:
				{
				this.state = 248;
				this.match(ShortScriptParser.BooleanTypeLiteral);
				}
				break;
			case ShortScriptParser.StringTypeLiteral:
				{
				this.state = 249;
				this.match(ShortScriptParser.StringTypeLiteral);
				}
				break;
			case ShortScriptParser.VoidTypeLiteral:
				{
				this.state = 250;
				this.match(ShortScriptParser.VoidTypeLiteral);
				}
				break;
			case ShortScriptParser.Identifier:
				{
				this.state = 251;
				this.match(ShortScriptParser.Identifier);
				}
				break;
			case ShortScriptParser.OpenBrace:
				{
				this.state = 252;
				this.match(ShortScriptParser.OpenBrace);
				this.state = 253;
				this.type(0);
				this.state = 254;
				this.match(ShortScriptParser.Comma);
				this.state = 255;
				this.type(0);
				this.state = 256;
				this.match(ShortScriptParser.CloseBrace);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 265;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ShortScriptParser.RULE_type);
					this.state = 260;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 261;
					this.match(ShortScriptParser.OpenBracket);
					this.state = 262;
					this.match(ShortScriptParser.CloseBracket);
					}
					}
				}
				this.state = 267;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDefinition(): VariableDefinitionContext {
		let _localctx: VariableDefinitionContext = new VariableDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ShortScriptParser.RULE_variableDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 268;
			this.type(0);
			this.state = 269;
			this.match(ShortScriptParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ShortScriptParser.RULE_literal);
		try {
			this.state = 278;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ShortScriptParser.NullLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 271;
				this.match(ShortScriptParser.NullLiteral);
				}
				break;
			case ShortScriptParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 272;
				this.match(ShortScriptParser.BooleanLiteral);
				}
				break;
			case ShortScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 273;
				this.match(ShortScriptParser.StringLiteral);
				}
				break;
			case ShortScriptParser.IntegerLiteral:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 274;
				this.match(ShortScriptParser.IntegerLiteral);
				}
				break;
			case ShortScriptParser.FloatLiteral:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 275;
				this.match(ShortScriptParser.FloatLiteral);
				}
				break;
			case ShortScriptParser.OpenBrace:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 276;
				this.dictionaryLiteral();
				}
				break;
			case ShortScriptParser.OpenBracket:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 277;
				this.arrayLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dictionaryLiteral(): DictionaryLiteralContext {
		let _localctx: DictionaryLiteralContext = new DictionaryLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ShortScriptParser.RULE_dictionaryLiteral);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 280;
			this.match(ShortScriptParser.OpenBrace);
			this.state = 295;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ShortScriptParser.Not) | (1 << ShortScriptParser.Minus) | (1 << ShortScriptParser.PlusPlus) | (1 << ShortScriptParser.MinusMinus))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ShortScriptParser.NumberTypeLiteral - 34)) | (1 << (ShortScriptParser.BooleanTypeLiteral - 34)) | (1 << (ShortScriptParser.StringTypeLiteral - 34)) | (1 << (ShortScriptParser.VoidTypeLiteral - 34)) | (1 << (ShortScriptParser.OpenBracket - 34)) | (1 << (ShortScriptParser.OpenParen - 34)) | (1 << (ShortScriptParser.OpenBrace - 34)) | (1 << (ShortScriptParser.NullLiteral - 34)) | (1 << (ShortScriptParser.BooleanLiteral - 34)) | (1 << (ShortScriptParser.StringLiteral - 34)) | (1 << (ShortScriptParser.IntegerLiteral - 34)) | (1 << (ShortScriptParser.FloatLiteral - 34)) | (1 << (ShortScriptParser.Return - 34)) | (1 << (ShortScriptParser.Super - 34)) | (1 << (ShortScriptParser.Identifier - 34)))) !== 0)) {
				{
				this.state = 288;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 281;
						this.expression(0);
						this.state = 282;
						this.match(ShortScriptParser.Colon);
						this.state = 283;
						this.expression(0);
						this.state = 284;
						this.match(ShortScriptParser.Comma);
						}
						}
					}
					this.state = 290;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
				}
				{
				this.state = 291;
				this.expression(0);
				this.state = 292;
				this.match(ShortScriptParser.Colon);
				this.state = 293;
				this.expression(0);
				}
				}
			}

			this.state = 297;
			this.match(ShortScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayLiteral(): ArrayLiteralContext {
		let _localctx: ArrayLiteralContext = new ArrayLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, ShortScriptParser.RULE_arrayLiteral);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this.match(ShortScriptParser.OpenBracket);
			this.state = 305;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 300;
					this.expression(0);
					this.state = 301;
					this.match(ShortScriptParser.Comma);
					}
					}
				}
				this.state = 307;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			this.state = 309;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ShortScriptParser.Not) | (1 << ShortScriptParser.Minus) | (1 << ShortScriptParser.PlusPlus) | (1 << ShortScriptParser.MinusMinus))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ShortScriptParser.NumberTypeLiteral - 34)) | (1 << (ShortScriptParser.BooleanTypeLiteral - 34)) | (1 << (ShortScriptParser.StringTypeLiteral - 34)) | (1 << (ShortScriptParser.VoidTypeLiteral - 34)) | (1 << (ShortScriptParser.OpenBracket - 34)) | (1 << (ShortScriptParser.OpenParen - 34)) | (1 << (ShortScriptParser.OpenBrace - 34)) | (1 << (ShortScriptParser.NullLiteral - 34)) | (1 << (ShortScriptParser.BooleanLiteral - 34)) | (1 << (ShortScriptParser.StringLiteral - 34)) | (1 << (ShortScriptParser.IntegerLiteral - 34)) | (1 << (ShortScriptParser.FloatLiteral - 34)) | (1 << (ShortScriptParser.Return - 34)) | (1 << (ShortScriptParser.Super - 34)) | (1 << (ShortScriptParser.Identifier - 34)))) !== 0)) {
				{
				this.state = 308;
				this.expression(0);
				}
			}

			this.state = 311;
			this.match(ShortScriptParser.CloseBracket);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopStatement(): LoopStatementContext {
		let _localctx: LoopStatementContext = new LoopStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, ShortScriptParser.RULE_loopStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 313;
			this.loopHead();
			this.state = 314;
			this.match(ShortScriptParser.OpenBrace);
			this.state = 315;
			this.loopBody();
			this.state = 316;
			this.match(ShortScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopHead(): LoopHeadContext {
		let _localctx: LoopHeadContext = new LoopHeadContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, ShortScriptParser.RULE_loopHead);
		try {
			this.state = 321;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 318;
				this.nLoopHead();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 319;
				this.forLoopHead();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 320;
				this.whileLoopHead();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopBody(): LoopBodyContext {
		let _localctx: LoopBodyContext = new LoopBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, ShortScriptParser.RULE_loopBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 326;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ShortScriptParser.Not) | (1 << ShortScriptParser.Minus) | (1 << ShortScriptParser.PlusPlus) | (1 << ShortScriptParser.MinusMinus))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ShortScriptParser.NumberTypeLiteral - 34)) | (1 << (ShortScriptParser.BooleanTypeLiteral - 34)) | (1 << (ShortScriptParser.StringTypeLiteral - 34)) | (1 << (ShortScriptParser.VoidTypeLiteral - 34)) | (1 << (ShortScriptParser.OpenBracket - 34)) | (1 << (ShortScriptParser.OpenParen - 34)) | (1 << (ShortScriptParser.OpenBrace - 34)) | (1 << (ShortScriptParser.NullLiteral - 34)) | (1 << (ShortScriptParser.BooleanLiteral - 34)) | (1 << (ShortScriptParser.StringLiteral - 34)) | (1 << (ShortScriptParser.IntegerLiteral - 34)) | (1 << (ShortScriptParser.FloatLiteral - 34)) | (1 << (ShortScriptParser.Break - 34)) | (1 << (ShortScriptParser.Continue - 34)) | (1 << (ShortScriptParser.Return - 34)) | (1 << (ShortScriptParser.Loop - 34)) | (1 << (ShortScriptParser.WhileLoop - 34)) | (1 << (ShortScriptParser.If - 34)) | (1 << (ShortScriptParser.Class - 34)) | (1 << (ShortScriptParser.Super - 34)) | (1 << (ShortScriptParser.Identifier - 34)))) !== 0)) {
				{
				{
				this.state = 323;
				this.sourceElement();
				}
				}
				this.state = 328;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nLoopHead(): NLoopHeadContext {
		let _localctx: NLoopHeadContext = new NLoopHeadContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, ShortScriptParser.RULE_nLoopHead);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 329;
			this.match(ShortScriptParser.Loop);
			this.state = 330;
			this.match(ShortScriptParser.OpenParen);
			this.state = 331;
			_localctx._expr = this.expression(0);
			this.state = 332;
			this.match(ShortScriptParser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forLoopHead(): ForLoopHeadContext {
		let _localctx: ForLoopHeadContext = new ForLoopHeadContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, ShortScriptParser.RULE_forLoopHead);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			this.match(ShortScriptParser.Loop);
			this.state = 335;
			this.match(ShortScriptParser.OpenParen);
			this.state = 336;
			this.variableDefinition();
			this.state = 337;
			this.match(ShortScriptParser.Assign);
			this.state = 338;
			_localctx._left = this.expression(0);
			this.state = 339;
			_la = this._input.LA(1);
			if (!(_la === ShortScriptParser.Range || _la === ShortScriptParser.RangeInclude)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 340;
			_localctx._right = this.expression(0);
			this.state = 341;
			this.match(ShortScriptParser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileLoopHead(): WhileLoopHeadContext {
		let _localctx: WhileLoopHeadContext = new WhileLoopHeadContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, ShortScriptParser.RULE_whileLoopHead);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 343;
			this.match(ShortScriptParser.WhileLoop);
			this.state = 344;
			this.match(ShortScriptParser.OpenParen);
			this.state = 345;
			this.expression(0);
			this.state = 346;
			this.match(ShortScriptParser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, ShortScriptParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			this.match(ShortScriptParser.Break);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, ShortScriptParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 350;
			this.match(ShortScriptParser.Continue);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public entityCall(): EntityCallContext {
		let _localctx: EntityCallContext = new EntityCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, ShortScriptParser.RULE_entityCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			this.primaryExpression();
			this.state = 353;
			this.match(ShortScriptParser.OpenParen);
			this.state = 362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ShortScriptParser.Not) | (1 << ShortScriptParser.Minus) | (1 << ShortScriptParser.PlusPlus) | (1 << ShortScriptParser.MinusMinus))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ShortScriptParser.NumberTypeLiteral - 34)) | (1 << (ShortScriptParser.BooleanTypeLiteral - 34)) | (1 << (ShortScriptParser.StringTypeLiteral - 34)) | (1 << (ShortScriptParser.VoidTypeLiteral - 34)) | (1 << (ShortScriptParser.OpenBracket - 34)) | (1 << (ShortScriptParser.OpenParen - 34)) | (1 << (ShortScriptParser.OpenBrace - 34)) | (1 << (ShortScriptParser.NullLiteral - 34)) | (1 << (ShortScriptParser.BooleanLiteral - 34)) | (1 << (ShortScriptParser.StringLiteral - 34)) | (1 << (ShortScriptParser.IntegerLiteral - 34)) | (1 << (ShortScriptParser.FloatLiteral - 34)) | (1 << (ShortScriptParser.Return - 34)) | (1 << (ShortScriptParser.Super - 34)) | (1 << (ShortScriptParser.Identifier - 34)))) !== 0)) {
				{
				this.state = 354;
				this.expression(0);
				this.state = 359;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ShortScriptParser.Comma) {
					{
					{
					this.state = 355;
					this.match(ShortScriptParser.Comma);
					this.state = 356;
					this.expression(0);
					}
					}
					this.state = 361;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 364;
			this.match(ShortScriptParser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, ShortScriptParser.RULE_primaryExpression);
		let _la: number;
		try {
			this.state = 380;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ShortScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 366;
				this.match(ShortScriptParser.Identifier);
				this.state = 368;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ShortScriptParser.OpenBracket) {
					{
					this.state = 367;
					this.subscriptOperator();
					}
				}

				this.state = 372;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ShortScriptParser.Dot) {
					{
					this.state = 370;
					this.match(ShortScriptParser.Dot);
					this.state = 371;
					this.expression(0);
					}
				}

				}
				break;
			case ShortScriptParser.Super:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 374;
				this.match(ShortScriptParser.Super);
				}
				break;
			case ShortScriptParser.OpenBracket:
			case ShortScriptParser.OpenBrace:
			case ShortScriptParser.NullLiteral:
			case ShortScriptParser.BooleanLiteral:
			case ShortScriptParser.StringLiteral:
			case ShortScriptParser.IntegerLiteral:
			case ShortScriptParser.FloatLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 375;
				this.literal();
				}
				break;
			case ShortScriptParser.OpenParen:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 376;
				this.match(ShortScriptParser.OpenParen);
				this.state = 377;
				this.expression(0);
				this.state = 378;
				this.match(ShortScriptParser.CloseParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDefinition(): FunctionDefinitionContext {
		let _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, ShortScriptParser.RULE_functionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 382;
			this.type(0);
			this.state = 383;
			this.match(ShortScriptParser.Function);
			this.state = 384;
			this.match(ShortScriptParser.Identifier);
			this.state = 385;
			this.match(ShortScriptParser.OpenParen);
			this.state = 394;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ShortScriptParser.NumberTypeLiteral - 34)) | (1 << (ShortScriptParser.BooleanTypeLiteral - 34)) | (1 << (ShortScriptParser.StringTypeLiteral - 34)) | (1 << (ShortScriptParser.VoidTypeLiteral - 34)) | (1 << (ShortScriptParser.OpenBrace - 34)) | (1 << (ShortScriptParser.Identifier - 34)))) !== 0)) {
				{
				this.state = 386;
				this.variableDefinition();
				this.state = 391;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ShortScriptParser.Comma) {
					{
					{
					this.state = 387;
					this.match(ShortScriptParser.Comma);
					this.state = 388;
					this.variableDefinition();
					}
					}
					this.state = 393;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 396;
			this.match(ShortScriptParser.CloseParen);
			this.state = 397;
			this.match(ShortScriptParser.OpenBrace);
			this.state = 401;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ShortScriptParser.Not) | (1 << ShortScriptParser.Minus) | (1 << ShortScriptParser.PlusPlus) | (1 << ShortScriptParser.MinusMinus))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ShortScriptParser.NumberTypeLiteral - 34)) | (1 << (ShortScriptParser.BooleanTypeLiteral - 34)) | (1 << (ShortScriptParser.StringTypeLiteral - 34)) | (1 << (ShortScriptParser.VoidTypeLiteral - 34)) | (1 << (ShortScriptParser.OpenBracket - 34)) | (1 << (ShortScriptParser.OpenParen - 34)) | (1 << (ShortScriptParser.OpenBrace - 34)) | (1 << (ShortScriptParser.NullLiteral - 34)) | (1 << (ShortScriptParser.BooleanLiteral - 34)) | (1 << (ShortScriptParser.StringLiteral - 34)) | (1 << (ShortScriptParser.IntegerLiteral - 34)) | (1 << (ShortScriptParser.FloatLiteral - 34)) | (1 << (ShortScriptParser.Break - 34)) | (1 << (ShortScriptParser.Continue - 34)) | (1 << (ShortScriptParser.Return - 34)) | (1 << (ShortScriptParser.Loop - 34)) | (1 << (ShortScriptParser.WhileLoop - 34)) | (1 << (ShortScriptParser.If - 34)) | (1 << (ShortScriptParser.Class - 34)) | (1 << (ShortScriptParser.Super - 34)) | (1 << (ShortScriptParser.Identifier - 34)))) !== 0)) {
				{
				{
				this.state = 398;
				this.sourceElement();
				}
				}
				this.state = 403;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 404;
			this.match(ShortScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classDefinition(): ClassDefinitionContext {
		let _localctx: ClassDefinitionContext = new ClassDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, ShortScriptParser.RULE_classDefinition);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 406;
			this.match(ShortScriptParser.Class);
			this.state = 407;
			this.match(ShortScriptParser.Identifier);
			this.state = 410;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ShortScriptParser.InheritArrow) {
				{
				this.state = 408;
				this.match(ShortScriptParser.InheritArrow);
				this.state = 409;
				this.match(ShortScriptParser.Identifier);
				}
			}

			this.state = 412;
			this.match(ShortScriptParser.OpenBrace);
			this.state = 417;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 415;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
					case 1:
						{
						this.state = 413;
						this.variableDefinitionInitialization();
						}
						break;

					case 2:
						{
						this.state = 414;
						this.methodDefinition();
						}
						break;
					}
					}
				}
				this.state = 419;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			}
			this.state = 421;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				this.state = 420;
				this.constructorDefinition();
				}
				break;
			}
			this.state = 427;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ShortScriptParser.NumberTypeLiteral - 34)) | (1 << (ShortScriptParser.BooleanTypeLiteral - 34)) | (1 << (ShortScriptParser.StringTypeLiteral - 34)) | (1 << (ShortScriptParser.VoidTypeLiteral - 34)) | (1 << (ShortScriptParser.OpenBrace - 34)) | (1 << (ShortScriptParser.Identifier - 34)))) !== 0)) {
				{
				this.state = 425;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 423;
					this.variableDefinitionInitialization();
					}
					break;

				case 2:
					{
					this.state = 424;
					this.methodDefinition();
					}
					break;
				}
				}
				this.state = 429;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 430;
			this.match(ShortScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDefinitionInitialization(): VariableDefinitionInitializationContext {
		let _localctx: VariableDefinitionInitializationContext = new VariableDefinitionInitializationContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, ShortScriptParser.RULE_variableDefinitionInitialization);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 432;
			this.variableDefinition();
			this.state = 436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (ShortScriptParser.Assign - 3)) | (1 << (ShortScriptParser.MultiplyAssign - 3)) | (1 << (ShortScriptParser.DivideAssign - 3)) | (1 << (ShortScriptParser.ModulusAssign - 3)) | (1 << (ShortScriptParser.PlusAssign - 3)) | (1 << (ShortScriptParser.MinusAssign - 3)))) !== 0)) {
				{
				this.state = 433;
				this.assignment();
				this.state = 434;
				this.expression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorDefinition(): ConstructorDefinitionContext {
		let _localctx: ConstructorDefinitionContext = new ConstructorDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, ShortScriptParser.RULE_constructorDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 438;
			this.match(ShortScriptParser.Identifier);
			this.state = 439;
			this.match(ShortScriptParser.Identifier);
			this.state = 452;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ShortScriptParser.LongArrow:
				{
				this.state = 440;
				this.match(ShortScriptParser.LongArrow);
				}
				break;
			case ShortScriptParser.Assign:
				{
				{
				this.state = 441;
				this.match(ShortScriptParser.Assign);
				this.state = 442;
				this.variableDefinition();
				this.state = 447;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ShortScriptParser.Comma) {
					{
					{
					this.state = 443;
					this.match(ShortScriptParser.Comma);
					this.state = 444;
					this.variableDefinition();
					}
					}
					this.state = 449;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 450;
				this.match(ShortScriptParser.Arrow);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 454;
			this.match(ShortScriptParser.OpenBrace);
			this.state = 468;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				this.state = 455;
				this.match(ShortScriptParser.Super);
				this.state = 456;
				this.match(ShortScriptParser.OpenParen);
				this.state = 465;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ShortScriptParser.Not) | (1 << ShortScriptParser.Minus) | (1 << ShortScriptParser.PlusPlus) | (1 << ShortScriptParser.MinusMinus))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ShortScriptParser.NumberTypeLiteral - 34)) | (1 << (ShortScriptParser.BooleanTypeLiteral - 34)) | (1 << (ShortScriptParser.StringTypeLiteral - 34)) | (1 << (ShortScriptParser.VoidTypeLiteral - 34)) | (1 << (ShortScriptParser.OpenBracket - 34)) | (1 << (ShortScriptParser.OpenParen - 34)) | (1 << (ShortScriptParser.OpenBrace - 34)) | (1 << (ShortScriptParser.NullLiteral - 34)) | (1 << (ShortScriptParser.BooleanLiteral - 34)) | (1 << (ShortScriptParser.StringLiteral - 34)) | (1 << (ShortScriptParser.IntegerLiteral - 34)) | (1 << (ShortScriptParser.FloatLiteral - 34)) | (1 << (ShortScriptParser.Return - 34)) | (1 << (ShortScriptParser.Super - 34)) | (1 << (ShortScriptParser.Identifier - 34)))) !== 0)) {
					{
					this.state = 457;
					this.expression(0);
					this.state = 462;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ShortScriptParser.Comma) {
						{
						{
						this.state = 458;
						this.match(ShortScriptParser.Comma);
						this.state = 459;
						this.expression(0);
						}
						}
						this.state = 464;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 467;
				this.match(ShortScriptParser.CloseParen);
				}
				break;
			}
			this.state = 473;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ShortScriptParser.Not) | (1 << ShortScriptParser.Minus) | (1 << ShortScriptParser.PlusPlus) | (1 << ShortScriptParser.MinusMinus))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ShortScriptParser.NumberTypeLiteral - 34)) | (1 << (ShortScriptParser.BooleanTypeLiteral - 34)) | (1 << (ShortScriptParser.StringTypeLiteral - 34)) | (1 << (ShortScriptParser.VoidTypeLiteral - 34)) | (1 << (ShortScriptParser.OpenBracket - 34)) | (1 << (ShortScriptParser.OpenParen - 34)) | (1 << (ShortScriptParser.OpenBrace - 34)) | (1 << (ShortScriptParser.NullLiteral - 34)) | (1 << (ShortScriptParser.BooleanLiteral - 34)) | (1 << (ShortScriptParser.StringLiteral - 34)) | (1 << (ShortScriptParser.IntegerLiteral - 34)) | (1 << (ShortScriptParser.FloatLiteral - 34)) | (1 << (ShortScriptParser.Break - 34)) | (1 << (ShortScriptParser.Continue - 34)) | (1 << (ShortScriptParser.Return - 34)) | (1 << (ShortScriptParser.Loop - 34)) | (1 << (ShortScriptParser.WhileLoop - 34)) | (1 << (ShortScriptParser.If - 34)) | (1 << (ShortScriptParser.Class - 34)) | (1 << (ShortScriptParser.This - 34)) | (1 << (ShortScriptParser.Super - 34)) | (1 << (ShortScriptParser.Identifier - 34)))) !== 0)) {
				{
				{
				this.state = 470;
				this.methodBodyElement();
				}
				}
				this.state = 475;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 476;
			this.match(ShortScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodDefinition(): MethodDefinitionContext {
		let _localctx: MethodDefinitionContext = new MethodDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, ShortScriptParser.RULE_methodDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 478;
			this.type(0);
			this.state = 479;
			this.match(ShortScriptParser.Function);
			this.state = 480;
			this.match(ShortScriptParser.Identifier);
			this.state = 481;
			this.match(ShortScriptParser.OpenParen);
			this.state = 490;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ShortScriptParser.NumberTypeLiteral - 34)) | (1 << (ShortScriptParser.BooleanTypeLiteral - 34)) | (1 << (ShortScriptParser.StringTypeLiteral - 34)) | (1 << (ShortScriptParser.VoidTypeLiteral - 34)) | (1 << (ShortScriptParser.OpenBrace - 34)) | (1 << (ShortScriptParser.Identifier - 34)))) !== 0)) {
				{
				this.state = 482;
				this.variableDefinition();
				this.state = 487;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ShortScriptParser.Comma) {
					{
					{
					this.state = 483;
					this.match(ShortScriptParser.Comma);
					this.state = 484;
					this.variableDefinition();
					}
					}
					this.state = 489;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 492;
			this.match(ShortScriptParser.CloseParen);
			this.state = 493;
			this.match(ShortScriptParser.OpenBrace);
			this.state = 497;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ShortScriptParser.Not) | (1 << ShortScriptParser.Minus) | (1 << ShortScriptParser.PlusPlus) | (1 << ShortScriptParser.MinusMinus))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ShortScriptParser.NumberTypeLiteral - 34)) | (1 << (ShortScriptParser.BooleanTypeLiteral - 34)) | (1 << (ShortScriptParser.StringTypeLiteral - 34)) | (1 << (ShortScriptParser.VoidTypeLiteral - 34)) | (1 << (ShortScriptParser.OpenBracket - 34)) | (1 << (ShortScriptParser.OpenParen - 34)) | (1 << (ShortScriptParser.OpenBrace - 34)) | (1 << (ShortScriptParser.NullLiteral - 34)) | (1 << (ShortScriptParser.BooleanLiteral - 34)) | (1 << (ShortScriptParser.StringLiteral - 34)) | (1 << (ShortScriptParser.IntegerLiteral - 34)) | (1 << (ShortScriptParser.FloatLiteral - 34)) | (1 << (ShortScriptParser.Break - 34)) | (1 << (ShortScriptParser.Continue - 34)) | (1 << (ShortScriptParser.Return - 34)) | (1 << (ShortScriptParser.Loop - 34)) | (1 << (ShortScriptParser.WhileLoop - 34)) | (1 << (ShortScriptParser.If - 34)) | (1 << (ShortScriptParser.Class - 34)) | (1 << (ShortScriptParser.This - 34)) | (1 << (ShortScriptParser.Super - 34)) | (1 << (ShortScriptParser.Identifier - 34)))) !== 0)) {
				{
				{
				this.state = 494;
				this.methodBodyElement();
				}
				}
				this.state = 499;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 500;
			this.match(ShortScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodBodyElement(): MethodBodyElementContext {
		let _localctx: MethodBodyElementContext = new MethodBodyElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, ShortScriptParser.RULE_methodBodyElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 504;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				{
				this.state = 502;
				this.statement();
				}
				break;

			case 2:
				{
				this.state = 503;
				this.classExpression();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classExpression(): ClassExpressionContext {
		let _localctx: ClassExpressionContext = new ClassExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, ShortScriptParser.RULE_classExpression);
		let _la: number;
		try {
			this.state = 515;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				_localctx = new NormalExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 506;
				this.expression(0);
				}
				break;

			case 2:
				_localctx = new ThisExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 507;
				this.match(ShortScriptParser.This);
				this.state = 510;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ShortScriptParser.Dot) {
					{
					this.state = 508;
					this.match(ShortScriptParser.Dot);
					this.state = 509;
					this.expression(0);
					}
				}

				}
				break;

			case 3:
				_localctx = new SuperDotExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 512;
				this.match(ShortScriptParser.Super);
				this.state = 513;
				this.match(ShortScriptParser.Dot);
				this.state = 514;
				this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 3:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 18:
			return this.type_sempred(_localctx as TypeContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 12);

		case 1:
			return this.precpred(this._ctx, 11);

		case 2:
			return this.precpred(this._ctx, 10);

		case 3:
			return this.precpred(this._ctx, 9);

		case 4:
			return this.precpred(this._ctx, 8);

		case 5:
			return this.precpred(this._ctx, 7);

		case 6:
			return this.precpred(this._ctx, 6);

		case 7:
			return this.precpred(this._ctx, 25);

		case 8:
			return this.precpred(this._ctx, 24);

		case 9:
			return this.precpred(this._ctx, 16);

		case 10:
			return this.precpred(this._ctx, 15);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03A\u0208\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x03\x02\x06\x02" +
		"T\n\x02\r\x02\x0E\x02U\x03\x03\x03\x03\x05\x03Z\n\x03\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04b\n\x04\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x07\x05j\n\x05\f\x05\x0E\x05m\v\x05\x05\x05o" +
		"\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x05\x05\x8D\n\x05\x05\x05\x8F\n\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xAC\n\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\xB2\n\x05\f\x05\x0E\x05\xB5\v" +
		"\x05\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\xBB\n\x06\f\x06\x0E\x06\xBE" +
		"\v\x06\x05\x06\xC0\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x07\x07\xC6\n" +
		"\x07\f\x07\x0E\x07\xC9\v\x07\x03\x07\x05\x07\xCC\n\x07\x03\b\x03\b\x03" +
		"\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03" +
		"\v\x03\v\x03\f\x03\f\x07\f\xE0\n\f\f\f\x0E\f\xE3\v\f\x03\f\x03\f\x03\r" +
		"\x03\r\x03\x0E\x03\x0E\x05\x0E\xEB\n\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10" +
		"\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x05\x14\u0105\n\x14\x03\x14\x03\x14\x03\x14\x07\x14\u010A" +
		"\n\x14\f\x14\x0E\x14\u010D\v\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0119\n\x16\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u0121\n\x17\f\x17\x0E\x17" +
		"\u0124\v\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u012A\n\x17\x03\x17" +
		"\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u0132\n\x18\f\x18\x0E" +
		"\x18\u0135\v\x18\x03\x18\x05\x18\u0138\n\x18\x03\x18\x03\x18\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0144\n\x1A" +
		"\x03\x1B\x07\x1B\u0147\n\x1B\f\x1B\x0E\x1B\u014A\v\x1B\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F" +
		"\x03\x1F\x03 \x03 \x03!\x03!\x03!\x03!\x03!\x07!\u0168\n!\f!\x0E!\u016B" +
		"\v!\x05!\u016D\n!\x03!\x03!\x03\"\x03\"\x05\"\u0173\n\"\x03\"\x03\"\x05" +
		"\"\u0177\n\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u017F\n\"\x03#" +
		"\x03#\x03#\x03#\x03#\x03#\x03#\x07#\u0188\n#\f#\x0E#\u018B\v#\x05#\u018D" +
		"\n#\x03#\x03#\x03#\x07#\u0192\n#\f#\x0E#\u0195\v#\x03#\x03#\x03$\x03$" +
		"\x03$\x03$\x05$\u019D\n$\x03$\x03$\x03$\x07$\u01A2\n$\f$\x0E$\u01A5\v" +
		"$\x03$\x05$\u01A8\n$\x03$\x03$\x07$\u01AC\n$\f$\x0E$\u01AF\v$\x03$\x03" +
		"$\x03%\x03%\x03%\x03%\x05%\u01B7\n%\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
		"&\x07&\u01C0\n&\f&\x0E&\u01C3\v&\x03&\x03&\x05&\u01C7\n&\x03&\x03&\x03" +
		"&\x03&\x03&\x03&\x07&\u01CF\n&\f&\x0E&\u01D2\v&\x05&\u01D4\n&\x03&\x05" +
		"&\u01D7\n&\x03&\x07&\u01DA\n&\f&\x0E&\u01DD\v&\x03&\x03&\x03\'\x03\'\x03" +
		"\'\x03\'\x03\'\x03\'\x03\'\x07\'\u01E8\n\'\f\'\x0E\'\u01EB\v\'\x05\'\u01ED" +
		"\n\'\x03\'\x03\'\x03\'\x07\'\u01F2\n\'\f\'\x0E\'\u01F5\v\'\x03\'\x03\'" +
		"\x03(\x03(\x05(\u01FB\n(\x03)\x03)\x03)\x03)\x05)\u0201\n)\x03)\x03)\x03" +
		")\x05)\u0206\n)\x03)\x02\x02\x04\b&*\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02\x02" +
		"\v\x03\x02\x19\x1B\x03\x02\x17\x18\x03\x02\x0E\x11\x03\x02\x12\x13\x04" +
		"\x02\x05\x05\x1F#\x03\x02\x0E\x15\x03\x02\x17\x1C\x03\x02\x1D\x1E\x03" +
		"\x02\t\n\x02\u0239\x02S\x03\x02\x02\x02\x04Y\x03\x02\x02\x02\x06a\x03" +
		"\x02\x02\x02\b\x8E\x03\x02\x02\x02\n\xB6\x03\x02\x02\x02\f\xC3\x03\x02" +
		"\x02\x02\x0E\xCD\x03\x02\x02\x02\x10\xD1\x03\x02\x02\x02\x12\xD6\x03\x02" +
		"\x02\x02\x14\xD9\x03\x02\x02\x02\x16\xDD\x03\x02\x02\x02\x18\xE6\x03\x02" +
		"\x02\x02\x1A\xEA\x03\x02\x02\x02\x1C\xEC\x03\x02\x02\x02\x1E\xEE\x03\x02" +
		"\x02\x02 \xF0\x03\x02\x02\x02\"\xF2\x03\x02\x02\x02$\xF4\x03\x02\x02\x02" +
		"&\u0104\x03\x02\x02\x02(\u010E\x03\x02\x02\x02*\u0118\x03\x02\x02\x02" +
		",\u011A\x03\x02\x02\x02.\u012D\x03\x02\x02\x020\u013B\x03\x02\x02\x02" +
		"2\u0143\x03\x02\x02\x024\u0148\x03\x02\x02\x026\u014B\x03\x02\x02\x02" +
		"8\u0150\x03\x02\x02\x02:\u0159\x03\x02\x02\x02<\u015E\x03\x02\x02\x02" +
		">\u0160\x03\x02\x02\x02@\u0162\x03\x02\x02\x02B\u017E\x03\x02\x02\x02" +
		"D\u0180\x03\x02\x02\x02F\u0198\x03\x02\x02\x02H\u01B2\x03\x02\x02\x02" +
		"J\u01B8\x03\x02\x02\x02L\u01E0\x03\x02\x02\x02N\u01FA\x03\x02\x02\x02" +
		"P\u0205\x03\x02\x02\x02RT\x05\x04\x03\x02SR\x03\x02\x02\x02TU\x03\x02" +
		"\x02\x02US\x03\x02\x02\x02UV\x03\x02\x02\x02V\x03\x03\x02\x02\x02WZ\x05" +
		"\x06\x04\x02XZ\x05\b\x05\x02YW\x03\x02\x02\x02YX\x03\x02\x02\x02Z\x05" +
		"\x03\x02\x02\x02[b\x05\f\x07\x02\\b\x05D#\x02]b\x05F$\x02^b\x050\x19\x02" +
		"_b\x05> \x02`b\x05<\x1F\x02a[\x03\x02\x02\x02a\\\x03\x02\x02\x02a]\x03" +
		"\x02\x02\x02a^\x03\x02\x02\x02a_\x03\x02\x02\x02a`\x03\x02\x02\x02b\x07" +
		"\x03\x02\x02\x02cd\b\x05\x01\x02de\x07A\x02\x02en\x07*\x02\x02fk\x05\b" +
		"\x05\x02gh\x07\x04\x02\x02hj\x05\b\x05\x02ig\x03\x02\x02\x02jm\x03\x02" +
		"\x02\x02ki\x03\x02\x02\x02kl\x03\x02\x02\x02lo\x03\x02\x02\x02mk\x03\x02" +
		"\x02\x02nf\x03\x02\x02\x02no\x03\x02\x02\x02op\x03\x02\x02\x02p\x8F\x07" +
		"+\x02\x02q\x8F\x05@!\x02r\x8F\x05*\x16\x02s\x8F\x07@\x02\x02t\x8F\x07" +
		"A\x02\x02uv\x07\x1D\x02\x02v\x8F\x05\b\x05\x14wx\x07\x1E\x02\x02x\x8F" +
		"\x05\b\x05\x13yz\x07\x18\x02\x02z\x8F\x05\b\x05\x10{|\x07\x16\x02\x02" +
		"|\x8F\x05\b\x05\x0F}~\x07A\x02\x02~\x7F\x05\x18\r\x02\x7F\x80\x05\b\x05" +
		"\x07\x80\x8F\x03\x02\x02\x02\x81\x82\x05(\x15\x02\x82\x83\x05\x18\r\x02" +
		"\x83\x84\x05\b\x05\x06\x84\x8F\x03\x02\x02\x02\x85\x8F\x05(\x15\x02\x86" +
		"\x87\x07*\x02\x02\x87\x88\x05\b\x05\x02\x88\x89\x07+\x02\x02\x89\x8F\x03" +
		"\x02\x02\x02\x8A\x8C\x078\x02\x02\x8B\x8D\x05\b\x05\x02\x8C\x8B\x03\x02" +
		"\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8F\x03\x02\x02\x02\x8Ec\x03\x02" +
		"\x02\x02\x8Eq\x03\x02\x02\x02\x8Er\x03\x02\x02\x02\x8Es\x03\x02\x02\x02" +
		"\x8Et\x03\x02\x02\x02\x8Eu\x03\x02\x02\x02\x8Ew\x03\x02\x02\x02\x8Ey\x03" +
		"\x02\x02\x02\x8E{\x03\x02\x02\x02\x8E}\x03\x02\x02\x02\x8E\x81\x03\x02" +
		"\x02\x02\x8E\x85\x03\x02\x02\x02\x8E\x86\x03\x02\x02\x02\x8E\x8A\x03\x02" +
		"\x02\x02\x8F\xB3\x03\x02\x02\x02\x90\x91\f\x0E\x02\x02\x91\x92\x07\x1C" +
		"\x02\x02\x92\xB2\x05\b\x05\x0E\x93\x94\f\r\x02\x02\x94\x95\t\x02\x02\x02" +
		"\x95\xB2\x05\b\x05\x0E\x96\x97\f\f\x02\x02\x97\x98\t\x03\x02\x02\x98\xB2" +
		"\x05\b\x05\r\x99\x9A\f\v\x02\x02\x9A\x9B\t\x04\x02\x02\x9B\xB2\x05\b\x05" +
		"\f\x9C\x9D\f\n\x02\x02\x9D\x9E\t\x05\x02\x02\x9E\xB2\x05\b\x05\v\x9F\xA0" +
		"\f\t\x02\x02\xA0\xA1\x07\x14\x02\x02\xA1\xB2\x05\b\x05\n\xA2\xA3\f\b\x02" +
		"\x02\xA3\xA4\x07\x15\x02\x02\xA4\xB2\x05\b\x05\t\xA5\xA6\f\x1B\x02\x02" +
		"\xA6\xB2\x05$\x13\x02\xA7\xA8\f\x1A\x02\x02\xA8\xA9\x07\b\x02\x02\xA9" +
		"\xAB\x07A\x02\x02\xAA\xAC\x05\n\x06\x02\xAB\xAA\x03\x02\x02\x02\xAB\xAC" +
		"\x03\x02\x02\x02\xAC\xB2\x03\x02\x02\x02\xAD\xAE\f\x12\x02\x02\xAE\xB2" +
		"\x07\x1D\x02\x02\xAF\xB0\f\x11\x02\x02\xB0\xB2\x07\x1E\x02\x02\xB1\x90" +
		"\x03\x02\x02\x02\xB1\x93\x03\x02\x02\x02\xB1\x96\x03\x02\x02\x02\xB1\x99" +
		"\x03\x02\x02\x02\xB1\x9C\x03\x02\x02\x02\xB1\x9F\x03\x02\x02\x02\xB1\xA2" +
		"\x03\x02\x02\x02\xB1\xA5\x03\x02\x02\x02\xB1\xA7\x03\x02\x02\x02\xB1\xAD" +
		"\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB5\x03\x02\x02\x02\xB3\xB1" +
		"\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\t\x03\x02\x02\x02\xB5\xB3" +
		"\x03\x02\x02\x02\xB6\xBF\x07*\x02\x02\xB7\xBC\x05\b\x05\x02\xB8\xB9\x07" +
		"\x04\x02\x02\xB9\xBB\x05\b\x05\x02\xBA\xB8\x03\x02\x02\x02\xBB\xBE\x03" +
		"\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xC0\x03" +
		"\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBF\xB7\x03\x02\x02\x02\xBF\xC0\x03" +
		"\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC2\x07+\x02\x02\xC2\v\x03\x02" +
		"\x02\x02\xC3\xC7\x05\x0E\b\x02\xC4\xC6\x05\x10\t\x02\xC5\xC4\x03\x02\x02" +
		"\x02\xC6\xC9\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC8\x03\x02\x02" +
		"\x02\xC8\xCB\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xCA\xCC\x05\x12\n" +
		"\x02\xCB\xCA\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\r\x03\x02\x02" +
		"\x02\xCD\xCE\x07<\x02\x02\xCE\xCF\x05\x14\v\x02\xCF\xD0\x05\x16\f\x02" +
		"\xD0\x0F\x03\x02\x02\x02\xD1\xD2\x07=\x02\x02\xD2\xD3\x07<\x02\x02\xD3" +
		"\xD4\x05\x14\v\x02\xD4\xD5\x05\x16\f\x02\xD5\x11\x03\x02\x02\x02\xD6\xD7" +
		"\x07=\x02\x02\xD7\xD8\x05\x16\f\x02\xD8\x13\x03\x02\x02\x02\xD9\xDA\x07" +
		"*\x02\x02\xDA\xDB\x05\b\x05\x02\xDB\xDC\x07+\x02\x02\xDC\x15\x03\x02\x02" +
		"\x02\xDD\xE1\x07,\x02\x02\xDE\xE0\x05\x04\x03\x02\xDF\xDE\x03\x02\x02" +
		"\x02\xE0\xE3\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE1\xE2\x03\x02\x02" +
		"\x02\xE2\xE4\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE4\xE5\x07-\x02" +
		"\x02\xE5\x17\x03\x02\x02\x02\xE6\xE7\t\x06\x02\x02\xE7\x19\x03\x02\x02" +
		"\x02\xE8\xEB\x05\x1C\x0F\x02\xE9\xEB\x05\x1E\x10\x02\xEA\xE8\x03\x02\x02" +
		"\x02\xEA\xE9\x03\x02\x02\x02\xEB\x1B\x03\x02\x02\x02\xEC\xED\t\x07\x02" +
		"\x02\xED\x1D\x03\x02\x02\x02\xEE\xEF\t\b\x02\x02\xEF\x1F\x03\x02\x02\x02" +
		"\xF0\xF1\x07\x16\x02\x02\xF1!\x03\x02\x02\x02\xF2\xF3\t\t\x02\x02\xF3" +
		"#\x03\x02\x02\x02\xF4\xF5\x07(\x02\x02\xF5\xF6\x05\b\x05\x02\xF6\xF7\x07" +
		")\x02\x02\xF7%\x03\x02\x02\x02\xF8\xF9\b\x14\x01\x02\xF9\u0105\x07$\x02" +
		"\x02\xFA\u0105\x07%\x02\x02\xFB\u0105\x07&\x02\x02\xFC\u0105\x07\'\x02" +
		"\x02\xFD\u0105\x07A\x02\x02\xFE\xFF\x07,\x02\x02\xFF\u0100\x05&\x14\x02" +
		"\u0100\u0101\x07\x04\x02\x02\u0101\u0102\x05&\x14\x02\u0102\u0103\x07" +
		"-\x02\x02\u0103\u0105\x03\x02\x02\x02\u0104\xF8\x03\x02\x02\x02\u0104" +
		"\xFA\x03\x02\x02\x02\u0104\xFB\x03\x02\x02\x02\u0104\xFC\x03\x02\x02\x02" +
		"\u0104\xFD\x03\x02\x02\x02\u0104\xFE\x03\x02\x02\x02\u0105\u010B\x03\x02" +
		"\x02\x02\u0106\u0107\f\x04\x02\x02\u0107\u0108\x07(\x02\x02\u0108\u010A" +
		"\x07)\x02\x02\u0109\u0106\x03\x02\x02\x02\u010A\u010D\x03\x02\x02\x02" +
		"\u010B\u0109\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\'\x03\x02" +
		"\x02\x02\u010D\u010B\x03\x02\x02\x02\u010E\u010F\x05&\x14\x02\u010F\u0110" +
		"\x07A\x02\x02\u0110)\x03\x02\x02\x02\u0111\u0119\x07.\x02\x02\u0112\u0119" +
		"\x07/\x02\x02\u0113\u0119\x070\x02\x02\u0114\u0119\x071\x02\x02\u0115" +
		"\u0119\x072\x02\x02\u0116\u0119\x05,\x17\x02\u0117\u0119\x05.\x18\x02" +
		"\u0118\u0111\x03\x02\x02\x02\u0118\u0112\x03\x02\x02\x02\u0118\u0113\x03" +
		"\x02\x02\x02\u0118\u0114\x03\x02\x02\x02\u0118\u0115\x03\x02\x02\x02\u0118" +
		"\u0116\x03\x02\x02\x02\u0118\u0117\x03\x02\x02\x02\u0119+\x03\x02\x02" +
		"\x02\u011A\u0129\x07,\x02\x02\u011B\u011C\x05\b\x05\x02\u011C\u011D\x07" +
		"\x07\x02\x02\u011D\u011E\x05\b\x05\x02\u011E\u011F\x07\x04\x02\x02\u011F" +
		"\u0121\x03\x02\x02\x02\u0120\u011B\x03\x02\x02\x02\u0121\u0124\x03\x02" +
		"\x02\x02\u0122\u0120\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123" +
		"\u0125\x03\x02\x02\x02\u0124\u0122\x03\x02\x02\x02\u0125\u0126\x05\b\x05" +
		"\x02\u0126\u0127\x07\x07\x02\x02\u0127\u0128\x05\b\x05\x02\u0128\u012A" +
		"\x03\x02\x02\x02\u0129\u0122\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02" +
		"\u012A\u012B\x03\x02\x02\x02\u012B\u012C\x07-\x02\x02\u012C-\x03\x02\x02" +
		"\x02\u012D\u0133\x07(\x02\x02\u012E\u012F\x05\b\x05\x02\u012F\u0130\x07" +
		"\x04\x02\x02\u0130\u0132\x03\x02\x02\x02\u0131\u012E\x03\x02\x02\x02\u0132" +
		"\u0135\x03\x02\x02\x02\u0133\u0131\x03\x02\x02\x02\u0133\u0134\x03\x02" +
		"\x02\x02\u0134\u0137\x03\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0136" +
		"\u0138\x05\b\x05\x02\u0137\u0136\x03\x02\x02\x02\u0137\u0138\x03\x02\x02" +
		"\x02\u0138\u0139\x03\x02\x02\x02\u0139\u013A\x07)\x02\x02\u013A/\x03\x02" +
		"\x02\x02\u013B\u013C\x052\x1A\x02\u013C\u013D\x07,\x02\x02\u013D\u013E" +
		"\x054\x1B\x02\u013E\u013F\x07-\x02\x02\u013F1\x03\x02\x02\x02\u0140\u0144" +
		"\x056\x1C\x02\u0141\u0144\x058\x1D\x02\u0142\u0144\x05:\x1E\x02\u0143" +
		"\u0140\x03\x02\x02\x02\u0143\u0141\x03\x02\x02\x02\u0143\u0142\x03\x02" +
		"\x02\x02\u01443\x03\x02\x02\x02\u0145\u0147\x05\x04\x03\x02\u0146\u0145" +
		"\x03\x02\x02\x02\u0147\u014A\x03\x02\x02\x02\u0148\u0146\x03\x02\x02\x02" +
		"\u0148\u0149\x03\x02\x02\x02\u01495\x03\x02\x02\x02\u014A\u0148\x03\x02" +
		"\x02\x02\u014B\u014C\x079\x02\x02\u014C\u014D\x07*\x02\x02\u014D\u014E" +
		"\x05\b\x05\x02\u014E\u014F\x07+\x02\x02\u014F7\x03\x02\x02\x02\u0150\u0151" +
		"\x079\x02\x02\u0151\u0152\x07*\x02\x02\u0152\u0153\x05(\x15\x02\u0153" +
		"\u0154\x07\x05\x02\x02\u0154\u0155\x05\b\x05\x02\u0155\u0156\t\n\x02\x02" +
		"\u0156\u0157\x05\b\x05\x02\u0157\u0158\x07+\x02\x02\u01589\x03\x02\x02" +
		"\x02\u0159\u015A\x07:\x02\x02\u015A\u015B\x07*\x02\x02\u015B\u015C\x05" +
		"\b\x05\x02\u015C\u015D\x07+\x02\x02\u015D;\x03\x02\x02\x02\u015E\u015F" +
		"\x076\x02\x02\u015F=\x03\x02\x02\x02\u0160\u0161\x077\x02\x02\u0161?\x03" +
		"\x02\x02\x02\u0162\u0163\x05B\"\x02\u0163\u016C\x07*\x02\x02\u0164\u0169" +
		"\x05\b\x05\x02\u0165\u0166\x07\x04\x02\x02\u0166\u0168\x05\b\x05\x02\u0167" +
		"\u0165\x03\x02\x02\x02\u0168\u016B\x03\x02\x02\x02\u0169\u0167\x03\x02" +
		"\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A\u016D\x03\x02\x02\x02\u016B" +
		"\u0169\x03\x02\x02\x02\u016C\u0164\x03\x02\x02\x02\u016C\u016D\x03\x02" +
		"\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E\u016F\x07+\x02\x02\u016FA\x03" +
		"\x02\x02\x02\u0170\u0172\x07A\x02\x02\u0171\u0173\x05$\x13\x02\u0172\u0171" +
		"\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173\u0176\x03\x02\x02\x02" +
		"\u0174\u0175\x07\b\x02\x02\u0175\u0177\x05\b\x05\x02\u0176\u0174\x03\x02" +
		"\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u017F\x03\x02\x02\x02\u0178" +
		"\u017F\x07@\x02\x02\u0179\u017F\x05*\x16\x02\u017A\u017B\x07*\x02\x02" +
		"\u017B\u017C\x05\b\x05\x02\u017C\u017D\x07+\x02\x02\u017D\u017F\x03\x02" +
		"\x02\x02\u017E\u0170\x03\x02\x02\x02\u017E\u0178\x03\x02\x02\x02\u017E" +
		"\u0179\x03\x02\x02\x02\u017E\u017A\x03\x02\x02\x02\u017FC\x03\x02\x02" +
		"\x02\u0180\u0181\x05&\x14\x02\u0181\u0182\x07;\x02\x02\u0182\u0183\x07" +
		"A\x02\x02\u0183\u018C\x07*\x02\x02\u0184\u0189\x05(\x15\x02\u0185\u0186" +
		"\x07\x04\x02\x02\u0186\u0188\x05(\x15\x02\u0187\u0185\x03\x02\x02\x02" +
		"\u0188\u018B\x03\x02\x02\x02\u0189\u0187\x03\x02\x02\x02\u0189\u018A\x03" +
		"\x02\x02\x02\u018A\u018D\x03\x02\x02\x02\u018B\u0189\x03\x02\x02\x02\u018C" +
		"\u0184\x03\x02\x02\x02\u018C\u018D\x03\x02\x02\x02\u018D\u018E\x03\x02" +
		"\x02\x02\u018E\u018F\x07+\x02\x02\u018F\u0193\x07,\x02\x02\u0190\u0192" +
		"\x05\x04\x03\x02\u0191\u0190\x03\x02\x02\x02\u0192\u0195\x03\x02\x02\x02" +
		"\u0193\u0191\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u0196\x03" +
		"\x02\x02\x02\u0195\u0193\x03\x02\x02\x02\u0196\u0197\x07-\x02\x02\u0197" +
		"E\x03\x02\x02\x02\u0198\u0199\x07>\x02\x02\u0199\u019C\x07A\x02\x02\u019A" +
		"\u019B\x07\r\x02\x02\u019B\u019D\x07A\x02\x02\u019C\u019A\x03\x02\x02" +
		"\x02\u019C\u019D\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E\u01A3" +
		"\x07,\x02\x02\u019F\u01A2\x05H%\x02\u01A0\u01A2\x05L\'\x02\u01A1\u019F" +
		"\x03\x02\x02\x02\u01A1\u01A0\x03\x02\x02\x02\u01A2\u01A5\x03\x02\x02\x02" +
		"\u01A3\u01A1\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4\u01A7\x03" +
		"\x02\x02\x02\u01A5\u01A3\x03\x02\x02\x02\u01A6\u01A8\x05J&\x02\u01A7\u01A6" +
		"\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01AD\x03\x02\x02\x02" +
		"\u01A9\u01AC\x05H%\x02\u01AA\u01AC\x05L\'\x02\u01AB\u01A9\x03\x02\x02" +
		"\x02\u01AB\u01AA\x03\x02\x02\x02\u01AC\u01AF\x03\x02\x02\x02\u01AD\u01AB" +
		"\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01B0\x03\x02\x02\x02" +
		"\u01AF\u01AD\x03\x02\x02\x02\u01B0\u01B1\x07-\x02\x02\u01B1G\x03\x02\x02" +
		"\x02\u01B2\u01B6\x05(\x15\x02\u01B3\u01B4\x05\x18\r\x02\u01B4\u01B5\x05" +
		"\b\x05\x02\u01B5\u01B7\x03\x02\x02\x02\u01B6\u01B3\x03\x02\x02\x02\u01B6" +
		"\u01B7\x03\x02\x02\x02\u01B7I\x03\x02\x02\x02\u01B8\u01B9\x07A\x02\x02" +
		"\u01B9\u01C6\x07A\x02\x02\u01BA\u01C7\x07\f\x02\x02\u01BB\u01BC\x07\x05" +
		"\x02\x02\u01BC\u01C1\x05(\x15\x02\u01BD\u01BE\x07\x04\x02\x02\u01BE\u01C0" +
		"\x05(\x15\x02\u01BF\u01BD\x03\x02\x02\x02\u01C0\u01C3\x03\x02\x02\x02" +
		"\u01C1\u01BF\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01C4\x03" +
		"\x02\x02\x02\u01C3\u01C1\x03\x02\x02\x02\u01C4\u01C5\x07\v\x02\x02\u01C5" +
		"\u01C7\x03\x02\x02\x02\u01C6\u01BA\x03\x02\x02\x02\u01C6\u01BB\x03\x02" +
		"\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01D6\x07,\x02\x02\u01C9\u01CA" +
		"\x07@\x02\x02\u01CA\u01D3\x07*\x02\x02\u01CB\u01D0\x05\b\x05\x02\u01CC" +
		"\u01CD\x07\x04\x02\x02\u01CD\u01CF\x05\b\x05\x02\u01CE\u01CC\x03\x02\x02" +
		"\x02\u01CF\u01D2\x03\x02\x02\x02\u01D0\u01CE\x03\x02\x02\x02\u01D0\u01D1" +
		"\x03\x02\x02\x02\u01D1\u01D4\x03\x02\x02\x02\u01D2\u01D0\x03\x02\x02\x02" +
		"\u01D3\u01CB\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4\u01D5\x03" +
		"\x02\x02\x02\u01D5\u01D7\x07+\x02\x02\u01D6\u01C9\x03\x02\x02\x02\u01D6" +
		"\u01D7\x03\x02\x02\x02\u01D7\u01DB\x03\x02\x02\x02\u01D8\u01DA\x05N(\x02" +
		"\u01D9\u01D8\x03\x02\x02\x02\u01DA\u01DD\x03\x02\x02\x02\u01DB\u01D9\x03" +
		"\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC\u01DE\x03\x02\x02\x02\u01DD" +
		"\u01DB\x03\x02\x02\x02\u01DE\u01DF\x07-\x02\x02\u01DFK\x03\x02\x02\x02" +
		"\u01E0\u01E1\x05&\x14\x02\u01E1\u01E2\x07;\x02\x02\u01E2\u01E3\x07A\x02" +
		"\x02\u01E3\u01EC\x07*\x02\x02\u01E4\u01E9\x05(\x15\x02\u01E5\u01E6\x07" +
		"\x04\x02\x02\u01E6\u01E8\x05(\x15\x02\u01E7\u01E5\x03\x02\x02\x02\u01E8" +
		"\u01EB\x03\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01E9\u01EA\x03\x02" +
		"\x02\x02\u01EA\u01ED\x03\x02\x02\x02\u01EB\u01E9\x03\x02\x02\x02\u01EC" +
		"\u01E4\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED\u01EE\x03\x02" +
		"\x02\x02\u01EE\u01EF\x07+\x02\x02\u01EF\u01F3\x07,\x02\x02\u01F0\u01F2" +
		"\x05N(\x02\u01F1\u01F0\x03\x02\x02\x02\u01F2\u01F5\x03\x02\x02\x02\u01F3" +
		"\u01F1\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4\u01F6\x03\x02" +
		"\x02\x02\u01F5\u01F3\x03\x02\x02\x02\u01F6\u01F7\x07-\x02\x02\u01F7M\x03" +
		"\x02\x02\x02\u01F8\u01FB\x05\x06\x04\x02\u01F9\u01FB\x05P)\x02\u01FA\u01F8" +
		"\x03\x02\x02\x02\u01FA\u01F9\x03\x02\x02\x02\u01FBO\x03\x02\x02\x02\u01FC" +
		"\u0206\x05\b\x05\x02\u01FD\u0200\x07?\x02\x02\u01FE\u01FF\x07\b\x02\x02" +
		"\u01FF\u0201\x05\b\x05\x02\u0200\u01FE\x03\x02\x02\x02\u0200\u0201\x03" +
		"\x02\x02\x02\u0201\u0206\x03\x02\x02\x02\u0202\u0203\x07@\x02\x02\u0203" +
		"\u0204\x07\b\x02\x02\u0204\u0206\x05\b\x05\x02\u0205\u01FC\x03\x02\x02" +
		"\x02\u0205\u01FD\x03\x02\x02\x02\u0205\u0202\x03\x02\x02\x02\u0206Q\x03" +
		"\x02\x02\x026UYakn\x8C\x8E\xAB\xB1\xB3\xBC\xBF\xC7\xCB\xE1\xEA\u0104\u010B" +
		"\u0118\u0122\u0129\u0133\u0137\u0143\u0148\u0169\u016C\u0172\u0176\u017E" +
		"\u0189\u018C\u0193\u019C\u01A1\u01A3\u01A7\u01AB\u01AD\u01B6\u01C1\u01C6" +
		"\u01D0\u01D3\u01D6\u01DB\u01E9\u01EC\u01F3\u01FA\u0200\u0205";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ShortScriptParser.__ATN) {
			ShortScriptParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ShortScriptParser._serializedATN));
		}

		return ShortScriptParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public sourceElement(): SourceElementContext[];
	public sourceElement(i: number): SourceElementContext;
	public sourceElement(i?: number): SourceElementContext | SourceElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SourceElementContext);
		} else {
			return this.getRuleContext(i, SourceElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_program; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SourceElementContext extends ParserRuleContext {
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_sourceElement; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitSourceElement) {
			return visitor.visitSourceElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public conditional(): ConditionalContext | undefined {
		return this.tryGetRuleContext(0, ConditionalContext);
	}
	public functionDefinition(): FunctionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, FunctionDefinitionContext);
	}
	public classDefinition(): ClassDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ClassDefinitionContext);
	}
	public loopStatement(): LoopStatementContext | undefined {
		return this.tryGetRuleContext(0, LoopStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_statement; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class IdentifierSubscriptExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public subscriptOperator(): SubscriptOperatorContext {
		return this.getRuleContext(0, SubscriptOperatorContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitIdentifierSubscriptExpression) {
			return visitor.visitIdentifierSubscriptExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierDotExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Dot(): TerminalNode { return this.getToken(ShortScriptParser.Dot, 0); }
	public Identifier(): TerminalNode { return this.getToken(ShortScriptParser.Identifier, 0); }
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitIdentifierDotExpression) {
			return visitor.visitIdentifierDotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierCallExpressionContext extends ExpressionContext {
	public Identifier(): TerminalNode { return this.getToken(ShortScriptParser.Identifier, 0); }
	public OpenParen(): TerminalNode { return this.getToken(ShortScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(ShortScriptParser.CloseParen, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ShortScriptParser.Comma);
		} else {
			return this.getToken(ShortScriptParser.Comma, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitIdentifierCallExpression) {
			return visitor.visitIdentifierCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EntityCallExpressionContext extends ExpressionContext {
	public entityCall(): EntityCallContext {
		return this.getRuleContext(0, EntityCallContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitEntityCallExpression) {
			return visitor.visitEntityCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralExpressionContext extends ExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitLiteralExpression) {
			return visitor.visitLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SuperExpressionContext extends ExpressionContext {
	public Super(): TerminalNode { return this.getToken(ShortScriptParser.Super, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitSuperExpression) {
			return visitor.visitSuperExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierExpressionContext extends ExpressionContext {
	public Identifier(): TerminalNode { return this.getToken(ShortScriptParser.Identifier, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitIdentifierExpression) {
			return visitor.visitIdentifierExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreIncrementExpressionContext extends ExpressionContext {
	public PlusPlus(): TerminalNode { return this.getToken(ShortScriptParser.PlusPlus, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitPreIncrementExpression) {
			return visitor.visitPreIncrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreDecrementExpressionContext extends ExpressionContext {
	public MinusMinus(): TerminalNode { return this.getToken(ShortScriptParser.MinusMinus, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitPreDecrementExpression) {
			return visitor.visitPreDecrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PostIncrementExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public PlusPlus(): TerminalNode { return this.getToken(ShortScriptParser.PlusPlus, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitPostIncrementExpression) {
			return visitor.visitPostIncrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PostDecrementExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public MinusMinus(): TerminalNode { return this.getToken(ShortScriptParser.MinusMinus, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitPostDecrementExpression) {
			return visitor.visitPostDecrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryMinutExpressionContext extends ExpressionContext {
	public Minus(): TerminalNode { return this.getToken(ShortScriptParser.Minus, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitUnaryMinutExpression) {
			return visitor.visitUnaryMinutExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotExpressionContext extends ExpressionContext {
	public Not(): TerminalNode { return this.getToken(ShortScriptParser.Not, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitNotExpression) {
			return visitor.visitNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PowerExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	public Power(): TerminalNode { return this.getToken(ShortScriptParser.Power, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitPowerExpression) {
			return visitor.visitPowerExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicativeExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.Multiply, 0); }
	public Divide(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.Divide, 0); }
	public Modulus(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.Modulus, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditiveExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Plus(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.Minus, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationalExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.LessThan, 0); }
	public LessThanEquals(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.LessThanEquals, 0); }
	public MoreThan(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.MoreThan, 0); }
	public MoreThanEquals(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.MoreThanEquals, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualityExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Equals(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.Equals, 0); }
	public NotEquals(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.NotEquals, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalAndExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	public And(): TerminalNode { return this.getToken(ShortScriptParser.And, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitLogicalAndExpression) {
			return visitor.visitLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalOrExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	public Or(): TerminalNode { return this.getToken(ShortScriptParser.Or, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitLogicalOrExpression) {
			return visitor.visitLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignmentExpressionContext extends ExpressionContext {
	public Identifier(): TerminalNode { return this.getToken(ShortScriptParser.Identifier, 0); }
	public assignment(): AssignmentContext {
		return this.getRuleContext(0, AssignmentContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitAssignmentExpression) {
			return visitor.visitAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VariableDefinitionWithAssignmentExpressionContext extends ExpressionContext {
	public variableDefinition(): VariableDefinitionContext {
		return this.getRuleContext(0, VariableDefinitionContext);
	}
	public assignment(): AssignmentContext {
		return this.getRuleContext(0, AssignmentContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitVariableDefinitionWithAssignmentExpression) {
			return visitor.visitVariableDefinitionWithAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VariableDefinitionExpressionContext extends ExpressionContext {
	public variableDefinition(): VariableDefinitionContext {
		return this.getRuleContext(0, VariableDefinitionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitVariableDefinitionExpression) {
			return visitor.visitVariableDefinitionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GroupExpressionContext extends ExpressionContext {
	public OpenParen(): TerminalNode { return this.getToken(ShortScriptParser.OpenParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(ShortScriptParser.CloseParen, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitGroupExpression) {
			return visitor.visitGroupExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReturnExpressionContext extends ExpressionContext {
	public Return(): TerminalNode { return this.getToken(ShortScriptParser.Return, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitReturnExpression) {
			return visitor.visitReturnExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public OpenParen(): TerminalNode { return this.getToken(ShortScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(ShortScriptParser.CloseParen, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ShortScriptParser.Comma);
		} else {
			return this.getToken(ShortScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_arguments; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalContext extends ParserRuleContext {
	public ifConditional(): IfConditionalContext {
		return this.getRuleContext(0, IfConditionalContext);
	}
	public eifConditional(): EifConditionalContext[];
	public eifConditional(i: number): EifConditionalContext;
	public eifConditional(i?: number): EifConditionalContext | EifConditionalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EifConditionalContext);
		} else {
			return this.getRuleContext(i, EifConditionalContext);
		}
	}
	public eConditional(): EConditionalContext | undefined {
		return this.tryGetRuleContext(0, EConditionalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_conditional; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitConditional) {
			return visitor.visitConditional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfConditionalContext extends ParserRuleContext {
	public If(): TerminalNode { return this.getToken(ShortScriptParser.If, 0); }
	public conditionalHead(): ConditionalHeadContext {
		return this.getRuleContext(0, ConditionalHeadContext);
	}
	public conditionalBody(): ConditionalBodyContext {
		return this.getRuleContext(0, ConditionalBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_ifConditional; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitIfConditional) {
			return visitor.visitIfConditional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EifConditionalContext extends ParserRuleContext {
	public Else(): TerminalNode { return this.getToken(ShortScriptParser.Else, 0); }
	public If(): TerminalNode { return this.getToken(ShortScriptParser.If, 0); }
	public conditionalHead(): ConditionalHeadContext {
		return this.getRuleContext(0, ConditionalHeadContext);
	}
	public conditionalBody(): ConditionalBodyContext {
		return this.getRuleContext(0, ConditionalBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_eifConditional; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitEifConditional) {
			return visitor.visitEifConditional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EConditionalContext extends ParserRuleContext {
	public Else(): TerminalNode { return this.getToken(ShortScriptParser.Else, 0); }
	public conditionalBody(): ConditionalBodyContext {
		return this.getRuleContext(0, ConditionalBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_eConditional; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitEConditional) {
			return visitor.visitEConditional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalHeadContext extends ParserRuleContext {
	public OpenParen(): TerminalNode { return this.getToken(ShortScriptParser.OpenParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(ShortScriptParser.CloseParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_conditionalHead; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitConditionalHead) {
			return visitor.visitConditionalHead(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalBodyContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(ShortScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(ShortScriptParser.CloseBrace, 0); }
	public sourceElement(): SourceElementContext[];
	public sourceElement(i: number): SourceElementContext;
	public sourceElement(i?: number): SourceElementContext | SourceElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SourceElementContext);
		} else {
			return this.getRuleContext(i, SourceElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_conditionalBody; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitConditionalBody) {
			return visitor.visitConditionalBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public Assign(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.Assign, 0); }
	public MultiplyAssign(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.MultiplyAssign, 0); }
	public DivideAssign(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.DivideAssign, 0); }
	public ModulusAssign(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.ModulusAssign, 0); }
	public PlusAssign(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.PlusAssign, 0); }
	public MinusAssign(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.MinusAssign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_assignment; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinaryOperatorContext extends ParserRuleContext {
	public binaryLogicOperator(): BinaryLogicOperatorContext | undefined {
		return this.tryGetRuleContext(0, BinaryLogicOperatorContext);
	}
	public binaryArithmeticOperator(): BinaryArithmeticOperatorContext | undefined {
		return this.tryGetRuleContext(0, BinaryArithmeticOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_binaryOperator; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitBinaryOperator) {
			return visitor.visitBinaryOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinaryLogicOperatorContext extends ParserRuleContext {
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.LessThan, 0); }
	public MoreThan(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.MoreThan, 0); }
	public LessThanEquals(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.LessThanEquals, 0); }
	public MoreThanEquals(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.MoreThanEquals, 0); }
	public Equals(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.Equals, 0); }
	public NotEquals(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.NotEquals, 0); }
	public And(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.And, 0); }
	public Or(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.Or, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_binaryLogicOperator; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitBinaryLogicOperator) {
			return visitor.visitBinaryLogicOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinaryArithmeticOperatorContext extends ParserRuleContext {
	public Plus(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.Minus, 0); }
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.Multiply, 0); }
	public Divide(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.Divide, 0); }
	public Modulus(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.Modulus, 0); }
	public Power(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.Power, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_binaryArithmeticOperator; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitBinaryArithmeticOperator) {
			return visitor.visitBinaryArithmeticOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryLogicOperatorContext extends ParserRuleContext {
	public Not(): TerminalNode { return this.getToken(ShortScriptParser.Not, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_unaryLogicOperator; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitUnaryLogicOperator) {
			return visitor.visitUnaryLogicOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryArithmeticOperatorContext extends ParserRuleContext {
	public PlusPlus(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.PlusPlus, 0); }
	public MinusMinus(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.MinusMinus, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_unaryArithmeticOperator; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitUnaryArithmeticOperator) {
			return visitor.visitUnaryArithmeticOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubscriptOperatorContext extends ParserRuleContext {
	public OpenBracket(): TerminalNode { return this.getToken(ShortScriptParser.OpenBracket, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CloseBracket(): TerminalNode { return this.getToken(ShortScriptParser.CloseBracket, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_subscriptOperator; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitSubscriptOperator) {
			return visitor.visitSubscriptOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public NumberTypeLiteral(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.NumberTypeLiteral, 0); }
	public BooleanTypeLiteral(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.BooleanTypeLiteral, 0); }
	public StringTypeLiteral(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.StringTypeLiteral, 0); }
	public VoidTypeLiteral(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.VoidTypeLiteral, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.Identifier, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public OpenBracket(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.OpenBracket, 0); }
	public CloseBracket(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.CloseBracket, 0); }
	public OpenBrace(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.OpenBrace, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.Comma, 0); }
	public CloseBrace(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.CloseBrace, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_type; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDefinitionContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public Identifier(): TerminalNode { return this.getToken(ShortScriptParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_variableDefinition; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitVariableDefinition) {
			return visitor.visitVariableDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.NullLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.BooleanLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.StringLiteral, 0); }
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.IntegerLiteral, 0); }
	public FloatLiteral(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.FloatLiteral, 0); }
	public dictionaryLiteral(): DictionaryLiteralContext | undefined {
		return this.tryGetRuleContext(0, DictionaryLiteralContext);
	}
	public arrayLiteral(): ArrayLiteralContext | undefined {
		return this.tryGetRuleContext(0, ArrayLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_literal; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DictionaryLiteralContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(ShortScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(ShortScriptParser.CloseBrace, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ShortScriptParser.Colon);
		} else {
			return this.getToken(ShortScriptParser.Colon, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ShortScriptParser.Comma);
		} else {
			return this.getToken(ShortScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_dictionaryLiteral; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitDictionaryLiteral) {
			return visitor.visitDictionaryLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayLiteralContext extends ParserRuleContext {
	public OpenBracket(): TerminalNode { return this.getToken(ShortScriptParser.OpenBracket, 0); }
	public CloseBracket(): TerminalNode { return this.getToken(ShortScriptParser.CloseBracket, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ShortScriptParser.Comma);
		} else {
			return this.getToken(ShortScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_arrayLiteral; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitArrayLiteral) {
			return visitor.visitArrayLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopStatementContext extends ParserRuleContext {
	public loopHead(): LoopHeadContext {
		return this.getRuleContext(0, LoopHeadContext);
	}
	public OpenBrace(): TerminalNode { return this.getToken(ShortScriptParser.OpenBrace, 0); }
	public loopBody(): LoopBodyContext {
		return this.getRuleContext(0, LoopBodyContext);
	}
	public CloseBrace(): TerminalNode { return this.getToken(ShortScriptParser.CloseBrace, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_loopStatement; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitLoopStatement) {
			return visitor.visitLoopStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopHeadContext extends ParserRuleContext {
	public nLoopHead(): NLoopHeadContext | undefined {
		return this.tryGetRuleContext(0, NLoopHeadContext);
	}
	public forLoopHead(): ForLoopHeadContext | undefined {
		return this.tryGetRuleContext(0, ForLoopHeadContext);
	}
	public whileLoopHead(): WhileLoopHeadContext | undefined {
		return this.tryGetRuleContext(0, WhileLoopHeadContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_loopHead; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitLoopHead) {
			return visitor.visitLoopHead(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopBodyContext extends ParserRuleContext {
	public sourceElement(): SourceElementContext[];
	public sourceElement(i: number): SourceElementContext;
	public sourceElement(i?: number): SourceElementContext | SourceElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SourceElementContext);
		} else {
			return this.getRuleContext(i, SourceElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_loopBody; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitLoopBody) {
			return visitor.visitLoopBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NLoopHeadContext extends ParserRuleContext {
	public _expr!: ExpressionContext;
	public Loop(): TerminalNode { return this.getToken(ShortScriptParser.Loop, 0); }
	public OpenParen(): TerminalNode { return this.getToken(ShortScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(ShortScriptParser.CloseParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_nLoopHead; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitNLoopHead) {
			return visitor.visitNLoopHead(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForLoopHeadContext extends ParserRuleContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	public Loop(): TerminalNode { return this.getToken(ShortScriptParser.Loop, 0); }
	public OpenParen(): TerminalNode { return this.getToken(ShortScriptParser.OpenParen, 0); }
	public variableDefinition(): VariableDefinitionContext {
		return this.getRuleContext(0, VariableDefinitionContext);
	}
	public Assign(): TerminalNode { return this.getToken(ShortScriptParser.Assign, 0); }
	public CloseParen(): TerminalNode { return this.getToken(ShortScriptParser.CloseParen, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Range(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.Range, 0); }
	public RangeInclude(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.RangeInclude, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_forLoopHead; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitForLoopHead) {
			return visitor.visitForLoopHead(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileLoopHeadContext extends ParserRuleContext {
	public WhileLoop(): TerminalNode { return this.getToken(ShortScriptParser.WhileLoop, 0); }
	public OpenParen(): TerminalNode { return this.getToken(ShortScriptParser.OpenParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(ShortScriptParser.CloseParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_whileLoopHead; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitWhileLoopHead) {
			return visitor.visitWhileLoopHead(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public Break(): TerminalNode { return this.getToken(ShortScriptParser.Break, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_breakStatement; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public Continue(): TerminalNode { return this.getToken(ShortScriptParser.Continue, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_continueStatement; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EntityCallContext extends ParserRuleContext {
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	public OpenParen(): TerminalNode { return this.getToken(ShortScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(ShortScriptParser.CloseParen, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ShortScriptParser.Comma);
		} else {
			return this.getToken(ShortScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_entityCall; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitEntityCall) {
			return visitor.visitEntityCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.Identifier, 0); }
	public subscriptOperator(): SubscriptOperatorContext | undefined {
		return this.tryGetRuleContext(0, SubscriptOperatorContext);
	}
	public Dot(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.Dot, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Super(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.Super, 0); }
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public OpenParen(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.CloseParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_primaryExpression; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDefinitionContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public Function(): TerminalNode { return this.getToken(ShortScriptParser.Function, 0); }
	public Identifier(): TerminalNode { return this.getToken(ShortScriptParser.Identifier, 0); }
	public OpenParen(): TerminalNode { return this.getToken(ShortScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(ShortScriptParser.CloseParen, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(ShortScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(ShortScriptParser.CloseBrace, 0); }
	public variableDefinition(): VariableDefinitionContext[];
	public variableDefinition(i: number): VariableDefinitionContext;
	public variableDefinition(i?: number): VariableDefinitionContext | VariableDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDefinitionContext);
		} else {
			return this.getRuleContext(i, VariableDefinitionContext);
		}
	}
	public sourceElement(): SourceElementContext[];
	public sourceElement(i: number): SourceElementContext;
	public sourceElement(i?: number): SourceElementContext | SourceElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SourceElementContext);
		} else {
			return this.getRuleContext(i, SourceElementContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ShortScriptParser.Comma);
		} else {
			return this.getToken(ShortScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_functionDefinition; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitFunctionDefinition) {
			return visitor.visitFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDefinitionContext extends ParserRuleContext {
	public Class(): TerminalNode { return this.getToken(ShortScriptParser.Class, 0); }
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ShortScriptParser.Identifier);
		} else {
			return this.getToken(ShortScriptParser.Identifier, i);
		}
	}
	public OpenBrace(): TerminalNode { return this.getToken(ShortScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(ShortScriptParser.CloseBrace, 0); }
	public InheritArrow(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.InheritArrow, 0); }
	public variableDefinitionInitialization(): VariableDefinitionInitializationContext[];
	public variableDefinitionInitialization(i: number): VariableDefinitionInitializationContext;
	public variableDefinitionInitialization(i?: number): VariableDefinitionInitializationContext | VariableDefinitionInitializationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDefinitionInitializationContext);
		} else {
			return this.getRuleContext(i, VariableDefinitionInitializationContext);
		}
	}
	public methodDefinition(): MethodDefinitionContext[];
	public methodDefinition(i: number): MethodDefinitionContext;
	public methodDefinition(i?: number): MethodDefinitionContext | MethodDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodDefinitionContext);
		} else {
			return this.getRuleContext(i, MethodDefinitionContext);
		}
	}
	public constructorDefinition(): ConstructorDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ConstructorDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_classDefinition; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitClassDefinition) {
			return visitor.visitClassDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDefinitionInitializationContext extends ParserRuleContext {
	public variableDefinition(): VariableDefinitionContext {
		return this.getRuleContext(0, VariableDefinitionContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_variableDefinitionInitialization; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitVariableDefinitionInitialization) {
			return visitor.visitVariableDefinitionInitialization(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorDefinitionContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ShortScriptParser.Identifier);
		} else {
			return this.getToken(ShortScriptParser.Identifier, i);
		}
	}
	public OpenBrace(): TerminalNode { return this.getToken(ShortScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(ShortScriptParser.CloseBrace, 0); }
	public LongArrow(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.LongArrow, 0); }
	public Super(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.Super, 0); }
	public OpenParen(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.CloseParen, 0); }
	public methodBodyElement(): MethodBodyElementContext[];
	public methodBodyElement(i: number): MethodBodyElementContext;
	public methodBodyElement(i?: number): MethodBodyElementContext | MethodBodyElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodBodyElementContext);
		} else {
			return this.getRuleContext(i, MethodBodyElementContext);
		}
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.Assign, 0); }
	public variableDefinition(): VariableDefinitionContext[];
	public variableDefinition(i: number): VariableDefinitionContext;
	public variableDefinition(i?: number): VariableDefinitionContext | VariableDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDefinitionContext);
		} else {
			return this.getRuleContext(i, VariableDefinitionContext);
		}
	}
	public Arrow(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.Arrow, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ShortScriptParser.Comma);
		} else {
			return this.getToken(ShortScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_constructorDefinition; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitConstructorDefinition) {
			return visitor.visitConstructorDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDefinitionContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public Function(): TerminalNode { return this.getToken(ShortScriptParser.Function, 0); }
	public Identifier(): TerminalNode { return this.getToken(ShortScriptParser.Identifier, 0); }
	public OpenParen(): TerminalNode { return this.getToken(ShortScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(ShortScriptParser.CloseParen, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(ShortScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(ShortScriptParser.CloseBrace, 0); }
	public variableDefinition(): VariableDefinitionContext[];
	public variableDefinition(i: number): VariableDefinitionContext;
	public variableDefinition(i?: number): VariableDefinitionContext | VariableDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDefinitionContext);
		} else {
			return this.getRuleContext(i, VariableDefinitionContext);
		}
	}
	public methodBodyElement(): MethodBodyElementContext[];
	public methodBodyElement(i: number): MethodBodyElementContext;
	public methodBodyElement(i?: number): MethodBodyElementContext | MethodBodyElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodBodyElementContext);
		} else {
			return this.getRuleContext(i, MethodBodyElementContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ShortScriptParser.Comma);
		} else {
			return this.getToken(ShortScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_methodDefinition; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitMethodDefinition) {
			return visitor.visitMethodDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodBodyElementContext extends ParserRuleContext {
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public classExpression(): ClassExpressionContext | undefined {
		return this.tryGetRuleContext(0, ClassExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_methodBodyElement; }
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitMethodBodyElement) {
			return visitor.visitMethodBodyElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ShortScriptParser.RULE_classExpression; }
	public copyFrom(ctx: ClassExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class NormalExpressionContext extends ClassExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ClassExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitNormalExpression) {
			return visitor.visitNormalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ThisExpressionContext extends ClassExpressionContext {
	public This(): TerminalNode { return this.getToken(ShortScriptParser.This, 0); }
	public Dot(): TerminalNode | undefined { return this.tryGetToken(ShortScriptParser.Dot, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ClassExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitThisExpression) {
			return visitor.visitThisExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SuperDotExpressionContext extends ClassExpressionContext {
	public Super(): TerminalNode { return this.getToken(ShortScriptParser.Super, 0); }
	public Dot(): TerminalNode { return this.getToken(ShortScriptParser.Dot, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ClassExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ShortScriptVisitor<Result>): Result {
		if (visitor.visitSuperDotExpression) {
			return visitor.visitSuperDotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


